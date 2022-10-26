import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import NavBar from './components/NavBar'
import Adress from './pages/Adress'
import MainPage from './pages/MainPage'

function App() {
    return (
        <Router>
            <Header />
            <NavBar />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='address' element={<Adress />} />
            </Routes>
        </Router>
    )
}

export default App
