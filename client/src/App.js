import { useState } from 'react';
import { Route, Routes } from 'react-router';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Recipe from './Components/Recipe';
import FoundRecipes from './Components/Pages/FoundRecipes';
import PrivateRoute from './Components/Private/PrivateRoute';
import Profile from './Components/Profile';
import AdminRoute from './Components/Private/AdminRoute';
import AdminProfile from './Components/AdminDashboard/AdminProfile';
import UsersList from './Components/AdminDashboard/UsersList';
import RecipesList from './Components/AdminDashboard/RecipesList';
import AddRecipe from './Components/AdminDashboard/AddRecipe';
import FavoriteRecipes from './Components/Pages/FavoriteRecipes';
import SearchedRecipe from './Components/Pages/SearchedRecipe';

function App() {
	const [search, setSearch] = useState('');
	const [searched, setSearched] = useState([{}]);
	return (
		<div className='App'>
			<Routes>
				<Route path path='/' element={<LandingPage></LandingPage>}></Route>
				<Route
					path='/Home'
					element={<Home setSearch={setSearch}></Home>}
				></Route>
				<Route path='/signUp' element={<Register></Register>}></Route>
				<Route path='/signIn' element={<Login></Login>}></Route>
				<Route path='/Recipe/:id' element={<Recipe></Recipe>}></Route>
				<Route
					path='/FoundRecipes'
					element={<FoundRecipes search={search}></FoundRecipes>}
				></Route>
				<Route
					path='/Profile'
					element={
						<PrivateRoute>
							<Profile setSearched={setSearched}></Profile>
						</PrivateRoute>
					}
				></Route>
				<Route path='/Search' element={<SearchedRecipe searched={searched}></SearchedRecipe>}></Route>
				<Route
					path='/Admin'
					element={
						<AdminRoute>
							<AdminProfile></AdminProfile>
						</AdminRoute>
					}
				></Route>
				<Route path='/UsersList' element={<UsersList></UsersList>}></Route>
				<Route
					path='/RecipesList'
					element={<RecipesList></RecipesList>}
				></Route>
				<Route path='/NewRecipe' element={<AddRecipe></AddRecipe>}></Route>
				<Route path='/EditRecipe/:id' element={<AddRecipe></AddRecipe>}></Route>
				<Route
					path='/FavoriteRecipes'
					element={<FavoriteRecipes></FavoriteRecipes>}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
