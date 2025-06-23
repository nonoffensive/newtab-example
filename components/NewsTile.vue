<style></style>

<template>
    <div class="relative border-1 border-gray-300 h-80 rounded-xl overflow-hidden cursor-pointer"
        :class="{'lg:col-span-2': featured}"
        :data-article-url="article.link"
        :ref="listenForArticleView"
        v-on:click.prevent="() => navigateToArticle(article.link)">
        
        <div class="absolute top-0 w-full h-9/16 overflow-hidden bg-cover bg-center"
            :class="{'h-full': featured}"
            :style="{backgroundImage: `url(${article.image_url})`}">
            <!-- <img :src="article.image_url" class="sm:w-full no-max-width" :class="{'max-sm:h-full sm:w-full': featured}"/> -->
            <span 
                v-if="article.keywords && article.keywords.length > 0"
                class="absolute top-1 left-2 text-white text-sm font-semibold opacity-60">

                {{ article.keywords[0] }}
            </span>
        </div>
        <div class="absolute bottom-0 w-full h-7/16 flex flex-col px-3 justify-center text-gray-800"
            :class="{'h-9/16 bg-gradient-to-t from-black to-transparent text-white': featured}">

            <p v-if="featured">{{ article.source_name }}</p>
            <div v-else class="flex flex-row items-center justify-start w-fit-content gap-2 py-2">
                <span>
                    <img :src="article.source_icon" class="w-4"/>
                </span>
                <span class="text-sm">{{ article.domain }}</span>
            </div>
            <h2 class="font-semibold lg:text-lg">{{ article.title }}</h2>
        </div>
    </div>
</template>

<script>
let observer;

export default {
    props: ['article', 'featured'],
    beforeUnmount () {
        observer.disconnect()
    },
    methods: {
        navigateToArticle (url) {
            console.log('tile_clicked', url)
            window.open(url, '_blank')
        },
        listenForArticleView (el) {
            if (el) {
                observer = new IntersectionObserver((elements) => {
                    if (elements[0].intersectionRatio > 0) {
                        console.log('tile_shown', this.article.link)
                    }
                })
                observer.observe(el)
            }
        }
    }
}
</script>