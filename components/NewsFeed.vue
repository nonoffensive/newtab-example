import NewsTile from './NewsTile'
import RelatedNewsTile from './NewsTile'

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0.0000001;
}
</style>

<template>
    <div class="flex flex-col items-stretch border-1 border-b-0 border-solid border-gray-300 bg-white gap-4 px-4 lg:px-10 py-6 rounded-t-3xl overflow-hidden">
        <div class="relative w-full lg:px-6 overflow-hidden">
            <div class="flex flex-row gap-4 lg:gap-7 overflow-y-auto">
                <span v-for="cat in categories"
                    tabindex="0"
                    class="border-b-3 py-2 px-3 cursor-pointer transition-all duration-300 font-bold"
                    :class="{
                        'text-cyan-600 border-cyan-600': cat === category,
                        'text-gray-500 border-white': cat !== category
                    }"
                    v-on:click="category = cat">

                    {{ cat }}
                </span>
            </div>
            <div class="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-2"></div>
        </div>
        <Transition>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-6" :key="category">
                <NewsTile
                    v-for="(article, index) in news?.articles"
                    :key="article.article_id"
                    :article="article"
                    :featured="index === 0" />
        
                <RelatedNewsTile v-if="news?.related && news.related.length > 0" :articles="news?.related" />
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import type { NewsDataIoArticle } from '~/types/news'

const categories = ['Home','Local','Sports','Money','Lifestyle','Politics','Health','Food','Entertainment']
const category = ref('Home')

const {data: news, status, error, refresh, clear } = await useAsyncData(
    'news',
    () => $fetch('/api/news', {
        params: {
            category: category.value.toLowerCase()
        }
    }).then((data: any) => {
        const related = data.filter((article:NewsDataIoArticle) => !article.image_url).slice(0,3)
        const articles = data.filter((article:NewsDataIoArticle)  => article.image_url)
        return {
            articles,
            related
        }
    }), {
        watch: [category]
    })

// export default {
//     data() {
//         return {
//             categories: ['Home','Local','Sports','Money','Lifestyle','Politics','Health','Food','Entertainment'],
//             category: 'Home',
//             news: [],
//             related: [],
//             error: ''
//         }
//     },
//     mounted () {
//         this.loadNewsQuery(this.category)
//     },
//     methods: {
//         loadNewsQuery (category) {
//             this.error = ''
//             this.category = category

//             fetch(`/api/news?category=${category.toLowerCase()}`)
//                 .then(async (r) => {
//                     const feed = await r.json()
//                     this.related = feed.filter(article => !article.image_url).slice(0,3)
//                     this.news = feed.filter(article => article.image_url)

//                     // For display purposes, if no articles were given to related, take some from news
//                     if (this.related.length < 1) {
//                         this.related = this.news.slice(-2)
//                         this.news = this.news.slice(0,-2)
//                     }
//                 }).catch(e => {
//                     this.error = 'News Currently Unavailable, Please Try Again'
//                 })

//         }
//     }
// }
</script>