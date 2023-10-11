import React, { useEffect, useState } from 'react'
import { useStore } from '../../architect/state-management/stores'
import { autorun } from 'mobx'

const NewsPage = () => {

    

    const [news, setNews] = useState<Array<any>>([])
    const { newsStore } = useStore()

    autorun(() => newsStore.getNews())

    useEffect(() => {
           
            let res = newsStore.showNews()
            if ((res as any)?.articles) setNews((res as any).articles.map((i: any) => i.title))
    })

  return (
    <div>
        {news.map((i: any) => {
            return <div>{i}</div>
        })}
    </div>
  )
}

export default NewsPage