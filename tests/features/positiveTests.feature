Feature: Unix Timestamp Converter

    Background:
        Given I open page "Main Page"
        When I close Consent page

    Scenario: Convert timestamp to date
        When I convert Unix Timestamp with value "0"
        Then Date string has value "1970-01-01 1:0:00"

    Scenario: Convert date to timestamp
        When I convert Date with value "1990-05-10 15:30:00"
        Then Timestamp string has value "642346200"

    Scenario: Date to timestamp with invalid values
        When I convert Date with value "<values>"
        Then Timestamp string has value "NaN"

        Examples:
            | values |
            | abcde  |
            | &*#    |