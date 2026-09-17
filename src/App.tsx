import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import MyTicketsPage from './pages/MyTicketsPage'
import NewTicketPage from './pages/NewTicketPage'
import TicketDetailsPage from './pages/TicketDetailsPage'
import TicketManagementPage from './pages/TicketManagementPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tickets" element={<MyTicketsPage />} />
        <Route path="/tickets/new" element={<NewTicketPage />} />
        <Route path="/tickets/:id" element={<TicketDetailsPage />} />
        <Route
  path="/manage/tickets"
  element={<TicketManagementPage />}
/>
      </Routes>
    </BrowserRouter>
  )
}

export default App