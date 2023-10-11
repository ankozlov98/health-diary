

const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=4abcffe376664f0c81cc59db71ae15c3'

class NewsService {
 
    getNewsTopHeadLines = async () => {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data
    }

}

export default NewsService