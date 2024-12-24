type ProblemTiteProps = {
	title: string
}

const ProblemTite: React.FC<ProblemTiteProps> = ({ title }) => {
	return <h1 className='text-2xl text-dark-gray-8 font-semibold mb-5'>{title}</h1>
}

export default ProblemTite
