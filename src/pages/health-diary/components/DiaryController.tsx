import React, { useContext } from 'react'
import { BarChart, Heart, Plus, Table } from 'react-feather'
import { Button, Col, Row } from 'reactstrap'
import { DiaryPageModeContext } from '../HealthDiary'
import { useLocation, useNavigate } from 'react-router-dom'

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

  const editCallback = () => {
    console.log('here')
    if (loc.pathname.split('/diary/')[1]) {
      console.log('here')
      nav('../diary')
    }
    setDiaryPageMode('edit')
  }

  return (
    <Row style={{display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center', justifyContent: 'space-between', height: 60, width: '100%', backgroundColor: 'lightgray', padding: '0px 20px', boxSizing: 'border-box'}}>
        <Col><NavigationButton purpose='add' callback={() => editCallback()}/></Col>
        <Col style={{display: 'flex', flexDirection: 'row', gap: 12, alignItems: 'center', height: 60}}>
            <Row><NavigationButton purpose='stats' callback={() => setDiaryPageMode('stats')}/></Row>
            <Row><NavigationButton purpose='sort'/></Row>
        </Col>
    </Row>
  )
}

export default DiaryController