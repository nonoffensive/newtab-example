import NewsTile from './NewsTile'
import RelatedNewsTile from './NewsTile'

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}
.v-enter-to,
.v-leave-from {
    opacity: 1
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<template>
    <div class="flex flex-col items-stretch border-1 border-b-0 border-solid border-gray-300 bg-white gap-4 px-4 lg:px-10 py-6 rounded-t-3xl overflow-hidden">
        <div class="relative w-full lg:px-6 overflow-hidden">
            <div class="flex flex-row gap-4 lg:gap-7 overflow-y-auto">
                <NuxtLink v-for="title, cat in categories"
                    tabindex="0"
                    class="border-b-3 py-2 px-3 cursor-pointer transition-all duration-300 font-bold"
                    :key="cat"
                    :class="{
                        'text-cyan-600 border-cyan-600': cat === category,
                        'text-gray-500 border-white': cat !== category
                    }"
                    :aria-label="`${title} News`"
                    :to="`/${cat}`"
                    v-on:click="category = cat"
                    >

                    {{ title }}
                </NuxtLink>
            </div>
            <div class="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-2"></div>
        </div>
        <Transition mode="out-in" >
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
import { NewsCategories } from '~/data/news'
import type { NewsDataIoArticle } from '~/types/news'

console.log('Rerender?', this)

const request = useRequestURL()
const categories = NewsCategories
const category = ref(request.pathname.toLowerCase().slice(1) || 'home')

const {data: news, status, error, refresh, clear } = await useAsyncData(
    'news',
    () => $fetch('/api/news', {
        params: {
            category: category.value
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
</script>