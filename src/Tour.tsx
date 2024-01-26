import { useState } from 'react';
import { ToursType } from './App.tsx';

type TourProp = ToursType & {
	onDelete: (id: string) => void;
};

const Tour = ({ id, name, image, info, price, onDelete }: TourProp) => {
	const [readMore, setReadMore] = useState(false);

	const shortenInfo = `${info.substring(0, 200)} ...`;

	return (
		<article className="single-tour">
			<img src={image} alt={name} className="img" />
			<span className="tour-price">${price}</span>
			<div className="tour-info">
				<h5>{name}</h5>
				<p>
					{readMore ? info : shortenInfo}
					<button type="button" className="info-btn" onClick={() => setReadMore(!readMore)}>
						{readMore ? 'show less' : 'show more'}
					</button>
				</p>

				<button type="button" className="btn btn-block delete-btn" onClick={() => onDelete(id)}>
					Remove tour
				</button>
			</div>
		</article>
	);
};

export default Tour;
