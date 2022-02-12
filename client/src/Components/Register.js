import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearerrors, register } from '../Redux/Actions/authAction';
import { Form } from 'react-bootstrap';
import logo from '../images/logo.png';
import '../Style/Register.css';

function Register() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const errors = useSelector((state) => state.authReducer.errors);
	const dispatch = useDispatch();
	const Navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			{
				errors && errors.errors.map((el) => alert(el.msg));
			}
			if (errors) {
				dispatch(clearerrors());
			}
		}, 1000);
	}, [errors]);
	return (
		<section>
			<Form className='form'>
				<img src={logo} alt='My Vegan Pantry' className='logo' />
				<h3>Register</h3>
				<Form.Group className='mb-3'>
					<Form.Label className='form-label'>First Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter your first name'
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label className='form-label'>Last Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter your last name'
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Group>
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
						dispatch(
							register({ firstName, lastName, email, password }, Navigate)
						);
					}}
				>
					Submit
				</button>
				<p>
					Already a member?
					<Link to='/signIn'>
						<button type='button' className='member-btn'>
							Login
						</button>
					</Link>
				</p>
			</Form>
		</section>
	);
}

export default Register;
