const axios = require('axios');

const sendReport = (url, report) => {
    axios
        .post(url, {
            text: report
        })
        .then(res => {
            console.log(`statusCode: ${res.status}`)
        })
        .catch(error => {
            console.error(error)
        })
}

module.exports = sendReport;