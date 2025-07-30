import { BrowserRouter as Router } from 'react-router-dom'
import DashboardLayout from './components/layout/Dashboard/DashboardLayout'
import AppRoutes from './routing/AppRoutes'

function App() {

  return (
    <>
    <Router>
    <AppRoutes />
    </Router>
    </>
  )
}

export default App
