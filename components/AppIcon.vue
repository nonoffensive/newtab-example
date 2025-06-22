<style>
</style>

<template>
    <a
        class="flex flex-col gap-2 content-start text-center"
        rel="nofollow"
        :href="url"
        :aria-label="description"
        :alt="description"
    >
        <span class="flex flex-row flex-wrap content-center justify-center bg-white shadow-md w-20 h-20 rounded-xl">
            <Icon :name="icon" size="44" class="align-self-center" />
        </span>
        <span>{{title}}</span>
    </a>
</template>

<script>
export default {
    props: ['title', 'icon', 'url'],
    setup (props) {
        if (props.title) {
            return {
                ...props,
                description: `Navigate to ${props.title}`
            }
        }

        // Return Default Addition Icon
        return {
            title: '',
            icon: 'i-lucide-plus',
            url: '',
            description: 'Add New Navigation Link...'
        }
    }
}
</script>