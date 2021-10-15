module.exports = {
    reporters: [['./src/slack-report.js', {slackWebhookEnvName: 'SLACK_WEBHOOK_URL'}]]
}