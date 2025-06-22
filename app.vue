import SearchBar from './components/SearchBar'
import AppIcon from './components/SearchBar'
import NewFeed from './components/NewsFeed'

<template>
    <div>
        <NuxtRouteAnnouncer />
        <div class="flex flex-col justify-center gap-12 w-fill max-w-2xl m-auto">
            <div>
                <SearchBar />
            </div>
            <div v-if="apps" class="flex flex-row flex-wrap gap-8 justify-center">
                <AppIcon v-for="(app, key) in apps" :key="key" :title="app.title" :icon="app.icon" :url="app.url" />
                <AppIcon />
            </div>
            <div v-else class="flex flex-row gap-4 justify-center py-6">
                <Icon name="i-lucide-loader-circle" size="36" class="animate-spin color-blue-500" />
            </div>
        </div>
        <div class="flex flex-col px-2 pt-16">
            <NewsFeed />
        </div>
    </div>
</template>


<script>
import { onMounted } from 'vue'

export default {
    data () {
        return {
            apps: false,
            category: 'Home',
            news: false
        }
    },
    setup () {
        // TODO: Setup tasks here
    },
    mounted() {
        console.log('mounted', arguments)
        console.log('mounted Context', this)

        fetch('/api/apps').then(async (r) => {
            this.apps = await r.json()
            console.log('APPS', this.apps)
        })
    }
}
</script>