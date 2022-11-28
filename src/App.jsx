import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from './components/views/home'
import StylesheetsView from './components/views/styleSheets'
import { useSetRecoilState } from 'recoil'
import apiService from './services/api'
import { templatesState } from './atoms/templatesState'
import { styleSheetsState } from './atoms/styleSheetsState'

function App() {
  const setTemplatesState = useSetRecoilState(templatesState)
  const setStylesheets = useSetRecoilState(styleSheetsState)
  useEffect(() => {
    apiService
      .getAll('templates')
      .then(initialTemplates => setTemplatesState(initialTemplates))
    apiService.getAll('stylesheets').then(initialStylesheets => {
      setStylesheets(initialStylesheets)
    })
  }, [])

  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_NAME}>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/stylesheets" element={<StylesheetsView />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
