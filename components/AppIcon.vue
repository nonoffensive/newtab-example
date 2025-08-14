<style>
</style>

<template>
    <a class="flex flex-col gap-2 content-start text-center hover:scale-110 transition-all duration-600 cursor-pointer"
        rel="nofollow noreferrer"
        :href="url"
        :aria-label="description"
        :alt="description">
        
        <span class="flex flex-row flex-wrap content-center justify-center bg-white shadow-md w-20 h-20 rounded-xl">
            <Icon :name="icon" size="44" class="align-self-center" />
        </span>
        <span>{{title}}</span>
    </a>
</template>

<script setup lang="ts">
type Props = {
    title?: string,
    description?: string,
    icon?: string,
    url?: string
}

const props = defineProps<Props>()

const title = props.title ?? '' 
const description = props.title ? props.description??`Navigate to ${props.title}` : 'Add New Navigation Link...'
const icon = props.icon ?? 'i-lucide-plus'
const url = props.url ?? undefined
</script>