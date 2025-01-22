require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000


const githubData = {
    "login": "aviralMadhvan24",
    "id": 188544168,
    "node_id": "U_kgDOCzz0qA",
    "avatar_url": "https://avatars.githubusercontent.com/u/188544168?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/aviralMadhvan24",
    "html_url": "https://github.com/aviralMadhvan24",
    "followers_url": "https://api.github.com/users/aviralMadhvan24/followers",
    "following_url": "https://api.github.com/users/aviralMadhvan24/following{/other_user}",
    "gists_url": "https://api.github.com/users/aviralMadhvan24/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/aviralMadhvan24/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/aviralMadhvan24/subscriptions",
    "organizations_url": "https://api.github.com/users/aviralMadhvan24/orgs",
    "repos_url": "https://api.github.com/users/aviralMadhvan24/repos",
    "events_url": "https://api.github.com/users/aviralMadhvan24/events{/privacy}",
    "received_events_url": "https://api.github.com/users/aviralMadhvan24/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2024-11-15T05:43:06Z",
    "updated_at": "2025-01-22T08:42:50Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/aviral',(req,res)=>{
    res.send('my name is aviral')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.get('/login',(req,res)=>{
    res.send("<h1>Please login to my page</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})