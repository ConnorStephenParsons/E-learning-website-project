import test from 'ava'
import LearningContent from '../modules/learningContent.js'


/////Unit tests for the E-learning content in the learningContent table in the data base/////


////Unit tests to check if there is content being displayed from the database////
test('LEARNING CONTENT: error ir no content has been inserted for id 1 in learningContent table', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(1)
		console.log('Testing the E-learning Content', records)
		test.not(records.content, null, 'No content to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		learningContent.close()
	}
})

test('LEARNING CONTENT: error ir no content has been inserted for id 2 in learningContent table', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(2)
		console.log('Testing the E-learning Content', records)
		test.not(records.content, null, 'No content to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		learningContent.close()
	}
})

test('LEARNING CONTENT: error ir no content has been inserted for id 3 in learningContent table', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(3)
		console.log('Testing the E-learning Content', records)
		test.not(records.content, null, 'No content to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		learningContent.close()
	}
})

test('LEARNING CONTENT: error ir no content has been inserted for id 4 in learningContent table', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(4)
		console.log('Testing the E-learning Content', records)
		test.not(records.content, null, 'No content to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		learningContent.close()
	}
})

test('LEARNING CONTENT: error if no content has been inserted for id 5 learningContent table', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(5)
		console.log('Testing the E-learning Content', records)
		test.not(records.content, null, 'No content to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		learningContent.close()
	}
})


/////Unit tests for the Images in the learningContent table in the database/////

test('LEARNING CONTENT: error if no image has been inserted for id 1 in learningContent table', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(1)
		console.log('Testing the E-learning Images', records)
		test.not(records.image, null, 'No content to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		learningContent.close()
	}
})

test('LEARNING CONTENT: error if no image has been inserted for id 2 in learningContent table', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(2)
		console.log('Testing the E-learning Images', records)
		test.not(records.image, null, 'No content to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		learningContent.close()
	}
})

test('LEARNING CONTENT: error if no image has been inserted for id 3 in learningContent table', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(3)
		console.log('Testing the E-learning Images', records)
		test.not(records.image, null, 'No content to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		learningContent.close()
	}
})

test('LEARNING CONTENT: error if no image has been inserted for id 4 in learningContent table', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(4)
		console.log('Testing the E-learning Images', records)
		test.not(records.image, null, 'No content to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		learningContent.close()
	}
})

test('LEARNING CONTENT: error if no image has been inserted for id 5 in learningContent table', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(5)
		console.log('Testing the E-learning Images', records)
		test.not(records.image, null, 'No content to be displayed')
	} catch (err) {
		test.fail('error thrown')
	} finally {
		learningContent.close()
	}
})


/////Unit tests to see if the next and previous buttons on the E-learning content pages work correctly/////

test('LEARNING CONTENT: error if there is a page in records before before the first page', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(1)
		console.log('Testing to see if the previous button is removed on page 1', records)
		test.is(records.previouspage, null, 'A page previous to page 1 has been found')
	} catch (err) {
		test.fail('error not thrown')
	} finally {
		learningContent.close()
	}
})

test('LEARNING CONTENT: error if there is a page in records after the final page', async test => {
	test.plan(1)
	const learningContent = await new LearningContent()
	await learningContent.testSetup()
	try{
		const records = await learningContent.getid(5)
		console.log('Testing to see if the next button is removed on page 5', records)
		test.is(records.nextpage, null, 'Another page after page 5 has been found')
	} catch (err) {
		test.fail('error not thrown')
	} finally {
		learningContent.close()
	}
})


