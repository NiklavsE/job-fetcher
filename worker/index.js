var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github.js');

// fetch github jobs
new CronJob('* * * * *', fetchGithub, null, true, 'Europe/Riga');
