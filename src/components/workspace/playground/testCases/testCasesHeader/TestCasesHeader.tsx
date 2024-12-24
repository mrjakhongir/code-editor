import { FaRegCheckSquare } from 'react-icons/fa'

const TestCasesHeader = () => {
	return (
		<div className='bg-dark-fill-3 text-sm h-10'>
			<div className='flex items-center gap-1.5 h-full px-4'>
				<FaRegCheckSquare size={18} color='rgb(44 187 93)' />
				<span className='text-dark-gray-8 text-lg font-semibold'>Testcase</span>
			</div>
		</div>
	)
}

export default TestCasesHeader
