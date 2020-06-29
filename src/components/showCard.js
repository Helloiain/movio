import React from 'react';
import { posterUrl } from '../config';

function ShowCard({
	original_name,
	poster_path,
	vote_average,
	first_air_date,
}) {
	let release = new Date(first_air_date);
	release = release.getFullYear();

	return (
		<div style={{ flex: '1 0 200px', margin: '1.5rem' }}>
			{poster_path ? (
				<img
					src={`${posterUrl}/${poster_path}`}
					alt='poster'
					style={{
						width: '100%',
					}}
				/>
			) : (
				<img src='./images/poster.png' alt='poster' />
			)}
			<h3>{original_name}</h3>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>{vote_average} ★</div>
				<div>{release}</div>
			</div>
		</div>
	);
}

export default ShowCard;