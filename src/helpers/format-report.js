
const formatReport = (results) => {
    let report = '';
    results.testResults.forEach(result => {
        const describeTitle = result.testResults[0].ancestorTitles;
        if (describeTitle.length)
            report += `*${describeTitle}*\n`;
        report += `_${result.testFilePath}_\n`;
        result.testResults.forEach(testResult => {
            report += `${testResult.title} - ${testResult.status}\n`
        })
        report += `\n`;
    })
    return report;
}


module.exports = formatReport;