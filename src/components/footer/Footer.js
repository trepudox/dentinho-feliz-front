import './footer.css'

export default function Footer() {
	return (
		<>
			<footer>
				
				<section className='list-section'>
					<div>
						<h3>Venha nos conhecer</h3>
						<ul>
							<li><a href='/'>Trabalhe conosco</a></li>
							<li><a href='https://www.instagram.com' rel='noreferrer' target='_blank'>Instagram</a></li>
							<li><a href='https://www.facebook.com' rel='noreferrer' target='_blank'>Facebook</a></li>
							<li><a href='https://www.youtube.com' rel='noreferrer' target='_blank'>YouTube</a></li>
							<li></li>
						</ul>
					</div>

					<div>
						<h3>Venha nos conhecer</h3>
						<ul>
							<li>Trabalhe conosco</li>
							<li>Trabalhe conosco</li>
							<li>Trabalhe conosco</li>
							<li>Trabalhe conosco</li>
						</ul>
					</div>

					<div style={{alignSelf: "center"}}>
						<img src={require('../../assets/dentinho-feliz-icon.png')} alt='Ícone do Dentinho Feliz' className='dentinho-icon'></img>
					</div>

					<div>
						<h3>Venha nos conhecer</h3>
						<ul>
							<li>Trabalhe conosco</li>
							<li>Trabalhe conosco</li>
							<li>Trabalhe conosco</li>
							<li>Trabalhe conosco</li>
						</ul>
					</div>

					<div>
						<h3>Venha nos conhecer</h3>
						<ul>
							<li><a href='/'>Trabalhe conosco</a></li>
							<li>Trabalhe conosco</li>
							<li>Trabalhe conosco</li>
							<li>Trabalhe conosco</li>
						</ul>
					</div>
				</section>


				<hr className='separator'></hr>
				<section className='bottom-section'>
					<span className='reserved-rights'>Dentinho Feliz Ltda. — Todos os direitos reservados</span>
					<span className='talk-to-us'>Fale conosco: contato@dentinhofeliz.com.br | (11) 99999-9999</span>
				</section>

			</footer>
		</>
	);
}