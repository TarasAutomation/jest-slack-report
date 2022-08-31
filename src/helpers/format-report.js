const formatReport = (results, options) => {
    let testResults = '';
    results.testResults.forEach(result => {
        if (!result.testResults.every(t => (t.status === "passed" && options.hidePassed) || (t.status === "pending" && options.hideSkipped))) {
        const describeTitle = result.testResults[0].ancestorTitles;
            if (describeTitle.length)
                testResults += `*${describeTitle}*\n`;
            if (options.includeFilePath)
                testResults += `_${result.testFilePath}_\n`;
            result.testResults.forEach(testResult => {
                const {status} = testResult;
                console.log(status)
                if (!((status === "passed" && options.hidePassed) || (status === "pending" && options.hideSkipped))) {
                    testResults += `${testResult.title} - ${options.statuses ? getStatusIcon(status, options) : status}\n`
                }
            })
            testResults += `\n`;
        }
    })

    const status = results.numTotalTests - results.numPendingTests === results.numPassedTests
        ? 'Success'
        : results.numTotalTests === results.numFailedTests
            ? 'Failure'
            : 'Unstable'

    const statusColor = status === 'Success'
        ? '#00FF00'
        : status === 'Failure'
            ? '#FF0000'
            : '#FFEA00'

    let title = `Test run finished. Status: ${status}\n`;
    title += `Passed: ${results.numPassedTests}, Failed: ${results.numFailedTests}, Skipped: ${results.numPendingTests}\n`
    if (results.numFailedTests === 0) {
    title += `:large_green_circle:  All tests passed  :large_green_circle:`
    }
    else{
    title += `Individual test results:`
}
    return {title: title, tests: testResults, statusColor: statusColor};
}

const getStatusIcon = (status, options) => {
    const {passed, failed, skipped} = options.statuses;
    switch (status) {
        case 'passed':
            return passed;
        case 'failed':
            return failed;
        case 'pending':
            return skipped;
    }
}


module.exports = formatReport;
