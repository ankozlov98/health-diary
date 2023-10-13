import React, { useContext } from 'react'
import { BarChart, Heart, Plus, Table } from 'react-feather'
import { Button, Col, Row } from 'reactstrap'
import { DiaryPageModeContext } from '../HealthDiary'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '../../../architect/state-management/stores'
import { HealthDiaryRecord } from '../../../architect/types/diarytypes'

interface NavigationButtonProps {
    purpose: 'stats' | 'add' | 'sort'
    callback?: Function
} 



const DiaryController = () => {

    const { setDiaryPageMode } = useContext(DiaryPageModeContext)

    const NavigationButton = ({purpose, callback}: NavigationButtonProps ) => {

    
      
        const chooseIcon = () => {
          switch (purpose) {
            case 'stats':
              return <Table />
            case 'sort':
              return <BarChart />
            case 'add':
              return <Plus />
            default:
              return <Heart />
          }
        }
      
        const cb = () => {
          if (callback) callback()
      
        }
      
        return <Button style={{borderRadius: '100%', height: 48, width: 48, padding: 0}} onClick={cb}>{chooseIcon()}</Button>
      }


  const loc = useLocation()
  const nav = useNavigate()
  const {diaryStore} = useStore()

  const addCallback = () => {
    console.log('here')
    if (loc.pathname.split('/diary/')[1]) {
      console.log('here')
      nav('../diary')
    }
    setDiaryPageMode('edit')

    const mockPayload: Partial<HealthDiaryRecord> = {
      id: (Math.random() * 1000).toString(),
      date: new Date().toDateString(),
      title: (Math.random() * 1000).toString(),
      content: (Math.random() * 1000).toString(),
      measureInformation:  {
        "Weight": { weight: 100, system: "kg" },
        "Blood Pressure": "120/80",
        "Heart Rate": 70,
        "Sleep Duration": 8,
        "Steps": 10000,
        "Calories Burned": 500
    }
    }

    diaryStore.addRecord(mockPayload)
  }

  return (
    <Row style={{display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center', justifyContent: 'space-between', height: 60, width: '100%', backgroundColor: 'lightgray', padding: '0px 20px', boxSizing: 'border-box'}}>
        <Col><NavigationButton purpose='add' callback={() => addCallback()}/></Col>
        <Col style={{display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center', height: 60}}>
            <Row><NavigationButton purpose='stats' callback={() => setDiaryPageMode('stats')}/></Row>
            <Row><NavigationButton purpose='sort'/></Row>
        </Col>
    </Row>
  )
}

export default DiaryController