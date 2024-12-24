const ProblemOptions = () => {
	return (
		<div className='text-lg text-dark-gray-6 py-1 px-4 border-b border-dark-fill-3'>
			<select
				name='language'
				id=''
				className='bg-transparent rounded-md cursor-pointer transition-all hover:bg-dark-fill-3 py-1 px-2'
				onChange={e => console.log(e.target.value)}
			>
				<option value='javascript'>JavaScript</option>
				<option value='python'>Python</option>
				<option value='go'>Go</option>
			</select>
		</div>
	)
}

export default ProblemOptions
