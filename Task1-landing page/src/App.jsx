import React from 'react'
import './App.css'
import Menu from './components/menu/Menu'
import Slogan from './components/slogan/Slogan.jsx'
import Hot from './components/Hot/Hot.jsx'
import Cover from './components/cover/Cover.jsx'
import Footer from './components/footer/Footer.jsx'
function App() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Slogan/>
        <Hot/>
        <Cover/>
      </main>
      <Footer/>
    </>
  )
}

export default App