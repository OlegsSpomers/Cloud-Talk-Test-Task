// Generated from: tests/features/positiveTests.feature
import { test } from "../../../tests/steps/bdd.setup.ts";

test.describe('Unix Timestamp Converter', () => {

  test.beforeEach('Background', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('I open page "Main Page"', null, { page }); 
    await When('I close Consent page', null, { page }); 
  });
  
  test('Convert timestamp to date', async ({ When, Then, page }) => { 
    await When('I convert Unix Timestamp with value "0"', null, { page }); 
    await Then('Date string has value "1970-01-01 1:0:00"', null, { page }); 
  });

  test('Convert date to timestamp', async ({ When, Then, page }) => { 
    await When('I convert Date with value "1990-05-10 15:30:00"', null, { page }); 
    await Then('Timestamp string has value "642346200"', null, { page }); 
  });

  test.describe('Date to timestamp with invalid values', () => {

    test('Example #1', async ({ When, Then, page }) => { 
      await When('I convert Date with value "abcde"', null, { page }); 
      await Then('Timestamp string has value "NaN"', null, { page }); 
    });

    test('Example #2', async ({ When, Then, page }) => { 
      await When('I convert Date with value "&*#"', null, { page }); 
      await Then('Timestamp string has value "NaN"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/positiveTests.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open page \"Main Page\"","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"Main Page\"","children":[{"start":13,"value":"Main Page","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I close Consent page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I convert Unix Timestamp with value \"0\"","stepMatchArguments":[{"group":{"start":36,"value":"\"0\"","children":[{"start":37,"value":"0","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Date string has value \"1970-01-01 1:0:00\"","stepMatchArguments":[{"group":{"start":22,"value":"\"1970-01-01 1:0:00\"","children":[{"start":23,"value":"1970-01-01 1:0:00","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open page \"Main Page\"","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"Main Page\"","children":[{"start":13,"value":"Main Page","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I close Consent page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I convert Date with value \"1990-05-10 15:30:00\"","stepMatchArguments":[{"group":{"start":26,"value":"\"1990-05-10 15:30:00\"","children":[{"start":27,"value":"1990-05-10 15:30:00","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Timestamp string has value \"642346200\"","stepMatchArguments":[{"group":{"start":27,"value":"\"642346200\"","children":[{"start":28,"value":"642346200","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open page \"Main Page\"","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"Main Page\"","children":[{"start":13,"value":"Main Page","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I close Consent page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I convert Date with value \"abcde\"","stepMatchArguments":[{"group":{"start":26,"value":"\"abcde\"","children":[{"start":27,"value":"abcde","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Timestamp string has value \"NaN\"","stepMatchArguments":[{"group":{"start":27,"value":"\"NaN\"","children":[{"start":28,"value":"NaN","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open page \"Main Page\"","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"Main Page\"","children":[{"start":13,"value":"Main Page","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I close Consent page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I convert Date with value \"&*#\"","stepMatchArguments":[{"group":{"start":26,"value":"\"&*#\"","children":[{"start":27,"value":"&*#","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Timestamp string has value \"NaN\"","stepMatchArguments":[{"group":{"start":27,"value":"\"NaN\"","children":[{"start":28,"value":"NaN","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end