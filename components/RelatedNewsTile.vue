<style>
.first-col-second-row {
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 1;
}
</style>

<template>
    <div class="flex flex-col border-1 border-gray-300 rounded-xl px-4 py-3 first-col-second-row" ref="relatedArticleView">
        <h2 class="font-semibold text-cyan-600 text-lg mb-4">Related Stories</h2>
        <div class="flex flex-col flex-grow col-auto justify-start gap-4">
            <NuxtLink v-for="article in articles"
                class="cursor-pointer"
                :to="article.link"
                v-on:click.prevent="navigateToArticle(article.link)"
            >
                <div class="flex flex-row flex-grow flex-wrap w-full justify-content">
                    <div class="flex flex-row gap-2 content-center justify-center items-center w-fit-content">
                        <img :src="article.source_icon" class="w-4"/>
                        <span class="text-sm">{{ article.domain }}</span>
                    </div>
                    <div class="text-sm">{{ article.age }}</div>
                </div>

                <h3 class="font-semibold lg:text-md">{{ article.title }}</h3>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { tryOnBeforeUnmount, useIntersectionObserver } from '@vueuse/core';
import type { ApiNewsArticleItem } from '~/types/api';

type Props = {
    articles: ApiNewsArticleItem[]
}

const {articles} = defineProps<Props>()
const articleView = useTemplateRef('relatedArticleView')
const hasRelatedBeenViewed = ref(false)

let observer = useIntersectionObserver(
    articleView,
    ([entry], element) => {
        if (entry?.isIntersecting && !hasRelatedBeenViewed.value) {
            hasRelatedBeenViewed.value = true
            articles.map(article => console.log('tile_shown', article.link))
        }
    })

tryOnBeforeUnmount(() => {
    observer.stop()
})

function navigateToArticle (url: string) {
    console.log('tile_clicked', url)
    window.open(url, '_blank')
}
</script>