@connexion
Feature: Authentification - OrangeHRM
  ETQ "utilisateur" je souhaite m'authentifier

  @cnx
  Scenario: Authentification - OrangeHRM
    Given Je me connecte à l'application OrangeHRM
    When Je saisie le username
    And Je saisie le password
    And je clique sur le bouton Login
    Then Redirection vers le compte admin
