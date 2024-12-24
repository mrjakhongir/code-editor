import CodeSpaceHeader from './codeSpaceHeader/CodeSpaceHeader'
import Editor from './editor/Editor'
import ProblemOptions from './problemOptions/ProblemOptions'

type CodeSpaceProps = {
	userCode: string
	setUserCode: React.Dispatch<React.SetStateAction<string>>
}

const CodeSpace: React.FC<CodeSpaceProps> = ({ userCode, setUserCode }) => {
	return (
		<div className='overflow-scroll rounded-lg bg-dark-layer-1'>
			<CodeSpaceHeader />
			<ProblemOptions />
			<Editor userCode={userCode} setUserCode={setUserCode} />
		</div>
	)
}

export default CodeSpace
