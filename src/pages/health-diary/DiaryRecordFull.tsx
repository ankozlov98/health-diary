import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { HealthDiaryRecord, WeightInterface, measureInterface } from '../../architect/types/diarytypes';
import { useStore } from '../../architect/state-management/stores';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';


type PHRD = Partial<HealthDiaryRecord> | null
const DiaryRecordFull = () => {

    const { diaryStore } = useStore()

    const list = diaryStore.showRecords()
    const [item, setItem] = useState<PHRD>(null)
    const loc = useLocation()


    useEffect(() => {
        const probId = loc.pathname.split('/diary/')[1]
    let itemToInsert = list ? list.find(i => i!.id === probId) : null

    if (probId && itemToInsert) {
      setItem(itemToInsert as Partial<HealthDiaryRecord>)
    } else setItem(null)
    }, [loc])

  return (
    <div style={{width: '50%'}}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 40, width: '100%', padding: 16, boxSizing: 'border-box'}}>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
          <div style={{fontStyle: 'italic'}}>Title</div>
          <div style={{fontSize: 18, fontWeight: 'bold'}}>{item?.title}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
          <div style={{fontStyle: 'italic'}}>Date</div>
          <div>{item?.date}</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', padding: 16, gap: 12}}>
        <div style={{fontStyle: 'italic'}}>What has happened?</div>
        <div> {item?.content}</div>
      </div>
      {item?.measureInformation &&<div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', padding: 16, gap: 12}}>
         <div style={{fontStyle: 'italic'}}>Your measurements:</div>
        
      <div>
          {Object.keys(item.measureInformation).map((i) => {
            let source = item.measureInformation as measureInterface
            let result = source[i as keyof typeof source]
            if (typeof result === 'string' || typeof result === 'number') {
               return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}><div>{i}:</div> <div>{result as (string | number) }</div></div>
            } else return <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}><div>{i}:</div> <div>{(result as WeightInterface).weight + (result as WeightInterface).system }</div></div>
           
          })}
      </div>
      </div>}
      
      
    </div>
  )
}

export default observer(DiaryRecordFull)