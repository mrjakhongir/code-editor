import { javascript } from '@codemirror/lang-javascript'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import CodeMirror from '@uiw/react-codemirror'

type EditorProps = {
	userCode: string
	setUserCode: React.Dispatch<React.SetStateAction<string>>
}
const Editor: React.FC<EditorProps> = ({ userCode, setUserCode }) => {
	const onChange = (value: string) => {
		setUserCode(value)
	}
	return (
		<div>
			<CodeMirror
				value={userCode}
				theme={vscodeDark}
				extensions={[javascript()]}
				style={{ fontSize: '16px' }}
				onChange={onChange}
			/>
		</div>
	)
}

export default Editor

// const hashTable = {}

// for(let i = 0; i < nums.length; i++){
// 	let neededVal = target - nums[i]
// 	if(!(neededVal in hashTable)){
// 		hashTable[nums[i]] = i
// 	}else{
// 		return [hashTable[neededVal], i+1]
// 	}
// }
