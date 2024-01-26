import { ToursType } from './App.tsx';
import Tour from './Tour.tsx';

type ToursProps = {
	tours: ToursType[];
	onDelete: (id: string) => void;
};

const Tours = ({ tours, onDelete }: ToursProps) => {
	return (
		<section>
			<div className="title">
				<h2>Our Tours</h2>
				<div className="title-underline"></div>
				<div className="tours">
					{tours.map((tour) => {
						return <Tour key={tour.id} {...tour} onDelete={onDelete} />;
					})}
				</div>
			</div>
		</section>
	);
};
export default Tours;
