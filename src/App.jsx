import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Test from './components/Test';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route exact path="/test" element={<Test />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App