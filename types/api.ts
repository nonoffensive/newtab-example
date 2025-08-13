import type { NewsDataIoArticle } from "./news"

export type ApiNewsArticleItem = NewsDataIoArticle & {
    domain: string,
    age: string
}