import { useContext } from "react"
import { Global } from "."

const UseContext = () => {

  const {theme, setTheme} = useContext(Global)
  console.log(theme, setTheme)
  return (
    <div>
      <button onClick={()=>setTheme(theme === "light" ? "dark" : "light")} className="bg-orange-600 text-white p-2 rounded">Change  theme</button>
    </div>
  )
}

export default UseContext
