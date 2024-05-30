Feature: Login Functionality Of My demo app

  Scenario: Validate Login Functionality of my demo app
    Given I am on the login screen
    When I enter valid login credentails
    Then I should login successfully
  Scenario: Verify Error message When enter wrong emailID
    Given I am on the login screen
    When I enter invalid username and valid password
    Then I should get error message
