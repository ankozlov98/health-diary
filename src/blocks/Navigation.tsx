import React from 'react'
import { Home, Clipboard, Server, MessageCircle, Heart } from 'react-feather'
import {  useNavigate} from 'react-router-dom'
import { Button, Col } from 'reactstrap'

type PurposeNavigation = 'home' | 'meds' | 'diary' | 'news'

type NavigationButtonProps = {
  purpose: PurposeNavigation,
  reset?: Function
}

const NavigationButton = ({purpose, reset}: NavigationButtonProps ) => {

  const navigateTo = useNavigate()

  const chooseIcon = () => {
    switch (purpose) {
      case 'home':
        return <Home />
      case 'meds':
        return <Clipboard />
      case 'diary':
        return <Server />
      case 'news':
        return <MessageCircle />
      default:
        return <Heart />
    }
  }

  const callback = () => {
    navigateTo(purpose)
    if (reset) reset()

  }

  return <Button style={{borderRadius: '100%', height: 48, width: 48, padding: 0}} onClick={callback}>{chooseIcon()}</Button>
}
export const NavigationBar = () => {
  return (
    <><Col style={{display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', width: 60}}>
      <NavigationButton purpose={'home'} />
      <NavigationButton purpose={'meds'} />
      <NavigationButton purpose={'diary'} />
      <NavigationButton purpose={'news'} />
    </Col>
      </>
      )
    }