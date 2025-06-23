import type { NewsDataIoArticle } from "~/types/news"


export function articleSource(article: NewsDataIoArticle) {
    const domain = article.source_url.replace(/^https?:\/\//,'').replace(/^www\./, '')

    if (domain) {
        return domain
    }

    return article.source_name
}

export function articleAge(article: NewsDataIoArticle) {
    const now = Date.now()
    const published = new Date(article.pubDate).getTime()

    const days = Math.floor((now - published) / (24 * 60 * 60 * 1000))
    const hours = Math.floor((now - published) / (60 * 60 * 1000))
    const minutes = Math.floor((now - published) / (60 * 1000))

    if (days) return `${days} day` + (days > 1 ? 's' : '') + ' ago'
    if (hours) return `${hours} hour` + (hours > 1 ? 's' : '') + ' ago'
    if (minutes) return `${minutes} min` + (minutes > 1 ? 's' : '') + ' ago'

    return 'just now'
}