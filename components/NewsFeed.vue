import NewsTile from './NewsTile'
import RelatedNewsTile from './NewsTile'

<style>
</style>

<template>
    <div class="flex flex-col items-stretch border-1 border-b-0 border-solid border-gray-300 bg-white gap-4 px-10 py-6 rounded-t-3xl overflow-hidden">
        <div class="relative w-full px-6 overflow-hidden">
            <div class="flex flex-row gap-7 overflow-y-auto">
                <span v-for="cat in categories"
                    tabindex="0"
                    class="border-b-3 py-2 px-3 cursor-pointer transition-all duration-300 font-bold"
                    :class="{'text-cyan-600 border-cyan-600': cat === category, 'text-gray-500 border-white': cat !== category}"
                    v-on:click="loadNewsQuery(cat)"
                >
                    {{ cat }}
                </span>
            </div>
            <div class="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-2"></div>
        </div>
        <div class="grid grid-cols-4 gap-6" v-if="news.length > 0">
            <NewsTile v-for="article in news.filter(a => a.image_url !== null)" :article="article" />
            <RelatedNewsTile :articles="news.filter(n => n.image_url === null)" />
            <!-- <div v-for="article in news">
                <div>{{ news.title }}</div>
            </div> -->
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
            error: ''
        }
    },
    mounted () {
        this.loadNewsQuery(this.category)
    },
    methods: {
        loadNewsQuery (category) {
            console.log('LOAD NEWS', this)
            this.category = category

            fetch(`/api/news?category=${category.toLowerCase()}`)
                .then(async (r) => {
                    const feed = await r.json()
                    console.log('ARTICLES', feed)
                    this.news = feed
                }).catch(e => {
                    this.error = 'News Currently Unavailable, Please Try Again'
                })

        }
    }
}
</script>