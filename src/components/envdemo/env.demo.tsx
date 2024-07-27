import axios from 'axios';
import React, { useEffect } from 'react';

function EnvDemo() {
	useEffect(() => {
		axios.get(`${process.env.apiBaseUrl}`).then((res) => {
			console.log('data', res.data);
		});
	}, []);

	return <>ENV URL API SAMPLE</>;
}

export default EnvDemo;
