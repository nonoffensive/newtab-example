import type { NewsDataIoArticle } from "~/types/news"


export function articleSource(article: NewsDataIoArticle) {
    const domain = article.source_url.replace(/^https?:\/\//,'').replace(/^www\./, '')

    if (domain) {
        return domain
    }

    return article.source_name
}