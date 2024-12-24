import Constraints from './Constraints'
import Examples from './Examples'
import ProblemDesc from './ProblemDesc'
import ProblemTite from './ProblemTite'

const DescriptionContent = () => {
	return (
		<section className='flex-1 overflow-scroll p-3'>
			<ProblemTite title='1. Two Sum' />
			<ProblemDesc />
			<Examples />
			<Constraints />
		</section>
	)
}

export default DescriptionContent
