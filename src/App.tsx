import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AuthRootComponent } from './components/auth'
import { HomePage } from './components/home'
import { LayoutComponent } from './components/layout'
import { NotFoundRootComponent } from './components/not-found'
import { ColorModeContext, useMode } from './theme'
import { PrivateRoute } from './utils/route/privateRoute'

const App = () => {
	const [them, colorMode] = useMode()

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={them}>
				<CssBaseline />
				<LayoutComponent>
					<div className='App'>
						<Routes>
							<Route path='/' element={<PrivateRoute />}>
								<Route path='/' element={<HomePage />} />
							</Route>
							<Route path='/register' element={<AuthRootComponent />} />
							<Route path='/login' element={<AuthRootComponent />} />
							<Route path='*' element={<NotFoundRootComponent />} />
						</Routes>
						<ToastContainer />
					</div>
				</LayoutComponent>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App
