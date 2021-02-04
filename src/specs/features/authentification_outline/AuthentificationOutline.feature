@outline
Feature: Authentification Outline - OrangeHRM
  ETQ utilisateur je souhaite m'authentifier avec scenario outline

  Background: 
    Given Je me connecte à l'application OrangeHRM

  @cnx-outline
  Scenario Outline: Authentification Outline - OrangeHRM
    When je saisie le username "<name>"
    And je saisie le password "<passeword>"
    And je clique sur le bouton Login

    Examples: 
      | name    | passeword  |
      | Admin   | admin      |
      | Safe    | safe123    |
      | Imen    | imen123    |
      | Sondes  | sondes123  |
      | Hanene  | hanene123  |
      | Zakaria | zakaria123 |
