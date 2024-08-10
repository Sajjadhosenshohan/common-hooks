
import { useContext } from 'react'
import './App.css'
import CompOne from './useContent/CompOne'
import CompTwo from './useContent/CompTwo'
import UseContext from './useContent/UseContext'
import { Global } from './useContent'

function App() {
  // use context
  const { theme } = useContext(Global)

  // use reducer



  return (
    <>
      <div className='flex justify-center items-center'>

        <div >
          {/* use context */}
          <div className='hidden'>
            <h1 className='text-3xl font-bold text-red-500 my-3'>---useContext---</h1>
            <UseContext />
            <p className='text-orange-500 font-bold text-2xl my-3'>{theme}</p>
            <CompOne />
            <CompTwo />
          </div>

          {/* use reducer */}
          <div className=''>
            <h1 className='text-3xl font-bold text-red-500 my-3'>---use Reducer---</h1>

            
          </div>

        </div>
      </div>
    </>
  )
}

export default App
