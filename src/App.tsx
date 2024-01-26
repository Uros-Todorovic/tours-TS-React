import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

export type ToursType = {
	id: string;
	name: string;
	image: string;
	info: string;
	price: number;
};

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState<ToursType[]>([]);

	const handleDeleteTours = (id: string) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	const fetchTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const tours = (await response.json()) as ToursType[];
			setTours(tours);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (isLoading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main>
				<h2>No tours left</h2>
				<button style={{ marginTop: '2rem' }} className="btn btn-info" onClick={() => fetchTours()}>
					Fetch tours
				</button>
			</main>
		);
	}
	return (
		<main>
			<Tours tours={tours} onDelete={handleDeleteTours} />
		</main>
	);
};
export default App;
