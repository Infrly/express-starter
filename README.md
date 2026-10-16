# Express starter for Infrly

A minimal [Express](https://expressjs.com/) app with a health check and an optional PostgreSQL connection. It deploys on [Infrly](https://getinfrly.com/?utm_source=github&utm_medium=listing&utm_campaign=template_express_starter) the first time, with no Dockerfile and no configuration.

## Deploy on Infrly

**Quickest:** sign in at [app.getinfrly.com](https://app.getinfrly.com) and choose **Deploy a template → Express**. Infrly creates the project and service and deploys this repository. Infrly is free during its public beta.

**From your own copy:** click **Use this template** on GitHub to copy the repository into your account, then in Infrly choose **New service → Web Service** and pick your copy. Infrly fills in these settings for you:

| Setting | Value |
|---|---|
| Runtime | Node.js |
| Install command | `npm ci` |
| Start command | `npm start` |
| Health check path | `/health` |

Every push to your branch deploys the new version.

## Add a database

In the same Infrly project, create a **PostgreSQL** service. Copy its internal connection URL into this service's environment variables as `DATABASE_URL` and redeploy. The home page then shows the connection.

## Run it locally

```bash
npm install
npm start
```

Then edit `server.js`.

## Learn more

- [Infrly documentation](https://docs.getinfrly.com/getting-started.html)
- [Infrly](https://getinfrly.com/?utm_source=github&utm_medium=listing&utm_campaign=template_express_starter): deploy web apps, static sites, cron jobs and databases from GitHub

MIT licensed.
