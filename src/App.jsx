import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import FooterComponent from './components/footer';
import NavBar from './components/navbar';


const Home = lazy(() => import('./pages/home/home'));

function App() {
  
  return (
    <div>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <NavBar />
				<BrowserRouter basename='/anuragbalhra/'>
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
						</Routes>
					</Suspense>
        </BrowserRouter>
        <FooterComponent />
			</div>
    </div>
  )
}

export default App
