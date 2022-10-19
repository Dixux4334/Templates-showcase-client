import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
}

const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <HashRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </HashRouter>
    </RecoilRoot>
  </React.StrictMode>
)
