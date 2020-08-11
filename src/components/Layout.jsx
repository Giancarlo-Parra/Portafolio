import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import '../assets/styles/Layout.scss'



const Layout = ({children}) => {
	
	return(
	<div className='container'>
		<div className='subcontainer'>
			< NavBar />
			< Header />
			<section className='main_selector'>
				<Link to="/">
					<button className='botones'>PROYECTOS</button>
				</Link>
				<Link to="/0">
					<button className='botones'>HABILIDADES</button>
				</Link>
				<Link to="/1">
					<button>MAS INFO</button>
				</Link>
				{children}         
			</section>
		</div>
	</div>
);}



export default Layout;
