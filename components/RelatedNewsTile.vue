<style></style>

<template>
    <div class="flex flex-col border-1 border-gray-300 rounded-xl px-4 py-3" :ref="listenForTileView">
        <h2 class="font-semibold text-cyan-600 text-lg mb-4">Related Stories</h2>
        <div class="flex flex-col flex-grow col-auto justify-start gap-4">
            <div v-for="article in articles"
                class="cursor-pointer"
                v-on:click.prevent="() => navigateToArticle(article.link)"
            >
                <div class="flex flex-row flex-grow flex-wrap w-full justify-content">
                    <div class="flex flex-row gap-2 content-center justify-center items-center w-fit-content">
                        <img :src="article.source_icon" class="w-4"/>
                        <span class="text-sm">{{ article.domain }}</span>
                    </div>
                    <div class="text-sm">{{ article.age }}</div>
                </div>

                <h3 class="font-semibold lg:text-md">{{ article.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
let observer

export default {
    props: ['articles'],
    beforeUnmount () {
        observer.disconnect()
    },
    methods: {
        navigateToArticle (url) {
            console.log('tile_clicked', url)
            window.open(url, '_blank')
        },
        listenForTileView (el) {
            if (el) {
                observer = new IntersectionObserver((elements) => {
                    if (elements[0].intersectionRatio > 0) {
                        console.log('tile_shown', 'related_articles', this.articles.map(a => a.link))
                    }
                })
                observer.observe(el)
            }
        }
    }
}
</script>