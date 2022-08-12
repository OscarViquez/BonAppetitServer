const express = require("express")
const Contact = require('../model/contact');
const router = express.Router()

// Get all posts
router.get("/readContacts", async (req, res) => {
	const posts = await Contact.find()

	console.log(posts)
	res.send(posts)
})

// Create and store contact message
router.post("/sendContact", async (req, res) => {
	const post = new Contact({
		email: req.query.email,
		firstName: req.query.firstName,
        lastName: req.query.lastName,
        message: req.query.message,
	})
	console.log(req.query.firstName)

	await post.save();
	res.send(post);
})

// Export Router
module.exports = router