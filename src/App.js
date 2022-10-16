import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './Components/Characters';

function App() {
	// generar un nuevo usestate
	const [characters, setCharacters] = useState(null);

	const reapi = async () => {
		const api = await fetch('https://rickandmortyapi.com/api/character');

		const characterApi = await api.json();
		setCharacters(characterApi.results);
	};

	return (
		<div className="App">
			<header className="App-header">
				<hi className="title">Rick & Morty</hi>
				{characters ? (
					<Characters characters={characters} setCharacters ={setCharacters} />
				) : (
					<>
						<img src={imageRickMorty} alt="rick & morty foto" className="img-home" />
						<button onClick={reapi} className="btn-search">
							Buscar personajes
						</button>
					</>
				)}
			</header>
		</div>
	);
}

export default App;
