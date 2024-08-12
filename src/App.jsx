
import { useContext, useMemo, useReducer, useState } from 'react'
import './App.css'
import CompOne from './useContent/CompOne'
import CompTwo from './useContent/CompTwo'
import UseContext from './useContent/UseContext'
import { Global } from './useContent'

function App() {
  // use context
  const { theme } = useContext(Global)

  // use reducer
  const booksData = [
    { id: 1, name: "English" },
    { id: 2, name: "Bangla" },
    { id: 3, name: "Math" },
  ]

  const Modal = ({ modalText }) => {
    return <p>{modalText}</p>
  }

  // const [books, setBooks] = useState(booksData)
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const [modalText, setModalText] = useState("")

  const reducer = (state, action) => {
    if (action.type === "ADD") {
      const allBooks = [...state.books, action.payload]

      return {
        // if u wanna update u should copy first
        ...state,
        books: allBooks,
        isModalOpen: true,
        modalText: "book is added"
      }
    }

    if (action.type === "REMOVE") {
      const filterBooks = [...state.books].filter(book => book.id !== action.payload)

      return {
        ...state,
        books: filterBooks,
        isModalOpen: true,
        modalText: "Book is removed"
      }
    }
    return state
  }

  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalOpen: false,
    modalText: ""
  })

  const [bookName, setBookName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newBook = { id: new Date().getTime().toString(), name: bookName }

    dispatch({ type: "ADD", payload: newBook })

    // setBooks((prevState) => {

    //   const newBook = {id: new Date().getTime().toString(), name: bookName}
    //   return [...prevState, newBook]
    // })
    // setModalText("modal is opening")
    // setIsModalOpen(true)

  }
  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id })
  }

  // use memo
  const [plus, setPlus] = useState(0)
  const [minus, setMinus] = useState(50)

  const checking = useMemo(()=>{
    console.log("delay")
    for(let i = 0; i < 1000; i++){
      console.log("timing")
    }
    return plus % 2 === 0;
  },[plus])

  // const checking = ()=>{
  //   console.log("delay")
  //   for(let i = 0; i < 1000; i++){
  //     console.log("timing")
  //   }

  //   return plus % 2 === 0;
  // }

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
          <div className='hidden'>
            <h1 className='text-3xl font-bold text-red-500 my-3'>---use Reducer---</h1>

            <form onSubmit={handleSubmit}>
              <input onChange={(e) => setBookName(e.target.value)} type="text" className='border border-gray-400' />
              <button type='submit' className="bg-sky-600 text-white px-2 rounded">Add book</button>
            </form>

            {
              bookState.isModalOpen && <Modal modalText={bookState.modalText} />
            }

            {
              bookState.books.map(book => <li key={book.id}>{book.name} <button className='bg-green-400 p-2 ml-2 rounded m-3' onClick={() => removeBook(book.id)}>Remove</button></li>)
            }

          </div>

          <div>
            <h1 className='text-3xl font-bold text-red-500 my-3'>---use Memo---</h1>

            <h1 className='text-2xl font-bold text-green-500 my-3'>Checking - {checking ? "Even" : "Odd"}</h1>

            <div className='my-4 space-x-2'>
              <button className='border border-green-400 p-2 rounded' onClick={() => setPlus(plus + 1)}>Plus + {plus}</button>

              <button className='border border-red-400 p-2 rounded' onClick={() => setMinus(minus - 1)}>Minus - {minus}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
