import SearchBar from './components/SearchBar'
import AppIcon from './components/SearchBar'
import NewFeed from './components/NewsFeed'

<template>
    <div>
        <NuxtLoadingIndicator />
        <NuxtRouteAnnouncer />
        <div class="flex flex-col justify-center gap-12 w-fill max-w-2xl m-auto">
            <div>
                <SearchBar />
            </div>
            <div class="flex flex-row flex-wrap gap-8 justify-center">
                <AppIcon v-for="(app, key) in apps" :key="key" :title="app.title" :icon="app.icon" :url="app.url" />
                <AppIcon />
            </div>
        </div>
        <div class="flex flex-col px-2 pt-16">
            <NewsFeed />
        </div>
    </div>
</template>


<script setup lang="ts">
import { icons } from './data/icons'

let apps = icons

</script>