export const handlerTwoSum = (fn: any) => {
	try {
		const nums = [
			[2, 7, 11, 15],
			[3, 2, 4],
			[3, 3],
		]

		const targets = [9, 6, 6]
		const answers = [
			[0, 1],
			[1, 2],
			[0, 1],
		]

		for (let i = 0; i < nums.length; i++) {
			const result = fn(nums[i], targets[i])

			if (JSON.stringify(result) !== JSON.stringify(answers[i])) {
				throw new Error(
					`Test failed for input: 
					nums = ${JSON.stringify(nums[i])}, target = ${targets[i]}. ` +
						`Expected: ${JSON.stringify(answers[i])}, Output: ${JSON.stringify(
							result
						)}.`
				)
			}
		}
		return true
	} catch (error: any) {
		throw new Error(error)
	}
}
