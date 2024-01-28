import {Button } from 'antd';
import React from 'react'
import './stylesheets/alignments.css'
import './stylesheets/custom-components.css'
import './stylesheets/form-elements.css'
import './stylesheets/text-elements.css'
import './stylesheets/theme.css'


const App = () => {
  return (
    <>
    <div className='bg-primary h-screen flex items-center justify-center'>
      <h1>Banergy e-Wallet</h1>
      <Button type="primary">Primary</Button>
    </div>
    </>
    )
}

export default App