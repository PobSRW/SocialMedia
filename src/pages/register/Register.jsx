import { Link } from 'react-router-dom';
import './register.scss';

function Register() {
	return (
		<div className='register'>
			<div className='card'>
				<div className='left'>
					<h1>Lama Social.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
						doloremque! Vel necessitatibus reiciendis ratione itaque optio
						atque,
					</p>
					<span>Do you have an account?</span>
					<Link to='/login'>
						<button>Login</button>
					</Link>
				</div>
				<div className='right'>
					<h1>Login</h1>
					<form>
						<input type='text' placeholder='Username'></input>
						<input type='email' placeholder='Email'></input>
						<input type='password' placeholder='Password'></input>
						<input type='text' placeholder='Password'></input>
						<button>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
