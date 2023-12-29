import React from 'react'
import { FaBeer, FaRegFrownOpen, FaRegMeh, FaRegSadCry, FaRegSadTear, FaSadCry, FaSadTear } from 'react-icons/fa';

const DiaryLineGraph = ({mark}: {mark: 0 | 1 | 2 | 3 | 4| 5}) => {

  const decideOnMark = () => {
    switch (mark) {
        case 1:
            return ['20%', '80%']
        case 2:
            return ['40%', '60%']
        case 3:
            return ['60%', '40%']
        case 4:
            return ['80%', '20%']
        case 5:
            return ['100%', '0%']
        default:
            return ['100%', '0%']
    }
  }

  const [w1, w2] = decideOnMark()

  return (
    <div style={{margin: 16}}>
        <div style={{display: 'flex', flexDirection: 'row', width: 400}}>
            <div style={{width: '19%', height: 24, textAlign: 'left'}}><FaRegSadCry /></div>
            <div style={{width: '19%', height: 24, textAlign: 'left'}}><FaRegSadTear /></div>
            <div style={{width: '19%', height: 24, textAlign: 'left'}}><FaRegFrownOpen /></div>
            <div style={{width: '19%', height: 24, textAlign: 'left'}}><FaRegMeh /></div>
            <div style={{width: '19%', height: 24, textAlign: 'left'}}><FaBeer /></div>
            <div style={{width: '5%', height: 24, textAlign: 'right'}}><FaBeer /></div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', width: 400}}>
            <div style={{width: w1, height: 10, backgroundColor: 'black'}} />
            <div style={{width: w2, height: 10, backgroundColor: 'lightgray'}}></div>
        </div>
    </div>
  )
}

export default DiaryLineGraph