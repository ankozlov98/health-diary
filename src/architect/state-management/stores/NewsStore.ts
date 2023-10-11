import { observable, action, runInAction, configure, makeObservable } from 'mobx'
import NewsService from '../services/NewsService'

configure({ enforceActions: 'observed' })

class NewsStore {
    newsList = {}
    newsService = new NewsService()

    constructor() {
        makeObservable(this, {
            newsList: observable,
            setNewsList: action,
        })
        this.newsService = new NewsService()
    }

    setNewsList = (apiData: any) => {
        this.newsList = apiData
    }

    showNews = () => {
        return this.newsList
    }



    //correct way of updating data
    getNews = () => {
        this.newsService.getNewsTopHeadLines().then((data: any) => {
            runInAction(() => {
                this.setNewsList(data)
            })
        })
    }


}



export default new NewsStore()
