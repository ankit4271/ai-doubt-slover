import { useState } from 'react'
import './App.css';
import MainContainer from './components/MainContainer';
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="ai-chat-wrap">
        <div class="ai-chat-container">
          <Sidebar />
          <MainContainer />
        </div>
      </div>
    </>
  )
}

export default App
