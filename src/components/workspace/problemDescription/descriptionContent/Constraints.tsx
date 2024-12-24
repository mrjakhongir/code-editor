const Constraints = () => {
	return (
		<section className='text-sm text-dark-gray-8'>
			<h2 className='mb-2 font-semibold'>Constraints:</h2>
			<ul className='text-white ml-5 list-disc text-lg flex flex-col gap-1'>
				<li>
					<code>
						2 &lt;= nums.length &lt;= 10<sup>4</sup>
					</code>
				</li>
				<li>
					<code>
						-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
					</code>
				</li>
				<li>
					<code>
						-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup>
					</code>
				</li>
				<li className='text-sm'>Only one valid answer exists.</li>
			</ul>
		</section>
	)
}

export default Constraints
