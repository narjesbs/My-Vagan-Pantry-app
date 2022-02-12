import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';
import Loader from '../Pages/Loader';
import '../../Style/AdminPages.css';

function UsersList() {
	const users = useSelector((state) => state.userReducer.users);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (users) {
			setLoading(false);
		} else {
			console.log('wait still loading...');
		}
	}, []);
	return (
		<main>
			<section className='recipeCont'>
				<h3> You have {users.length} Users in your application</h3>
				{loading ? (
					<Loader />
				) : (
					users.map((user) => <UserCard user={user} key={user._id} />)
				)}
			</section>
		</main>
	);
}

export default UsersList;
