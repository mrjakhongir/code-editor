const CaseDetails = () => {
	return (
		<div className='text-lg font-semibold flex flex-col gap-5'>
			<div>
				<div className='mb-2 text-dark-gray-6 text-sm'>nums =</div>
				<input
					className='bg-dark-fill-3 p-3 rounded-lg w-full text-dark-gray-8 indent-2'
					type='text'
					value='[2, 7, 11, 15]'
				/>
			</div>
			<div>
				<div className='mb-2 text-dark-gray-6 text-sm'>target =</div>
				<input
					className='bg-dark-fill-3 p-3 rounded-lg w-full text-dark-gray-8 indent-2'
					type='text'
					value='9'
				/>
			</div>
		</div>
	)
}

export default CaseDetails
