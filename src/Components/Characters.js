export default function Characters(props) {
	const { characters, setCharacters } = props;
	const resetCharacters = () => {
		setCharacters(null);
	};
	return (
		<div className="characters">
			<h1>Personajes </h1>
			<button className="btn-searcNew">
				<span className="back-home" onClick={resetCharacters}>
					{' '}
					Volver a la Home{' '}
				</span>
			</button>
			<div className="container-characters">
				{characters.map((character, index) => (
					<div className="character-container" key={index}>
						<div>
							<img src={character.image} alt={character.name} />
						</div>
						<div>
							<h3> {character.name}</h3>
							<h6>
								{character.status === 'Alive' ? (
									<>
										<span className="alive " />
										Vivo
									</>
								) : (
									<>
										<span className="dead" />
										Fallecio
									</>
								)}
							</h6>
							<p className=" text-grey">
								<span>Episodios:</span>
								<span>{character.episode.length} </span>
							</p>
							<p>
								<span className="text-grey">Especie:</span>
								<span> {character.species}</span>
							</p>
						</div>
					</div>
				))}
			</div>
			<button className="btn-searcNew">
				<span className="back-home" onClick={resetCharacters}>
					{' '}
					Volver a la Home{' '}
				</span>
			</button>
		</div>
	);
}
