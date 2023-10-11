import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'reactstrap'
import { MainPageBlocks, MainPageDescription, MainPageHead } from './TextContent'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../architect/state-management/stores'
import { autorun, reaction, toJS } from 'mobx'

type BlockProps = {
    item : {
        id: string;
        head: string;
        content: string;
    }
}
const Block = ({item}: BlockProps) => {
    const navTo = useNavigate()

    return <Col key={item.id}>
    <Row style={{fontSize: 18,  fontWeight: 'bold', marginBottom: 16}}>{item.head}</Row>
    <Row style={{fontSize: 14,  marginBottom: 16}}>{item.content}</Row>
    <Button onClick={() => navTo('/' + item.id, {replace: true}) }>DISCOVER </Button>
    </Col>
}

const MainPage = () => {

  return (
    <Col style={{textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 48 ,}}>
        <Row style={{fontSize: 48,  fontWeight: 'bolder', marginBottom: 16}}>
            {MainPageHead}
        </Row>
        <Row style={{fontSize: 18,  fontStyle: 'italic'}}>
            {MainPageDescription}
        </Row>
        <Row style={{textAlign: 'left', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 36, gap: 40}}>
            {MainPageBlocks.map((item) => {
                return <Block item={item} />
            })}
            
        </Row>
    </Col>
  )
}

export default MainPage