<style></style>

<template>
    <div class="grid grid-rows-2 grid-cols-1 border-1 border-gray-300 h-80 rounded-xl overflow-hidden">
        <div class="relative overflow-hidden">
            <img :src="article.image_url" class="w-full" />
            <span 
                v-if="article.keywords && article.keywords.length > 0"
                class="absolute top-1 left-2 text-white text-sm font-semibold opacity-60"
            >
                {{ article.keywords[0] }}
            </span>
        </div>
        <div class="flex flex-col px-3 justify-center">
            <div class="flex flex-row items-center justify-start w-fit-content gap-2 py-2">
                <span>
                    <img :src="article.source_icon" class="w-4"/>
                </span>
                <span class="text-sm">{{ article.source_url }}</span>
            </div>
            <h2 class="font-semibold text-lg text-gray-800">{{ article.title }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: ['article']
}
</script>