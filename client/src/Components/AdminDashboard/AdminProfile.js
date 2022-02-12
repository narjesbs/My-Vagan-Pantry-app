import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getcurrent } from '../../Redux/Actions/authAction';
import Navigation from '../Pages/Navigation';
import SidebarAd from './SidebarAd';
import '../../Style/AdminPages.css';


function AdminProfile() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getcurrent());
		
	}, []);
	return (
		<>
			<Navigation></Navigation>
			<SidebarAd></SidebarAd>
			<div className='content'>
				<h1>hello</h1>
			</div>
		</>
	);
}

export default AdminProfile;
