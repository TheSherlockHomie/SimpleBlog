const express = require("express");
const mongodb = require("mongodb");
const apiKeys = require("./../../../apiKeys");

const mongoLogin = apiKeys.mongoDbLogin();

const router = express.Router();

//Get posts
router.get("/", async (req, res) => {
	const posts = await loadPostsCollection();
	res.send(await posts.find({}).toArray());
});

//Add posts
router.post("/", async (req, res) => {
	const posts = await loadPostsCollection();
	await posts.insertOne({
		text: req.body.text,
		createdAt: new Date(),
	});
	res.status(201).send();
});
//Delete posts

async function loadPostsCollection() {
	const client = await mongodb.MongoClient.connect(
		`mongodb+srv://${mongoLogin.username}:${mongoLogin.password}@simpleblog-fgubp.mongodb.net/SimpleBlog?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
		}
	);
	return client.db(`SimpleBlog`).collection("posts");
}

module.exports = router;
