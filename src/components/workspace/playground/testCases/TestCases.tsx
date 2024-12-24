import CaseDetails from './CaseDetails'
import CasesNav from './CasesNav'
import TestCasesHeader from './testCasesHeader/TestCasesHeader'

type TestCasesProps = {
	answer: string
}
const TestCases: React.FC<TestCasesProps> = ({ answer }) => {
	return (
		<section className='rounded-lg bg-dark-layer-1 flex flex-col overflow-hidden'>
			<TestCasesHeader />
			{answer ? (
				<p className='p-3 overflow-y-scroll text-lg font-semibold text-white'>
					{answer}
				</p>
			) : (
				<div className='p-3 overflow-y-scroll'>
					<CasesNav />
					<CaseDetails />
				</div>
			)}
		</section>
	)
}

export default TestCases
