const Examples = () => {
	return (
		<section className='text-sm text-dark-gray-8 flex flex-col gap-4 mb-10'>
			<div>
				<h2 className='mb-2 font-semibold'>Example 1:</h2>
				<ul className='pl-5 border-l-2 border-dark-fill-3'>
					<li>
						<span className='font-semibold'>Input: </span>
						<span className='text-dark-gray-6'>
							nums = [2, 7, 11, 15], target = 9
						</span>
					</li>
					<li>
						<span className='font-semibold'>Output: </span>
						<span className='text-dark-gray-6'>[0, 1]</span>
					</li>
					<li>
						<span className='font-semibold'>Explanation: </span>
						<span className='text-dark-gray-6'>
							Because nums[0] + nums[1] == 9, we return [0, 1].
						</span>
					</li>
				</ul>
			</div>
			<div>
				<h2 className='mb-2 font-semibold'>Example 2:</h2>
				<ul className='pl-5 border-l-2 border-dark-fill-3'>
					<li>
						<span className='font-semibold'>Input: </span>
						<span className='text-dark-gray-6'>
							nums = [3, 2, 4], target = 6
						</span>
					</li>
					<li>
						<span className='font-semibold'>Output: </span>
						<span className='text-dark-gray-6'>[1, 2]</span>
					</li>
				</ul>
			</div>
			<div>
				<h2 className='mb-2 font-semibold'>Example 3:</h2>
				<ul className='pl-5 border-l-2 border-dark-fill-3'>
					<li>
						<span className='font-semibold'>Input: </span>
						<span className='text-dark-gray-6'>nums = [3, 3], target = 6</span>
					</li>
					<li>
						<span className='font-semibold'>Output: </span>
						<span className='text-dark-gray-6'>[0, 1]</span>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Examples
