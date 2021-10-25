module.exports = {
    reporters:
        ['./src/slack-report.js',
            {
                slackWebhookEnvName: 'SLACK_WEBHOOK_URL',
                statuses: {passed: ':large_green_circle:', failed: ':red_circle:', skipped: ':large_yellow_circle:'},
                includeFilePath: true
            }]
}