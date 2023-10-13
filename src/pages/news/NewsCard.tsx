import React, { useEffect, useState } from 'react'
import { Divider } from '../../blocks/commonComponents'
import { ArticleInterface } from '../../architect/types/newsTypes'

interface NewsCardProps {
    i: ArticleInterface,
    allClosed: boolean
}

const NewsCard = ({ i, allClosed }: NewsCardProps) => {
    const [open, setOpen] = useState(false)
    const behave = () => setOpen(!open)

    useEffect(() => {
        if (open && allClosed) {
            setOpen(false)
        }
    }, [allClosed])

    const content = i.content ?  i.content.split('[')[0] : 'No Info'

    return <div style={{ width: '22%', border: '1px solid black', marginBottom: 16, padding: 16, height: 'fit-content', minHeight: 240, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
        <div>
            <div style={{ fontSize: 18, fontWeight: 'bold' }}>{i!.title}</div>
            <div style={{ fontStyle: 'italic' }}>{i!.description}</div>
        </div>
        <div>
            <Divider />
        <div onClick={behave}>{open ? 'COLLAPSE' : "EXPAND"}</div>
        {open && <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ padding: 16 }}>
                <img src={i.urlToImage} style={{ objectFit: 'contain', height: 'fit-content', width: '100%' }} />
            </div>
            <div>{content}</div>
            <Divider />
            <div>
                <a href={i.url} target="_blank"> TO KNOW MORE </a>
            </div>
        </div>
        
        }

</div>
    </div>
}

export default NewsCard