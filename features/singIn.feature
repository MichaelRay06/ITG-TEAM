
Feature: Testing Amazon lon in feature

  Background:
    Given I am on Amazon site


  @logInToAmazon
  Scenario: As a user I want to verify logging successfully into Amazone site.
    When I click Sign-in
    And enter valid user name as "michaelo.ray06@gmail.com"
    And I Continue
    And enter valid password as "54SonsofGod54"
    And I signed in
    Then I could verify as am successfully logged with user name as "Hello, Michael"

@searchProductDisplayed
  Scenario: As a user, I should be able to search for ice-works 5000 product
    When I search for "iceworks 5000"
    Then I enter value
    When the search results are displayed
    Then the search results has the "iceworks 5000" in it


  @totalPrize
  Scenario: Check basket total

    When I search for "iceworks 5000"
    Then I enter value
    When  iceworks 5000 was displayed click on
    Then i add iceworks 5000 to my basket
    When I check my basket total
    Then it should match the price of the item added into basket