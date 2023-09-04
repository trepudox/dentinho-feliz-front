import './navbar.css'

const logo = require('../../assets/dentinho-feliz-icon.png')

export default function Navbar() {
	return (
		<nav className='navbar'>
			<div className='intro'>
				<img src={logo} alt='Ícone do Dentinho Feliz' className='navbar-icon'></img>
				<ul className='horizontal-list'>
					<li>Home</li>
					<li>Agende sua consulta</li>
				</ul>
			</div>

			<div className='login-box'>
				<span>Login</span>
				<span>Registre-se</span>
			</div>
		</nav>
	);
}