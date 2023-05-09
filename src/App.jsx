import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import Header from './components/Header'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <>
    <Header></Header>
    <h1 className='text-4xl text-purple-600 font-bold my-4'>Hot Hot Cold Coffee: {coffees.length}</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    {
      coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
    }
    </div>
    </>
  )
}

export default App
