require ('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

const gethubData = {
  "login": "mrkeshav-05",
  "id": 145784447,
  "node_id": "U_kgDOCLB-fw",
  "avatar_url": "https://avatars.githubusercontent.com/u/145784447?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mrkeshav-05",
  "html_url": "https://github.com/mrkeshav-05",
  "followers_url": "https://api.github.com/users/mrkeshav-05/followers",
  "following_url": "https://api.github.com/users/mrkeshav-05/following{/other_user}",
  "gists_url": "https://api.github.com/users/mrkeshav-05/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mrkeshav-05/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mrkeshav-05/subscriptions",
  "organizations_url": "https://api.github.com/users/mrkeshav-05/orgs",
  "repos_url": "https://api.github.com/users/mrkeshav-05/repos",
  "events_url": "https://api.github.com/users/mrkeshav-05/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mrkeshav-05/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Keshav Thakur",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 0,
  "following": 13,
  "created_at": "2023-09-22T14:34:16Z",
  "updated_at": "2024-02-03T09:00:25Z"
}

app.get('/', (req, res) => {
  res.send('keshav is liistenning')
})

app.get('/home', (req, res) => {
  res.send('this is home page')
})
app.get('/github',(req, res) => {
  res.json(gethubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})