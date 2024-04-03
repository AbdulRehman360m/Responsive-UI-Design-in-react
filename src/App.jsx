import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
function App() {

  return (
    <>
      <h1 className="text-2xl text-white font-semibold my-10">Welcome to my TODO App</h1>
      <AddTodo/>
      <Todos />
    </>
  )
}

export default App
