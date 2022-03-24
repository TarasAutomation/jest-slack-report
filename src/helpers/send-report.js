const axios = require('axios');

const sendReport = async (url, report) => {
    const message = {
        text: report.title,
        attachments: [{text: report.tests, color: report.statusColor}]
    };

    await axios
        .post(url, message)
        .then(res => {
            console.log(`statusCode: ${res.status}`)
        })
        .catch(error => {
            console.error(error)
        })
}

module.exports = sendReport;