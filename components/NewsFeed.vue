import NewsTile from './NewsTile'
import RelatedNewsTile from './NewsTile'

<style>
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
                    v-on:click="loadNewsQuery(cat)">

                    {{ cat }}
                </span>
            </div>
            <div class="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-2"></div>
        </div>
        <div v-if="!error" class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <NewsTile
                v-for="(article, index) in news.slice(0,3)"
                :article="article"
                :featured="index === 0" />
    
            <RelatedNewsTile :articles="related" />

            <NewsTile
                v-for="(article, index) in news.slice(3)"
                :article="article"/>
        </div>
        <div v-else class="w-full py-20 text-center">
            <span>{{ error }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: ['Home','Local','Sports','Money','Lifestyle','Politics','Health','Food','Entertainment'],
            category: 'Home',
            news: [],
            related: [],
            error: ''
        }
    },
    mounted () {
        this.loadNewsQuery(this.category)
    },
    methods: {
        loadNewsQuery (category) {
            this.error = ''
            this.category = category

            fetch(`/api/news?category=${category.toLowerCase()}`)
                .then(async (r) => {
                    const feed = await r.json()
                    this.related = feed.filter(article => !article.image_url).slice(0,3)
                    this.news = feed.filter(article => article.image_url)

                    // For display purposes, if no articles were given to related, take some from news
                    if (this.related.length < 1) {
                        this.related = this.news.slice(-2)
                        this.news = this.news.slice(0,-2)
                    }
                }).catch(e => {
                    this.error = 'News Currently Unavailable, Please Try Again'
                })

        }
    }
}
</script>