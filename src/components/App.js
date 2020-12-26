import { Router, Route, Switch } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import { Fragment } from 'react';

import Routes from './routing/Routes';
import { history } from '../utils/history';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {
	return (
		<Fragment>
			<ReactNotification />
			<div className='flex flex-col h-screen justify-between'>
				<Navbar />
				<div className='container mx-auto px-4 mb-auto '>
					<Router history={history}>
						<Switch>
							<Route component={Routes} />
						</Switch>
					</Router>
				</div>
				<Footer />
			</div>
		</Fragment>
	);
}

export default App;
