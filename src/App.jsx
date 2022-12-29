import Header from './components/Header/Header';
import './index.css'
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import QuizPage from './components/QuizPage';


function App() {
  return (<>
    <Header/>
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/quiz" element={<QuizPage />}/>
      </Routes>
    </main>
  </>
  )
}

export default App
