import { Route, Switch } from 'react-router-dom';

import CreatePollPage from '../poll/CreatePollPage';
import VoteOnPollPage from '../vote/VoteOnPollPage';
import ViewPollResultsPage from '../results/ViewPollResultsPage';
import PageNotFound from '../layout/PageNotFound';

function Routes() {
	return (
		<Switch>
			<Route exact path='/' component={CreatePollPage} />
			<Route exact path='/:pollId/vote' component={VoteOnPollPage} />
			<Route exact path='/:pollId/results' component={ViewPollResultsPage} />
			<Route component={PageNotFound} />
		</Switch>
	);
}

export default Routes;
