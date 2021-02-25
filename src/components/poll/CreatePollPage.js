import { useState } from 'react';

import { db } from '../../firebase';
import { createErrorNotification } from '../notifications/CreateErrorNotification';
import { createSuccessNotification } from '../notifications/CreateSuccessNotification';
import { history } from '../../utils/history';
import PollTitle from './PollCreationTitle';
import PollCreationOptions from './PollCreationOptions';
import PollCreate from './PollCreate';

function CreatePollPage() {
	const [title, setTitle] = useState('');
	const [options, setOptions] = useState(['', '', '', '']);
	const [isCreating, setIsCreating] = useState(false);

	const createPoll = async () => {
		const optionsObj = options.map((option) => ({ option, count: 0 }));

		if (
			options.length < 2 ||
			options.some((option, i) => options.slice(0, i).includes(option))
		)
			return createErrorNotification(
				'Something went wrong...',
				'A poll must have atleast two options to vote on which are all unique'
			);

		setIsCreating(true);

		await db
			.collection('polls')
			.add({
				created: Date.now(),
				title,
				options: optionsObj,
			})
			.then((docRef) => {
				createSuccessNotification(
					'Success!',
					'Successfully created a new poll!'
				);

				history.push(`/${docRef.id}/vote`);
			})
			.catch((error) => {
				createErrorNotification('Something went wrong...', error);
			});

		setIsCreating(false);
	};

	const onAddOption = () => {
		setOptions((prevState) => prevState.concat(''));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log('x');
		createPoll();
	};

	return (
		<section className='py-5 bg-opacity-50'>
			<div className='mx-auto container max-w-4xl md:w-3/4 shadow-md'>
				<div className='bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t'>
					<div className='max-w-sm mx-auto md:w-full md:mx-0'>
						<h1 className='text-2xl text-gray-600 font-bold'>
							Create a new Poll
						</h1>
					</div>
				</div>
				<div className='bg-white space-y-6'>
					<form onSubmit={onSubmit}>
						<hr />
						<PollTitle
							onChange={(e) => setTitle(e.target.value)}
							title={title}
						/>
						<hr />
						<PollCreationOptions
							onChange={(e) =>
								setOptions((prevState) => [
									...prevState.slice(0, e.target.name * 1),
									e.target.value,
									...prevState.slice(e.target.name * 1 + 1, prevState.length),
								])
							}
							onClick={(e) =>
								setOptions((prevState) =>
									prevState.filter((val, i) => i !== e.target.id * 1)
								)
							}
							options={options}
						/>
						<hr />
						<PollCreate
							isCreating={isCreating}
							onAddOption={onAddOption}
							onSubmit={onSubmit}
						/>
					</form>
				</div>
			</div>
		</section>
	);
}

export default CreatePollPage;
