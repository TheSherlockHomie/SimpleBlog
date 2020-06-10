# Simple Blog

A simple blog application built using Express and Vue.

A screenshot:
![alt text][logo]

[logo]: screenshot.png "Screenshot of the app"

<hr>

## Building the app

#### Clone the repo

```
git clone https://github.com/TheSherlockHomie/SimpleBlog.git
cd SimpleBlog
```

#### Check if you have Node installed

```
node --version
npm --version
```

If the above commands don't give you version numbers, you need to install Node (or configure it correctly)

#### Install node modules

```
npm install
cd client
npm install
```

#### Configure MongoDB Atlas

At the root of the repo,

```
touch .env
vscode .env
```

Inside the .env file:

```
DB_UNAME=Your MongoDB Atlas Cluster username
DB_PASS=Password
```

Then

```
vscode ./server/routes/api/posts.js
```

Replace

```
const client = await mongodb.MongoClient.connect(
		`mongodb+srv://${mongoUName}:${mongoPass}@simpleblog-fgubp.mongodb.net/SimpleBlog?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
		}
	);
```

With your MongoDB Atlas cluster URL

#### Run dev build

At the root of the repo:

```
npm run dev
```

Then

```
cd client
npm run serve
```

The express server should start at`http://localhost:5000/api/posts`
and the front end should be accessible at `http://localhost:8080/`

<hr>

This was made learning Express and Vue following a [tutorial from Traversy Media](https://www.youtube.com/watch?v=j55fHUJqtyw&list=PLillGF-RfqbYSx-Ab1xWVanGKtowTsnNm&index=2&t=0s)
