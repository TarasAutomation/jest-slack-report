const axios = require('axios');

const sendReport = (url, report) => {
    axios
        .post(url, {
            text: report.title,
            attachments: [{text: report.tests, color: report.statusColor}]
        })
        .then(res => {
            console.log(`statusCode: ${res.status}`)
        })
        .catch(error => {
            console.error(error)
        })
}

module.exports = sendReport;