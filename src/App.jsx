import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from './components/views/home'
import { useSetRecoilState } from 'recoil'
import templatesService from './services/templates'
import { templatesState } from './atoms/templatesState'

function App() {
  const setTemplatesState = useSetRecoilState(templatesState)

  useEffect(() => {
    templatesService
      .getAll()
      .then(initialTemplates => setTemplatesState(initialTemplates))
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomeView />}></Route>
    </Routes>
  )
}

export default App
