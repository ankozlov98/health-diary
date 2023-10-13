import React, { useEffect, useState } from 'react'
import { useStore } from '../../architect/state-management/stores'
import { autorun, toJS } from 'mobx'
import { observer } from 'mobx-react'
import NewsCard from './NewsCard'
import { Row } from 'reactstrap'

const NewsMainHeader = {fontSize: 44,  fontWeight: 'bolder', textAlign: 'left' as const, width: '100%', boxSizing: 'border-box' as const, paddingLeft: 30, borderBottom: '2px lightgray solid'}

const NewsPage = () => {

    

    
    const { newsStore } = useStore()
    const [allClosed, setAllClosed] = useState(false)

    // useEffect(() => newsStore.getNews())
    const news = toJS(newsStore.showNews()) ?? []

    console.log(news)

   
    const close = () => {
      setAllClosed(true)
    }

    useEffect(() => {
      if (allClosed) setTimeout(() => setAllClosed(false), 100)
    })
    

  return (
    <div>
      <Row style={NewsMainHeader} onClick={close}>
      News
    </Row>
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 16, padding: 16}}>
        {news.map((i: any) => {
            return <NewsCard i={i} allClosed={allClosed} />
        })}
    </div>
    </div>
    
  )
}

export default  observer(NewsPage)


