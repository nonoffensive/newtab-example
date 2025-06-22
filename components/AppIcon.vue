<style>
</style>

<template>
    <a
        class="flex flex-col align-items-center"
        :href="app.url"
        rel="nofollow"
        :aria-label="app.description"
        :alt="app.description"
    >
        <Icon :name="app.icon" />
        <span>{{app.title}}</span>
    </a>
</template>

<script>
const icons = {
    facebook: {
        title: 'Facebook',
        icon: 'i-logos-facebook',
        url: 'https://facebook.com'
    },
    youtube: {
        title: 'Youtube',
        icon: 'i-logos-youtube-icon',
        url: 'https://youtube.com'
    },
    spotify: {
        title: 'Spotify',
        icon: 'i-logos-spotify-icon',
        url: 'https://spotify.com'
    },
    dribbble: {
        title: 'Dribble',
        icon: 'i-logos-dribbble-icon',
        url: 'https://dribbble.com'
    },
    paypal: {
        title: 'PayPal',
        icon: 'i-logos-paypal',
        url: 'https://paypal.com'
    }
}

export default {
    props: {
        link: {
            type: String,
            default: ''
        }
    },
    setup (props) {
        if (props.link && props.link in icons) {
            return {
                app: {
                    ...icons[props.link],
                    description: `Navigate to ${icons[props.link].title}`
                }
            }
        }

        // Return Default Addition Icon
        return {
            app: {
                title: '',
                icon: 'i-lucide-plus',
                url: '',
                description: 'Add New Navigation Link...'
            }
        }
    }
}
</script>