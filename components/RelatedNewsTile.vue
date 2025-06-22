<style></style>

<template>
    <div class="flex flex-col col-auto border-1 border-gray-300 rounded-xl px-4 py-3 justify-content">
        <h2 class="font-bold text-cyan-600">Related Stories</h2>
        <div v-for="article in articles">
            <div class="flex flex-row flex-grow flex-wrap w-full justify-content">
                <div class="flex flex-row content-center justify-center items-center w-fit-content">
                    <span>
                        <img :src="article.source_icon" class="w-4"/>
                    </span>
                    <span class="text-sm">{{ article.source_url }}</span>
                </div>
                <div class="text-sm">
                    3 days ago
                </div>
            </div>
            <h3>{{ article.title }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['articles'],
    mounted () {
        console.log('RELATED NEWS', this.articles)
    }
}
</script>