const icons = [
    {
        title: 'Facebook',
        icon: 'i-logos-facebook',
        url: 'https://facebook.com'
    },
    {
        title: 'Youtube',
        icon: 'i-logos-youtube-icon',
        url: 'https://youtube.com'
    },
    {
        title: 'Spotify',
        icon: 'i-logos-spotify-icon',
        url: 'https://spotify.com'
    },
    {
        title: 'Dribble',
        icon: 'i-logos-dribbble-icon',
        url: 'https://dribbble.com'
    },
    {
        title: 'PayPal',
        icon: 'i-logos-paypal',
        url: 'https://paypal.com'
    }
]

export default defineEventHandler(async (event) => {
    // TODO: Configure 
    event.res.setHeader('Content-Type', 'application/json')
    return JSON.stringify(icons)
})