import SearchBar from './components/SearchBar'
import AppIcon from './components/SearchBar'

<template>
    <div>
        <NuxtRouteAnnouncer />
        <!-- <NuxtWelcome /> -->
        <div>
            <SearchBar />
        </div>
        <div v-if="apps" class="flex flex-row gap-4 justify-center">
            <AppIcon v-for="(app, key) in apps" :key="key" :title="app.title" :icon="app.icon" :url="app.url" />
            <AppIcon />
        </div>
        <div v-else class="flex flex-row gap-4 justify-center">
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