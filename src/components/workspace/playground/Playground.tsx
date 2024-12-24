import Split from 'react-split'
import CodeSpace from './codeSpace/CodeSpace'
import TestCases from './testCases/TestCases'

type PlaygroundProps = {
	userCode: string
	setUserCode: React.Dispatch<React.SetStateAction<string>>
	answer: string
}

const Playground: React.FC<PlaygroundProps> = ({ userCode, setUserCode, answer}) => {
	return (
		<Split sizes={[65, 35]} direction='vertical' minSize={40}>
			<CodeSpace userCode={userCode} setUserCode={setUserCode} />
			<TestCases answer={answer} />
		</Split>
	)
}

export default Playground
