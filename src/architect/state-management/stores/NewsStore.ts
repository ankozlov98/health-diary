import { observable, action, runInAction, configure, makeObservable, makeAutoObservable } from 'mobx'
import NewsService from '../services/NewsService'
import { ArticleInterface } from '../../types/newsTypes'

configure({ enforceActions: 'observed' })

interface newsListInterface {
articles?: Array<ArticleInterface>
}

class NewsStore {
    newsList: newsListInterface = {}
    newsService = new NewsService()

    constructor() {
        makeAutoObservable(this)
        this.newsService = new NewsService()
        runInAction(this.getNews)
    }

    setNewsList = (apiData: any) => {
        this.newsList = apiData
    }

    showNews = () => {
        return this.newsList.articles ?? []
    }



    //correct way of updating data
    getNews = async () => {
       let res = await this.newsService.getNewsTopHeadLines()
            
       runInAction(() => {
                this.setNewsList(res)
            })
        
    }


}



export default new NewsStore()
