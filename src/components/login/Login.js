import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
	return (
		<>
			<p className='cCyan'>login!!! mano???</p>
			<Link to={'/'}>
				<button style={{
					backgroundColor: 'black'
				}} className='cCyan'>
					clica ae pra voltar pra home parça
				</button>
			</Link>
		</>
	);
}