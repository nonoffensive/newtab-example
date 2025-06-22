export type NewsDataIoArticle = {
    ai_org: string,
    ai_region: string,
    ai_tag: string,
    article_id: string,
    category: string[],
    content: string,
    country: string[],
    creator: string[],
    description: string,
    duplicate: boolean,
    image_url: string|null,
    keywords: string[]|null,
    language: string,
    link: string,
    pubDate: string,
    pubDateTZ: string,
    sentiment: string,
    sentiment_stats: string,
    source_icon: string,
    source_id: string,
    source_name: string,
    source_priority: number,
    source_url: string,
    title: string,
    video_url: string|null
}

export type NewsDataIoResponse = {
    status: string,
    totalResults: number,
    results: NewsDataIoArticle[],
    nextPage: string
}