<style>
</style>

<template>
    <div class="flex flex-row items-stretch bg-white gap-4 px-2 py-2 shadow-md m-4 rounded-3xl">
        <Icon name="i-lucide-search" size="24" />
        <form 
            class="flex-grow"
            v-on:submit.prevent="(e) => submitSearchQuery(e)"
        >
            <input
                class="w-full outline-0"
                type="text"
                placeholder="Search the web or type a URL"
                v-model="search"
            />
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        submitSearchQuery (e) {
            const query = new URLSearchParams({p: this.$data.search})
            window.location.assign('https://search.yahoo.com/search/?' + query.toString())
        }
    }
}
</script>