@connexion
Feature: Authentification - OrangeHRM
  ETQ "utilisateur" je souhaite m'authentifier

  Background: 
    Given Je me connecte à l'application OrangeHRM

  @cnx
  Scenario: Authentification - OrangeHRM
    When Je saisie le username "Admin"
    And Je saisie le password "admin123"
    And je clique sur le bouton Login
    Then Redirection vers le compte admin "Welcome"
 