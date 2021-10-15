const sendReport = require('./helpers/send-report');
const formatReport = require('./helpers/format-report');

class SlackReport {
    constructor(globalConfig, options) {
        require('dotenv').config();
        this.globalConfig = globalConfig;
        this.options = options;
        if (options.slackWebhookEnvName)
            this.slackWebhookURL = process.env[options.slackWebhookEnvName];
        else
            this.slackWebhookURL = process.env.SLACK_WEBHOOK_URL;
    }

    onRunComplete(contexts, results) {
        console.log('Formatting the report.');
        const formattedReport = formatReport(results);
        console.log('Sending report to the Slack channel');
        sendReport(this.slackWebhookURL, formattedReport);
    }
}

module.exports = SlackReport;