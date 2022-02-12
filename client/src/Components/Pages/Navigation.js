import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../Redux/Actions/authAction';
import { getrecipes } from '../../Redux/Actions/recipeAction';
import SearchRecipes from './SearchRecipes';
import LandingPage from '../LandingPage';
import logo from '../../images/logo.png';
import '../../Style/Navigation.css';

function Navigation({ setSearch }) {
	const user = useSelector((state) => state.authReducer.user);
	const auth = useSelector((state) => state.authReducer.auth);
	const dispatch = useDispatch();

	return (
		<>
			{auth && user.role === 'user' ? (
				<Navbar bg='light' expand='lg'>
					<Container>
						<Navbar.Brand as={Link} to='/Home'>
							<img src={logo} alt='My Vegan Pantry' className='logo-home' />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
							<SearchRecipes setSearch={setSearch} />
							<Nav className='navi'>
								<Nav.Link
									as={Link}
									to='/Home'
									onClick={() => dispatch(getrecipes())}
								>
									Home
								</Nav.Link>
								<NavDropdown title={user.firstName} id='basic-nav-dropdown'>
									<NavDropdown.Item as={Link} to='/Profile'>
										Profile
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item
										as={Link}
										to='/'
										onClick={() => dispatch(logout())}
									>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			) : auth && user.role === 'admin' ? (
				<Navbar bg='light' expand='lg'>
					<Container>
						<Navbar.Brand href='/Home'>
							<img src={logo} alt='My Vegan Pantry' className='logo-home' />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='navi'>
								<NavDropdown title={user.firstName} id='basic-nav-dropdown'>
									<NavDropdown.Item as={Link} to='/Admin'>
										Profile
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item
										as={Link}
										to='/'
										onClick={() => dispatch(logout())}
									>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			) : (
				<LandingPage />
			)}
		</>
	);
}

export default Navigation;
