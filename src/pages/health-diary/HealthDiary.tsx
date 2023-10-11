import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import DiaryController from './components/DiaryController'
import DiaryEditor from './DiaryEditor'
import DiaryRecordsList from './DiaryRecordsList'
import { useLocation } from 'react-router-dom'
import DiaryRecordFull from './DiaryRecordFull'

const DiaryPageCommonContainerStyle = {display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%'}
const DiaryPageMainHeader = {fontSize: 44,  fontWeight: 'bolder', textAlign: 'left' as const, width: '100%', boxSizing: 'border-box' as const, paddingLeft: 30}

type DiaryPageMode = 'intro' | 'single' | 'edit' | 'stats'
export const DiaryPageModeContext = React.createContext<{DiaryPageMode: DiaryPageMode, setDiaryPageMode: Function}>({
    DiaryPageMode: 'intro',
    setDiaryPageMode: Function
})
const HealthDiary = () => {

    const [mode, setMode] = useState<DiaryPageMode>('intro')
   


   
     
   
  return (
    <DiaryPageModeContext.Provider value={{DiaryPageMode: mode, setDiaryPageMode: setMode}}>
         <div style={DiaryPageCommonContainerStyle}>
        <Row style={DiaryPageMainHeader}>
            DIARY
        </Row>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: '100%'}}>
           <Col style={{display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', justifyContent: 'flex-start', height: '100%', width: '360px'}}>
            <DiaryController />
            <DiaryRecordsList />
        </Col>
        <Col style={{...DiaryPageCommonContainerStyle, boxSizing: 'border-box', borderTop: '2px solid lightgray', borderLeft: '2px solid lightgray', justifyContent: 'flex-start'}}>
            {mode === 'edit' && <DiaryEditor />}
            {mode === 'single' && <DiaryRecordFull />}
        </Col> 
        </div>
        
    </div>
    </DiaryPageModeContext.Provider>
   
  )
}

export default HealthDiary