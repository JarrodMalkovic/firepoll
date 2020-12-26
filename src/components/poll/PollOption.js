function PollOption({ option, index, onChange, onClick }) {
	return (
		<div>
			<label className='text-sm text-gray-400'>Option #{index + 1}</label>
			<div className='w-full inline-flex border'>
				<input
					value={option}
					onChange={onChange}
					name={index}
					type='option'
					className='w-11/12 focus:outline-none focus:text-gray-600 p-2'
					placeholder='Enter your polls option here'
					required
				/>
				<button className='focus:outline-none' type='button' onClick={onClick}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='-6 -6 24 24'
						width='24'
						height='24'
						preserveAspectRatio='xMinYMin'
						className='icon__icon'
						id={index}
					>
						<path d='M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z'></path>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default PollOption;
