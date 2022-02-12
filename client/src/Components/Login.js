import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../Redux/Actions/authAction';
import { Form } from 'react-bootstrap';
import logo from '../images/logo.png';
import '../Style/Register.css';

function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const dispatch = useDispatch();
	const Navigate = useNavigate();
	return (
		<section>
			<Form className='form'>
				<img src={logo} alt='My Vegan Pantry' className='logo' />
				<h3>Welcome Back</h3>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label className='form-label'>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter your email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label className='form-label'>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<button
					className='btn btn-block'
					type='submit'
					onClick={(e) => {
						e.preventDefault();
						dispatch(login({ email, password }, Navigate));
					}}
				>
					Submit
				</button>
				<p>
					Not a member yet?
					<Link to='/signUp'>
						<button type='button' className='member-btn'>
							Register
						</button>
					</Link>
				</p>
			</Form>
		</section>
	);
}

export default Login;
