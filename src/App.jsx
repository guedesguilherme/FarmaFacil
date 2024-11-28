import { Outlet } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/next';

import './App.css'

function App() {

  function inputChange(input) {
    if (input.value.trim() !== '') {
        input.classList.add('preenchido');
    } else {
        input.classList.remove('preenchido');
    }
}


  return (
    <>
      <div className='App'>
        <Outlet />
        <SpeedInsights />
      </div>
    </>
  )
}

export default App
