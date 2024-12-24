import DescriptionContent from './descriptionContent/DescriptionContent'
import DescriptionHeader from './descriptionHeader/DescriptionHeader'

const ProblemDescription = () => {
	return (
		<div className='bg-dark-layer-1 rounded-lg flex flex-col overflow-hidden'>
			<DescriptionHeader />
			<DescriptionContent />
		</div>
	)
}

export default ProblemDescription
