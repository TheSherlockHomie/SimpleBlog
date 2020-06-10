const express = require("express");
const mongodb = require("mongodb");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

//Handle api key stuff
const mongoUName = process.env.DB_UNAME;
const mongoPass = process.env.DB_PASS;

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
router.delete("/:id", async (req, res) => {
	const posts = await loadPostsCollection();
	await posts.deleteOne({ _id: mongodb.ObjectID(req.params.id) });
	res.status(200).send();
});

async function loadPostsCollection() {
	const client = await mongodb.MongoClient.connect(
		`mongodb+srv://${mongoUName}:${mongoPass}@simpleblog-fgubp.mongodb.net/SimpleBlog?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
		}
	);
	return client.db(`SimpleBlog`).collection("posts");
}

module.exports = router;
