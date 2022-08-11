const express = require("express")
const Contact = require('../model/contact');
const router = express.Router()

// Get all posts
router.get("/Contact", async (req, res) => {
	const posts = await Contact.find()

	console.log(posts)
	res.send(posts)
})

// Create and store contact message
router.post("/Contact", async (req, res) => {
	const post = new Contact({
		email: req.query.email,
		firstname: req.query.firstname,
        lastname: req.query.lastname,
        message: req.query.message,
	})
	console.log(req.query)

	await post.save()
	res.send(post)
})

// Export Router
module.exports = router