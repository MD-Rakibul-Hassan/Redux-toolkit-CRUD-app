
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';

function App() {
  return (
		<>
			<Navbar />
			<div className='container mx-auto flex flex-col justify-center items-center'>
				<Outlet />
      </div>
      <Footer/>
		</>
	);
}

export default App
