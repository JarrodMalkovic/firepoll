import PollOption from './PollOption';

function PollCreationOptions({ options, onChange, onClick }) {
	return (
		<div className='md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center'>
			<h2 className='md:w-1/3 mx-auto max-w-sm'>Answer Options</h2>
			<div className='md:w-2/3 mx-auto max-w-sm space-y-5'>
				{options.map((option, index) => (
					<PollOption
						option={option}
						key={index}
						onChange={onChange}
						onClick={onClick}
						index={index}
					/>
				))}
				{!options.length &&
					'You have no options added, click the "Add new Poll Option" button below to add some.'}
			</div>
		</div>
	);
}

export default PollCreationOptions;
