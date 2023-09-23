import Header from './components/Header'
import Todo from './components/Todo'
import './App.css'
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'

function App() {

  const answer = useSelector((state: RootState) => state.theme.value)


  return (
    <>
      <div className={` ${answer ? "" : "dark-theme" } relative bg-skin-background h-screen`}>
        <Header/>
        <div className="absolute top-20 flex flex-col gap-3">
          <Todo/>
        </div>
      </div>
    </>
  )
}

export default App
