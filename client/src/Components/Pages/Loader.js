import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../../Style/Loader.css';

function Loader() { 
	return (
		<div
			style={{
				position: 'relative',
				margin: '0 auto',
				top: '25vh',
				width: ' 100vw',
				textAlign: 'center',
				color: 'rgb(161, 156, 150)',
				opacity: '0.75',
			}}
		>
			<Spinner animation='grow' role='status'></Spinner>
			<span
				style={{
					animation: 'pulse 2.5s linear infinite',
				}}
			>
				Cooking in progress....
			</span>
		</div>
	);
}

export default Loader;
