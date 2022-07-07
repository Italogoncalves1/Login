import React from 'react'
import { AuthProvider } from './contexts/auth';
import RoutesApp from './routes';
import GlobalStyle from './styles/Global'

const App = () => {
  return (
    <AuthProvider>
    <RoutesApp />
    <GlobalStyle/>
    </AuthProvider >
    
  )
}

export default App;