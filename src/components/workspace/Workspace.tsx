import Split from 'react-split'
import Playground from './playground/Playground'
import ProblemDescription from './problemDescription/ProblemDescription'

type WorkspaceProps = {
	userCode: string
	setUserCode: React.Dispatch<React.SetStateAction<string>>
	answer: string
}
const Workspace: React.FC<WorkspaceProps> = ({ userCode, setUserCode, answer }) => {
	return (
		<Split
			className='flex min-h-[calc(100vh-68px)] overflow-hidden'
			minSize={200}
			sizes={[45, 55]}
		>
			<ProblemDescription />
			<Playground
				userCode={userCode}
				setUserCode={setUserCode}
				answer={answer}
			/>
		</Split>
	)
}

export default Workspace
