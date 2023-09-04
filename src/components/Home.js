import './home.css';
import Navbar from './navbar/Navbar.js'
import Footer from './footer/Footer.js'
import InputMask from 'react-input-mask';

export default function Home() {
	return (
		<>
			<Navbar />

			<div className='parent-div'>
				<section className='first-section'>
					<div className='first-section-text-container'>
						<div>
							<h1 className='first-section-title'>É hora de abrir um novo sorriso</h1>
							<span>Adipisicing cillum tempor sint et. Veniam fugiat ea qui non id duis incididunt et sunt. Id laborum quis incididunt ut aute tempor non magna.</span>
						</div>
					</div>
				</section>

				<section className='third-section'>
					<h1 className='third-section-title'>Há diferenciais que só o Dentinho Feliz consegue te oferecer!</h1>
					<hr style={{margin: "40px 25px 30px 25px",backgroundColor: "#fff", border: "none", height: "1px"}}></hr>
					<div className='cards-container'>
						<InformationalCard cardInfo={firstCardInfo}/>
						<InformationalCard cardInfo={secondCardInfo}/>
						<InformationalCard cardInfo={thirdCardInfo}/>
					</div>
				</section>

				<SignUpModal />
			</div>

			<Footer />
		</>
	);
}

function InformationalCard({cardInfo}) {
	return (
		<>
			<div className='informational-card'>
				<div className='informational-card-header'>
					<img src={cardInfo.img} alt={cardInfo.imgAlt} className='card-icon'></img>
					<h2>{cardInfo.title}</h2>
				</div>
				<p>{cardInfo.text}</p>
			</div>
		</>
	);
}

const firstCardInfo = {
	img: require('../assets/icons/dentista-512.png'),
	imgAlt: 'Ícone de dentista',
	title: 'Profissionais de Qualidade',
	text: 'Os melhores e os mais apaixonados profissionais do mercado brasileiro trabalham aqui no Dentinho Feliz!'
}

const secondCardInfo = {
	img: require('../assets/icons/microscopio-512.png'),
	imgAlt: 'Ícone de dentista',
	title: 'Laboratórios Especializados',
	text: 'Mais de 50 laboratórios especializados nos mais diversos assuntos odontológicos, prontos para auxiliar o paciente e o dentista.'
}

const thirdCardInfo = {
	img: require('../assets/icons/atendimento-512.png'),
	imgAlt: 'Ícone de dentista',
	title: 'Atendimento 24 horas',
	text: 'Temos atendentes treinados e preparados para te atender à qualquer hora do dia, para qualquer situação ou emergência.'
}

function SignUpModal() {
	return (
		<>
			<section className='signup-modal'>
				<div className='signup-modal-header'>
					<h2 className='signup-title'>Ainda não tem uma conta? Registre-se agora para agendar a sua próxima consulta!</h2>
					<h3 className='signup-subtitle'>Já tem uma conta? Faça o <a href='/login' >login</a>!</h3>
				</div>
				
				<hr id='signup-modal-ruler'></hr>

				<div className='signup-modal-body'>
					<form id='signup-modal-form'>
						<div id='form-left-side'>
							<label for='nome'>Nome:</label>
							<input type='text' id='nome' name='nome'></input>
							
							<label for='celular'>Celular:</label>
							<InputMask type='text' id='celular' name='celular' mask="(99) 99999-9999" />

							<label for='sexo'>Sexo:</label>
							<input type='text' id='sexo' name='sexo'></input>
							
							<label for='estado'>Estado:</label>
							<input type='text' id='estado' name='estado'></input>

							<label for='rua'>Rua:</label>
							<input type='text' id='rua' name='rua'></input>

							<label for='conveniomedico'>Convenio Medico:</label>
							<input type='text' id='conveniomedico' name='conveniomedico'></input>

							<label for='senha'>Senha:</label>
							<input type='text' id='senha' name='senha'></input>
						</div>

						<div id='form-right-side'>
							<label for='cpf'>CPF:</label>
							<InputMask type='text' id='cpf' name='cpf' mask="999.999.999-99" />

							<label for='email'>Email:</label>
							<input type='text' id='email' name='email'></input>

							<label for='datanasc'>Data de nascimento:</label>
							<InputMask type='text' id='datanasc' name='datanasc' mask="99/99/9999" />

							<label for='cidade'>Cidade:</label>
							<input type='text' id='cidade' name='cidade'></input>

							<label for='numero'>Numero:</label>
							<input type='text' id='numero' name='numero'></input>

							<label for='convenioodontologico'>Convenio Odontologico:</label>
							<input type='text' id='convenioodontologico' name='convenioodontologico'></input>

							<label for='confirmesenha'>Confirme sua senha:</label>
							<input type='text' id='confirmesenha' name='confirmesenha'></input>
						</div>
					</form>

					<input type='button' id='signup-button' value='Registrar'></input>
				</div>
			</section>
		</>
	);
}