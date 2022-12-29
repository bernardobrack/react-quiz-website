import Header from './components/Header/Header';
import './index.css'
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import QuizPage from './components/QuizPage';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (<>
    <Header/>
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/quiz" element={<QuizPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </main>
  </>
  )
}

export default App
