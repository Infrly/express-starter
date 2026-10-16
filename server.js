// A minimal Express app that deploys on Infrly with no configuration.
// Infrly runs `npm start` and sets PORT. If you add a PostgreSQL database
// to the project and set DATABASE_URL, the home page shows the connection.
const express = require('express');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

async function databaseStatus() {
  if (!process.env.DATABASE_URL) {
    return 'No database yet. Add PostgreSQL to this project and set DATABASE_URL.';
  }
  const client = new Client({ connectionString: process.env.DATABASE_URL, connectionTimeoutMillis: 5000 });
  try {
    await client.connect();
    const { rows } = await client.query('select version()');
    return `Connected: ${rows[0].version.split(',')[0]}`;
  } catch (err) {
    return `Couldn't connect to the database: ${err.code || err.name}`;
  } finally {
    await client.end().catch(() => {});
  }
}

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.get('/', async (_req, res) => {
  res.send(`<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Express on Infrly</title>
<style>body{font:16px/1.6 system-ui,sans-serif;max-width:640px;margin:12vh auto;padding:0 20px;color:#1f1f1d}
code{background:#f1f0ec;padding:2px 6px;border-radius:4px}</style></head><body>
<h1>Your Express app is live 🎉</h1>
<p>Edit <code>server.js</code>, push to GitHub, and Infrly deploys the new version.</p>
<p><b>Database:</b> ${await databaseStatus()}</p>
<p>Health check: <a href="/health">/health</a></p>
</body></html>`);
});

app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}`));
