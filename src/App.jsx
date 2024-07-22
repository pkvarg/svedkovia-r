import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Apostoli from './pages/Apostoli'
import Jezis from './pages/Jezis'
import Pan from './pages/Pan'
import Vecera from './pages/Vecera'
import Counter from './pages/Counter'
import ScrollToTop from './components/ScrollToTop'
import { StateContext } from './context/StateContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <StateContext>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/co-hlasali-apostoli' element={<Apostoli />} />
            <Route path='/je-jezis-boh' element={<Jezis />} />
            <Route path='/koho-panom-je-jezis' element={<Pan />} />
            <Route path='/vecera-panova' element={<Vecera />} />
            <Route path='/counter' element={<Counter />} />
          </Routes>
          <ScrollToTop />
        </StateContext>
      </BrowserRouter>
    </>
  )
}

export default App
