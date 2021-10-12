
/** @module gitQuiz */


import sqlite from 'sqlite-async'


/**
 * GitQuiz
 * ES6 module that handles the Quiz.
 */
class GitQuiz {
	/**
   * Create an content object
   * @param {String} [dbName=":memory:"] - The name of the database file to use.
   */

	////Constructor for the database allowing it to be stored in memory////
	constructor(dbName = ':memory:') {
		return (async() => {
			this.db = await sqlite.open(dbName)
			////Creating a table schema for the quiz questions ready for testing////
			const sql = 'CREATE TABLE IF NOT EXISTS gitQuiz(\
                id INTEGER PRIMARY KEY AUTOINCREMENT,\
                question TEXT,\
                answerOne TEXT,\
                answerTwo TEXT,\
                answerThree TEXT,\
                correct TEXT,\
                nextpage INTEGER,\
                previouspage INTEGER\
            );'
			await this.db.run(sql)
			return this
		})()
	}
	////A function allowing a page of a quiz question to be pulled from the database////
	/**
	 * gets quiz page via id
	 * @param {Integer} id for quiz question
	 * @returns {Object} returns row from table
	 */
	async getid(id) {
		const sql = `SELECT * FROM gitQuiz WHERE id=${id};`
		const gitQuiz = await this.db.get(sql)
		return gitQuiz
	}

	////An async function inserting quiz matrial into the database to be able to be unit tested and used in routes////
	async testSetup() {
		let sql='INSERT INTO gitQuiz(id, question, answerOne, answerTwo, answerThree, correct, nextpage, previouspage)\
                VALUES(1, "What does git log do", "shows history of the past commits",\
                "allows us to commit to a branch", "shows files in the directory", "answerOne", 2, null);'
		await this.db.run(sql)
		sql = 'INSERT INTO gitQuiz(id, question, answerOne, answerTwo, answerThree, correct, nextpage, previouspage)\
               VALUES(2, "initialising a git repository is", "git create", "git", "git init", "answerThree", 3, 1);'
		await this.db.run(sql)
		sql = 'INSERT INTO gitQuiz(id, question, answerOne, answerTwo, answerThree, correct, nextpage, previouspage)\
               VALUES(3, "git add --all can also be", "git add --", "git add *", "git merge", "answerThree", 4, 2);'
		await this.db.run(sql)
		sql = 'INSERT INTO gitQuiz(id, question, answerOne, answerTwo, answerThree, correct, nextpage, previouspage)\
               VALUES(4, "What does the git add -- all command do", "Adds all repositories we have created to github",\
               "Adds all files to our repository", "adds our current open file to our file tree", "answerTwo", 5, 3);'
		await this.db.run(sql)
		sql = 'INSERT INTO gitQuiz(id, question, answerOne, answerTwo, answerThree, correct, nextpage, previouspage)\
            VALUES(5, "the m for git commit -m means", "merge", "message", "multiple", "answerTwo", null, 4);'
		await this.db.run(sql)
	}

	async close() {
		await this.db.close()
	}
}

export default GitQuiz
