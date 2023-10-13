import React, { useContext } from 'react'
import { Edit, Info, Trash } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { DiaryPageModeContext } from './HealthDiary';
import { useStore } from '../../architect/state-management/stores';
import { observer } from 'mobx-react';

// Generate a random unique ID

const DiaryRecordsList = () => {

  const  {diaryStore } = useStore()

  const navigateTo = useNavigate()
  const { setDiaryPageMode } = useContext(DiaryPageModeContext)
  const list = diaryStore.showRecords()

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', gap: 12}}>
        {list && list.map((item) => {
           return  <div style={{padding: 16, boxSizing: 'border-box', border: '1px solid lightgray', display: 'flex', flexDirection: 'column',alignItems: 'flex-start', gap: 4, width: '90%', paddingBottom: 4}}>
                <div style={{textAlign: 'left'}}>{item!.title}</div>
                <div style={{textAlign: 'left', fontSize: 12, fontStyle: 'italic'}}>{item!.date}</div>
                <div style={{height: 2, width: '100%', backgroundColor: 'black', marginTop: 4,  marginBottom: 4}}></div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <div><Trash onClick={() => {
                       if (item?.id) diaryStore.deleteRecord(item?.id)
                      }}/></div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 16}}><Edit 
                      onClick={() => {
                        setDiaryPageMode('edit')
                         if (item!.id) navigateTo(item!.id)
                      }} 
                    /><Info onClick={() => {
                      setDiaryPageMode('single')
                      if (item!.id) navigateTo(item!.id)
                    }} /></div>
                </div>
            </div>
        })}
    </div>
  )
}

export default observer(DiaryRecordsList)