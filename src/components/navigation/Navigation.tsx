import { FaPlay } from 'react-icons/fa'

type NavigationProps = {
	handleRun: () => void
}
const Navigation: React.FC<NavigationProps> = ({ handleRun }) => {
	return (
		<nav className='h-14 flex items-center justify-center'>
			<div className='flex gap-0.5'>
				<button
					className='bg-dark-fill-3 text-dark-gray-8 font-semibold text-lg py-1 px-5 flex items-center gap-3 transition-all hover:bg-dark-fill-2 active:scale-[0.95]'
					onClick={handleRun}
				>
					<FaPlay color='rgb(219, 219, 219)' />
					<span>Run</span>
				</button>
				{/* <button className='bg-dark-fill-3 font-semibold text-dark-green-s text-lg py-1 px-5 flex items-center gap-3 transition-all hover:bg-dark-fill-2'>
					<MdOutlineCloudUpload size={25} />
					<span>Submit</span>
				</button> */}
			</div>
		</nav>
	)
}

export default Navigation
