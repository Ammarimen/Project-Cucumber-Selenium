@background
Feature: Background - OrangeHRM
  ETQ utilisateur je souhaite verifier le fonctionnement du Background

  Background: 
    Given Je me connecte à l'application OrangeHRM
    When Je saisie le username "Admin"
    And Je saisie le password "admin123"
    And je clique sur le bouton Login

  @cnx
  Scenario: Authentification - OrangeHRM
    Then Redirection vers le compte admin "Welcome"

  @buzz
  Scenario: Cliquer sur le module BUZZ
    When Je clique sur le module BUZZ

  @rec
  Scenario: Cliquer sur le module Recruitment
    When Je clique sur le module Recruitment
