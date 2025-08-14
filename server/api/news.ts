// https://newsdata.io/api/1/latest?apikey=pub_eddaaaaa&q=entertainment&country=us&language=en&category=top

import news from "~/data/news"
import { articleAge, articleSource } from "~/functions/news"
import { ApiNewsArticleItem } from "~/types/api"

export default defineEventHandler(async (event) => {
    // TODO: Configure 
    const search = new URLSearchParams(event.path.split('?').slice(-1)[0])
    const category = (search.get('category') ?? 'top')
    const index = (category !== 'home' ? category : 'top') as keyof typeof news

    // TODO: Replace with Live Data
    const response = news[index]

    if (response.status === 'success') {
        event.res.setHeader('Content-Type', 'application/json')
        const articles = response.results.map(article => {
            return {
                ...article,
                domain: articleSource(article),
                age: articleAge(article)
            } as ApiNewsArticleItem
        })
        return JSON.stringify(articles)
    }

    event.res.statusCode = 400
    return 'News Service Unavailable, Try Again Later'
})