import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Outlet,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

function App() {
	const Layout = () => {
		return (
			<div>
				<Navbar />
				<div style={{ display: 'flex' }}>
					<LeftBar />
					<Outlet />
					<RightBar />
				</div>
			</div>
		);
	};

	const router = createBrowserRouter([
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/register',
			element: <Register />,
		},
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/profile/:id',
					element: <Profile />,
				},
			],
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
