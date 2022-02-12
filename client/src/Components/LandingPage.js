import React from 'react';
import logo from '../images/logo.png';
import background from '../images/background.png';
import { Link } from 'react-router-dom';
import '../Style/LandingPage.css';

function LandingPage() {
	return (
		<div>
			<nav className='nav-page'>
				<img src={logo} alt='My Vegan Pantry' className='logo-home' />
				<Link to='/signIn'>
					<button
						style={{
							float: 'right !important',
							marginLeft: 'auto',
							backgroundColor: 'transparent',
							color: 'rgb(216, 90, 48)',
							border: 'none',
							boxShadow: 'none',
						}}
					>
						Login
					</button>
				</Link>
			</nav>
			<div className='container-page'>
				<div className='info'>
					<h1>Vegan Recipes app</h1>
					<p>
						Our mission is to inspire people to try vegan food, create a global
						movement for compassionate food choices to end animal suffering.
					</p>
					<Link to='/signUp'>
						<button className='btn btn-hero'>Register</button>
					</Link>
				</div>
				<img
					src={background}
					alt='lets cook compassionately'
					className='main-img'
				/>
			</div>
		</div>
	);
}

export default LandingPage;
