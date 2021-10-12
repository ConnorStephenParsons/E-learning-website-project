import test from 'ava'
import GitQuiz from '../modules/gitQuiz.js'

///////////////////////////////Unit testing the gitQuiz table///////////////////////////

////Unit tests to check if there is a question being inserted for every page////

test('QUIZ: error will flag if there is no question in page one', async test => {
	test.plan(1)
	const gitQuiz = await new GitQuiz()
	await gitQuiz.testSetup()
	try{
		const records = await gitQuiz.getid(1)
		console.log('Testing to see if there is a question for the page 1 ID', records)
		test.not(records.question, null, 'No question to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		gitQuiz.close()
	}
})

test('QUIZ: error will flag if there is no question in page two', async test => {
	test.plan(1)
	const gitQuiz = await new GitQuiz()
	await gitQuiz.testSetup()
	try{
		const records = await gitQuiz.getid(2)
		console.log('Testing to see if there is a question for the page 2 ID', records)
		test.not(records.question, null, 'No question to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		gitQuiz.close()
	}
})

test('QUIZ: error will flag if there is no question in page three', async test => {
	test.plan(1)
	const gitQuiz = await new GitQuiz()
	await gitQuiz.testSetup()
	try{
		const records = await gitQuiz.getid(3)
		console.log('Testing to see if there is a question for the page 3 ID', records)
		test.not(records.question, null, 'No question to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		gitQuiz.close()
	}
})

test('QUIZ: error will flag if there is no question in page four', async test => {
	test.plan(1)
	const gitQuiz = await new GitQuiz()
	await gitQuiz.testSetup()
	try{
		const records = await gitQuiz.getid(4)
		console.log('Testing to see if there is a question for the page 4 ID', records)
		test.not(records.question, null, 'No question to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		gitQuiz.close()
	}
})

test('QUIZ: error will flag if there is no question in page five', async test => {
	test.plan(1)
	const gitQuiz = await new GitQuiz()
	await gitQuiz.testSetup()
	try{
		const records = await gitQuiz.getid(5)
		console.log('Testing to see if there is a question for the page 5 ID', records)
		test.not(records.question, null, 'No question to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		gitQuiz.close()
	}
})


////Unit testing the multiple choice answers in the table/////

test('QUIZ: error will flag if there is nothing inserted into the multiple choice answerOne', async test => {
	test.plan(1)
	const gitQuiz = await new GitQuiz()
	await gitQuiz.testSetup()
	try{
		const records = await gitQuiz.getid(1)
		console.log('testing to see if multiple choice answer 1 is inserted', records)
		test.not(records.answerOne, null, 'Nothing displayed for answerOne')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		gitQuiz.close()
	}
})

test('QUIZ: error will flag if there is nothing inserted into the multiple choice answerTwo', async test => {
	test.plan(1)
	const gitQuiz = await new GitQuiz()
	await gitQuiz.testSetup()
	try{
		const records = await gitQuiz.getid(1)
		console.log('testing to see if multiple choice answer 2 is inserted', records)
		test.not(records.answerTwo, null, 'Nothing displayed for answerTwo')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		gitQuiz.close()
	}
})

test('QUIZ: error will flag if there is nothing inserted into the multiple choice answerThree', async test => {
	test.plan(1)
	const gitQuiz = await new GitQuiz()
	await gitQuiz.testSetup()
	try{
		const records = await gitQuiz.getid(1)
		console.log('testing to see if multiple choice answer 3 is inserted', records)
		test.not(records.answerThree, null, 'Nothing displayed for answerThree')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		gitQuiz.close()
	}
})

test('QUIZ: error will flag if there is nothing inserted into the Correct answer Field', async test => {
	test.plan(1)
	const gitQuiz = await new GitQuiz()
	await gitQuiz.testSetup()
	try{
		const records = await gitQuiz.getid(1)
		console.log('testing to see if the correct answer has been stored', records)
		test.not(records.correctAnswer, null, 'There is no Correct answer Inserted')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		gitQuiz.close()
	}
})


////Unit tests to check if the next and previous buttons works when an answer is submitted/////

test('QUIZ: error will flag if there is a previous button to go back a question on question 1', async test => {
	test.plan(1)
	const gitQuiz = await new GitQuiz()
	await gitQuiz.testSetup()
	try{
		const records = await gitQuiz.getid(1)
		console.log('testing to see if the previous button is hidden on question ID 1', records)
		test.is(records.previouspage, null, 'This is not the first page in records')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		gitQuiz.close()
	}
})

test('QUIZ: error will flag if a new question page loads after question 5 when clicking next', async test => {
	test.plan(1)
	const gitQuiz = await new GitQuiz()
	await gitQuiz.testSetup()
	try{
		const records = await gitQuiz.getid(5)
		console.log('testing to see if the next button is hidden on question ID 5', records)
		test.is(records.nextpage, null, 'This is not the last page in records')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		gitQuiz.close()
	}
})
