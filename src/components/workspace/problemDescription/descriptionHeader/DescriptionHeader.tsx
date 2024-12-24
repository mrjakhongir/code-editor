import { CgFileDocument } from 'react-icons/cg'
const DescriptionHeader = () => {
	return (
		<div className='bg-dark-fill-3 text-sm h-10'>
			<div className='flex items-center gap-1.5 h-full px-4'>
				<CgFileDocument size={20} color='rgb(10 132 255)' />
				<span className='text-dark-gray-8 text-lg font-semibold'>
					Description
				</span>
			</div>
		</div>
	)
}

export default DescriptionHeader
