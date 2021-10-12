
/** @module learningContent */


import sqlite from 'sqlite-async'


/**
 * LearningContent
 * ES6 module that handles the E- Learning content.
 */
class LearningContent {
	/**
   * Create an content object
   * @param {String} [dbName=":memory:"] - The name of the database file to use.
   */
	////A constructor for the database allowing it to be stored in memory////
	constructor(dbName = ':memory:') {
		return (async() => {
			this.db = await sqlite.open(dbName)
			////Creating the table schema for the learning content////
			const sql = 'CREATE TABLE IF NOT EXISTS learningContent(\
                id INTEGER PRIMARY KEY AUTOINCREMENT,\
                content TEXT,\
                image TEXT,\
                nextpage INTEGER,\
                previouspage INTEGER,\
                testtitle TEXT\
            );'
			await this.db.run(sql)
			return this
		})()
	}
	/**
	 * gets learning page via id
	 * @param {Integer} id for learning content
	 * @returns {Object} returns row from table
	 */
	//// A function allowing a page of content to be pulled depending on the id////
	async getid(id) {
		const sql = `SELECT * FROM learningContent WHERE id=${id};`
		const learningContent = await this.db.get(sql)
		return learningContent

	}
	////An async function inserting learning content into the database to be used for unit testing////
	async testSetup() {
		let sql = 'INSERT INTO learningContent(id, content, image, nextpage, previouspage)\
                  VALUES(1, "We can track past commits in Github with git log", "image1.JPG", 2, null);'
		await this.db.run(sql)
		sql = 'INSERT INTO learningContent(id, content, image, nextpage, previouspage)\
               VALUES(2, "To initialise an empty repository in github to our local box,\
               we simply type in the following: git init.", "image2.JPG", 3, 1);'
		await this.db.run(sql)
		sql = 'INSERT INTO learningContent(id, content, image, nextpage, previouspage)\
               VALUES(3, "If we want to store our code on a github server, we need to use the command: \
               git remote add origin [repository name] before commiting", "image3.JPG", 4, 2);'
		await this.db.run(sql)
		sql = 'INSERT INTO learningContent(id, content, image, nextpage, previouspage)\
               VALUES(4, "files are added to the repository with git add --all", "image4.JPG", 5, 3);'
		await this.db.run(sql)
		sql = 'INSERT INTO learningContent(id, content, image, nextpage, previouspage)\
               VALUES(5, "We can commit code with a message using: git commit -m", "image5.JPG", null, 4);'
		await this.db.run(sql)
	}

	async close() {
		await this.db.close()
	}
}

export default LearningContent
