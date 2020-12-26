function PollTitle({ title, onChange }) {
	return (
		<div className='md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center'>
			<h2 className='md:w-1/3 max-w-sm mx-auto'>Title</h2>
			<div className='md:w-2/3 max-w-sm mx-auto'>
				<div className='w-full inline-flex border'>
					<input
						value={title}
						type='title'
						name='title'
						onChange={onChange}
						className='w-11/12 focus:outline-none focus:text-gray-600 p-2'
						placeholder='Enter your title here'
						required
					/>
				</div>
			</div>
		</div>
	);
}

export default PollTitle;
