import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import 'react-notifications-component/dist/theme.css';
import './styles/index.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
