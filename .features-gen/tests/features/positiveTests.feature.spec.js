// Generated from: tests/features/positiveTests.feature
import { test } from "../../../tests/steps/bdd.setup.ts";

test.describe('Unix Timestamp Converter', () => {

  test('Convert timestamp to date', async ({ Given, When, Then, And, page }) => { 
    await Given('I open page "Main Page"', null, { page }); 
    await When('I close Consent page', null, { page }); 
    await And('I set Unix Timestamp as "0"', null, { page }); 
    await Then('Data string has value "1970-01-01 1:0:00"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/positiveTests.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I open page \"Main Page\"","stepMatchArguments":[{"group":{"start":12,"value":"\"Main Page\"","children":[{"start":13,"value":"Main Page","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I close Consent page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I set Unix Timestamp as \"0\"","stepMatchArguments":[{"group":{"start":24,"value":"\"0\"","children":[{"start":25,"value":"0","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Data string has value \"1970-01-01 1:0:00\"","stepMatchArguments":[{"group":{"start":22,"value":"\"1970-01-01 1:0:00\"","children":[{"start":23,"value":"1970-01-01 1:0:00","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end