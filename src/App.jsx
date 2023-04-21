import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={ <Login /> }/>
				<Route element={<ProtectedRoutes />}>

				</Route>
			</Routes>
		</HashRouter>
	)

}

export default App
