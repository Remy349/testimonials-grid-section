import React from 'react'
import { Card } from './components/Card'

import { danielImg } from './assets/img/images'

function App() {
  return (
    <main className='font-barlow mx-6 text-white'>
      <Card avatarImg={danielImg} cardItem='card1' />
    </main>
  )
}

export default App
