Feature: Login Functionality Of My demo app

  Scenario: Validate Login Functionality of my demo app
    Given I am on the login screen
    When I enter valid login credentails
    Then I should login successfully
