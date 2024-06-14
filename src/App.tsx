import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1 style={{fontFamily:"Lobster"}}>Kuna Stays</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2>
        Welcome to Kuna Stays
        </h2>
        <p>
        Experience tranquility in our cozy containers by the beach in beautiful Costa Rica. Whether you seek relaxation or adventure, Kuna Stays offers the perfect getaway with modern comforts and stunning views.
        </p>
        <h2>
        Your Perfect Beach Retreat
        </h2>
        <p>
        Located on the pristine shores of Costa Rica, our container homes blend modern design with natural beauty. Enjoy the sound of the waves, breathtaking sunsets, and the warmth of Costa Rican hospitality.
        </p>
      <h3 className="read-the-docs">
      Why Choose Kuna Stays?
      </h3>
      <p>
      Modern and Cozy Accommodation
      </p>
      <p>
      Stunning Beachfront Views
      </p>
      <p>
      Ideal for Relaxation and Adventure
      </p>
      <p>
      Eco-Friendly and Sustainable
      </p>
      <h2>
      Kuna Stays - Coming Soon
      </h2>
      <p>
      We are excited to announce the upcoming launch of Kuna Stays, your ultimate beach retreat in Costa Rica. Stay tuned for more updates and be ready to book your perfect getaway soon!
      </p>
      </div>
    </>
  )
}

export default App
