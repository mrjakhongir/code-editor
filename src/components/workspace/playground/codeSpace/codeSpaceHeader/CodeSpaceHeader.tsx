import { IoCodeSlashOutline } from 'react-icons/io5'

const CodeSpaceHeader = () => {
	return (
		<div className='bg-dark-fill-3 text-sm h-10'>
			<button className='flex items-center gap-1.5 h-full px-4'>
				<IoCodeSlashOutline size={22} color='rgb(44 187 93)' />
				<span className='text-dark-gray-8 text-lg font-semibold'>Code</span>
			</button>
		</div>
	)
}

export default CodeSpaceHeader
