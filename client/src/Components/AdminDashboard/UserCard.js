import React from 'react';
import { Card } from 'react-bootstrap';
import '../../Style/AdminPages.css';

function UserCard({ user }) {
	return (
		<Card className='recipe'>
			<Card.Body className='recipe-info'>
				<Card.Title>{user.firstName}</Card.Title>
				<Card.Title>{user.lastName}</Card.Title>
				<Card.Title>{user.email}</Card.Title>
			</Card.Body>
		</Card>
	);
}

export default UserCard;
