
import './App.css'
// import DaisyNav from './Component/DaisyNav/DaisyNav'
import Navbar from './Component/Navbar/Navbar'
import Card from './Component/cards/Card'
import Chart from './Component/chart/Chart'

function App() {

  return (
    <>
    {/* <DaisyNav/> */}
    <Navbar/>
      <h1 className='text-3xl'>Vite + React</h1>
      <Card/>
      <Chart/>
    </>
  )
}

export default App
