<style>
</style>

<template>
    <div class="flex flex-row items-stretch bg-white gap-8 px-4 py-4 shadow-md m-4 rounded">
        <Icon name="i-lucide-search" size="24" class="text-blue-500" />
        <form class="flex-grow"
            v-on:submit.prevent="submitSearchQuery">

            <input type="text"
                class="w-full outline-0"
                placeholder="Search the web or type a URL"
                v-model="search"
            />
        </form>
    </div>
</template>

<script setup lang="ts">
let search = ''

function submitSearchQuery () {
    const query = new URLSearchParams({p: search})
    window.location.assign('https://search.yahoo.com/search/?' + query.toString())
}
</script>