import { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';

class CustomReporter implements Reporter {
    onBegin(config: FullConfig, suite: Suite) {
        console.log(`Starting the run with ${suite.allTests().length} tests`);
    }

    onTestBegin(test: TestCase, result: TestResult) {
        console.log(`>> Starting test: ${test.title}`);
    }

    onTestEnd(test: TestCase, result: TestResult) {
        const duration = result.duration;
        console.log(`<< Finished test ${test.title}: ${result.status} (${duration}ms)`);
    }

    onEnd(result: FullResult) {
        console.log(`Suite run finished with status: ${result.status}`);
    }
}

export default CustomReporter;
