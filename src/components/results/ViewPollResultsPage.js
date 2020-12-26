import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { db } from '../../firebase';
import PollNotFound from '../layout/PollNotFound';
import ResultsPieChart from './ResultsPieChart';

function ViewPollResultsPage({ match, firebase }) {
	const [poll, setPoll] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const id = match.params.pollId;

		const unsubscribe = db
			.collection('polls')
			.doc(id)
			.onSnapshot((snapshot) => {
				setPoll(snapshot.data());
				console.log(snapshot.data());
				setIsLoading(false);
			});

		return () => {
			unsubscribe();
		};
	}, [firebase, match.params.pollId]);

	return (
		<Fragment>
			{isLoading ? (
				'Loading ...'
			) : !poll ? (
				<PollNotFound />
			) : (
				<section className='py-5 bg-gray-100  bg-opacity-50'>
					<div className='mx-auto container max-w-4xl md:w-3/4 shadow-md'>
						<div className='bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t'>
							<div className='max-w-sm mx-auto md:w-full md:mx-0'>
								<h1 className='text-2xl text-gray-600 font-bold'>
									{poll.title}
								</h1>
							</div>
						</div>
						<hr />
						<div className='bg-white space-y-6'>
							{poll.options.reduce(
								(acc, option) => (acc += option.count * 1),
								0
							) === 0 ? (
								<h1 className='text-l max-w-sm mx-auto p-4 text-gray-500'>
									It looks like no one has voted on this poll yet!
								</h1>
							) : (
								<ResultsPieChart options={poll.options} />
							)}
							<hr />
							<div className='w-full p-4 text-right text-gray-500'>
								<Link to='/'>
									<button className='px-4 inline py-2 mr-2 text-sm font-medium leading-5 shadow text-gray-600 transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-gray-200 hover:bg-gray-200'>
										Create a new poll
									</button>
								</Link>
								<Link to={`/${match.params.pollId}/vote`}>
									<button className='px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-indigo-400 active:bg-indigo-400 hover:bg-indigo-500'>
										Disagree? Vote on this poll
									</button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			)}
		</Fragment>
	);
}

export default ViewPollResultsPage;
