function PollCreate({ onAddOption, onSubmit, isCreating }) {
	return (
		<div className='w-full p-4 text-right text-gray-500'>
			<button
				onClick={onAddOption}
				type='button'
				className='px-4 inline py-2 mr-2 text-sm font-medium leading-5 shadow text-gray-600 transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-gray-200 hover:bg-gray-200'
			>
				Add a new Poll Option
			</button>
			<button
				type='submit'
				className='px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-indigo-400 active:bg-indigo-400 hover:bg-indigo-500'
			>
				{isCreating ? 'Creating Poll...' : 'Create Poll'}
			</button>
		</div>
	);
}

export default PollCreate;
