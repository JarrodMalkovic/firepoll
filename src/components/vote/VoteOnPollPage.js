import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { db } from '../../firebase';
import { history } from '../../utils/history';
import { createSuccessNotification } from '../notifications/CreateSuccessNotification';
import { createErrorNotification } from '../notifications/CreateErrorNotification';
import PollNotFound from '../layout/PollNotFound';

function VoteOnPollPage({ match, firebase }) {
	const [poll, setPoll] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [checkedItem, setCheckedItem] = useState({}); //plain object as state

	const onSubmit = (e) => {
		e.preventDefault();
		const key = Object.keys(checkedItem).pop();
		console.log(poll);
		if (!key)
			return createErrorNotification(
				'Error voting on poll!',
				'You must select an option before voting'
			);

		const docRef = db.collection('polls').doc(match.params.pollId);
		const options = poll.options.slice();
		options.forEach((option) =>
			option.option === key ? (option.count += 1) : (option.count += 0)
		);

		docRef.update({
			options,
		});

		createSuccessNotification(
			'Successfully voted on poll!',
			'Thank you for your vote'
		);

		history.push(`/${match.params.pollId}/results`);
	};

	const handleChange = (event) => {
		setCheckedItem({
			[event.target.name]: event.target.checked,
		});
	};

	useEffect(() => {
		const id = match.params.pollId;

		const unsubscribe = db
			.collection('polls')
			.doc(id)
			.onSnapshot((snapshot) => {
				setPoll(snapshot.data());
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
									Question: {poll.title}
								</h1>
							</div>
						</div>
						<hr />
						<form onSubmit={onSubmit}>
							<div class='flex flex-col  p-4'>
								{poll.options.map((option) => (
									<label className='inline-flex items-center mt-3'>
										<input
											type='checkbox'
											className='form-checkbox h-5 w-5 text-indigo-400'
											name={option.option}
											checked={checkedItem[option.option]}
											onChange={handleChange}
										/>
										<span className='ml-2 text-gray-600'>{option.option}</span>
									</label>
								))}
							</div>
							<hr />
							<div className='bg-white space-y-6'>
								<div className='w-full p-4 text-right text-gray-500'>
									<Link to={`/${match.params.pollId}/results`}>
										<button className='px-4 inline py-2 mr-2 text-sm font-medium leading-5 shadow text-gray-600 transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-gray-200 hover:bg-gray-200'>
											View results
										</button>
									</Link>
									<button
										type='submit'
										className='px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-indigo-400 active:bg-indigo-400 hover:bg-indigo-500'
									>
										Cast vote
									</button>
								</div>
							</div>
						</form>
					</div>
				</section>
			)}
		</Fragment>
	);
}

export default VoteOnPollPage;
