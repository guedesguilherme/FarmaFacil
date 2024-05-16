import { Outlet } from 'react-router-dom'

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
      </div>
    </>
  )
}

export default App
