<style>
</style>

<template>
    <div>
        <Icon name="i-lucide-search" />
        <form v-on:submit.prevent="(e) => submitSearchQuery(e)">
            <input
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