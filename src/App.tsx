import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Routing } from './architect/routing'
import { useEffect } from 'react'
import { useStore } from './architect/state-management/stores'
import { autorun } from 'mobx'

function App() {

  const { newsStore } = useStore()

  // autorun(() => {
  //   newsStore.getNews() 
  // })

  return (
    <>
      <Routing />
    </>
  )
}

export default App
