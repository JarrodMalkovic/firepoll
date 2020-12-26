import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

import { generateRandomHexColor } from '../../utils/generateRandomHexColor';

function ResultsPieChart({ options }) {
	const [data, setData] = useState({});
	const [colors, setColors] = useState([]);

	useEffect(() => {
		setColors(options.map((o) => generateRandomHexColor()));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const newData = {
			labels: options.map((option) => option.option),
			datasets: [
				{
					data: options.map((option) => option.count),
					backgroundColor: colors,
					hoverBackgroundColor: colors,
				},
			],
		};

		setData(newData);
	}, [options, colors]);

	console.log(data);
	return <Pie data={data} />;
}

export default ResultsPieChart;
