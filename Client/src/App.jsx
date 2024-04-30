import React from 'react'
import Apply from './assets/components/apply'
import Customer from './assets/components/customer'
import Partners from './assets/components/partners'
import Education from './assets/components/education'

import './App.scss'

function App() {
 

  return (
    <div className="App">
      <Education/>
      <Partners/>
      <Apply/>
      <Customer/>
    </div>
  )
}

export default App
