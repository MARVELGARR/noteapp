import Header from './components/Header'
import Body from './components/Body'
import Todo from './components/Todo'
import './App.css'


function App() {


  return (
    <>
      <div className="relative bg-gray-200 h-screen">
        <Header/>
        <div className="absolute top-20 flex flex-col gap-3">
          <Todo/>
          <Body/>
        </div>
      </div>
    </>
  )
}

export default App
