import AppName from "./component/AppName"
import Addtodo from "./component/Addtodo"
import TodoItem1 from "./component/TodoItem1"
import TodoItem2 from "./component/TodoItem2"
import "./CSS/App.css"
function App() {


  return (
    <>
      <center class='todo-container'>
       <AppName/>
       <div class="container text-center">
          <Addtodo />
          <br />
          <TodoItem1 />
          <br />
          <TodoItem2 />
          
        </div>
      </center>
    </>
  )
}

export default App
