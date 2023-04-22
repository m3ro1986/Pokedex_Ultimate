import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './pages/Pokedex'

function App() {

	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={ <Login /> }/>
				<Route element={ <ProtectedRoutes /> }>
					<Route path='/pokedex' element={ <Pokedex /> }/>
				</Route>
			</Routes>
		</HashRouter>
	)

}

export default App
