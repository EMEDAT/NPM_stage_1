const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  const date = new Date();
  const currentDay = date.toLocaleString('en-us', { weekday: 'long' });
  const utcTime = date.toISOString();

  const githubFileUrl = 'https://github.com/username/repo/blob/main/file_name.ext';
  const githubRepoUrl = 'https://github.com/username/repo';

  const response = {
    slackName: 'Emediong David Titus',
    currentDay: 'Tuesday',
    utcTime: '2023-08-21T15;04:05Z',
    track: 'Backend',
    githubFileUrl: 'https://github.com/EMEDAT/NPM_stage_1/blob/bb692c41352f1dc6bb032ecbcb9fecf0d9e947b7/myAPI/blob/main/index.js',
    githubRepoUrl: 'https://github.com/EMEDAT/NPM_stage_1.git',
    status: 200
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
