const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
	const slack_name = req.query.slack_name
	const track = req.query.track;

	const date = new Date();
	const current_day = date.toLocaleString('en-us', { weekday: 'long' });
	const utc_time = date.toISOString();

	const github_file_url = 'https://github.com/EMEDAT/NPM_stage_1/blob/bb692c41352f1dc6bb032ecbcb9fecf0d9e947b7/myAPI/blob/main/index.js';
	const github_repo_url = 'https://github.com/EMEDAT/NPM_stage_1';
	
	res.json({
		slack_name: "Emediong David Titus",
		current_day: "Tuesday",
		utc_time: "2023-08-21T15;04:05Z",
		track:"Backend",
		github_file_url: "https://github.com/EMEDAT/NPM_stage_1/blob/bb692c41352f1dc6bb032ecbcb9fecf0d9e947b7/myAPI/blob/main/index.js",
		github_repo_url = "https://github.com/EMEDAT/NPM_stage_1",
		status_code: 200
	});
});

app.listen(port, () => {
	console.log('Server running at http://localhost:${port}');
});
