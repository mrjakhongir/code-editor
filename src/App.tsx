import { useState } from 'react'
import Navigation from './components/navigation/Navigation'
import Workspace from './components/workspace/Workspace'
import { handlerTwoSum } from './data/two-sum.ts'

function App() {
	const [userCode, setUserCode] = useState(
		`function twoSum(nums, target) {
	// Write your code here
}`
	)

	const [answer, setAnswer] = useState('')
	const [loading, setLoading] = useState(false)

	const handleRun = async () => {
		try {
			setLoading(true)
			const cb = new Function(`return ${userCode}`)()
			await new Promise(resolve => setTimeout(resolve, 1000))
			handlerTwoSum(cb)
			setAnswer('All test cases passed')
			setLoading(false)
		} catch (error: any) {
			setLoading(true)
			await new Promise(resolve => setTimeout(resolve, 1000))
			setAnswer(error.message)
			setLoading(false)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='text-3xl bg-dark-layer-2 p-3 pt-0'>
			<Navigation handleRun={handleRun} />
			{loading ? (
				<div className='h-full fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.2)] text-black flex items-center justify-center'>
					Loading...
				</div>
			) : (
				<Workspace
					userCode={userCode}
					setUserCode={setUserCode}
					answer={answer}
				/>
			)}
		</div>
	)
}

export default App
