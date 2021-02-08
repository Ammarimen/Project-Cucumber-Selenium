$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - OrangeHRM",
  "description": "ETQ \"utilisateur\" je souhaite m\u0027authentifier",
  "id": "authentification---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 6110111300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3073846700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "authentification---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Je saisie le username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Je saisie le password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "je clique sur le bouton Login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Redirection vers le compte admin \"Welcome\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 23
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 148271000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisieLePassword(String)"
});
formatter.result({
  "duration": 81042400,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3212963600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 34
    }
  ],
  "location": "AuthentificationStepDefinition.redirectionVersLeCompteAdmin(String)"
});
formatter.result({
  "duration": 36886500,
  "status": "passed"
});
formatter.after({
  "duration": 641380200,
  "status": "passed"
});
});