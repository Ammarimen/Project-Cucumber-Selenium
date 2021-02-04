$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("background/Background.feature");
formatter.feature({
  "line": 2,
  "name": "Background - OrangeHRM",
  "description": "ETQ utilisateur je souhaite verifier le fonctionnement du Background",
  "id": "background---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@background"
    }
  ]
});
formatter.before({
  "duration": 6230219000,
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
formatter.step({
  "line": 7,
  "name": "Je saisie le username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je clique sur le bouton Login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3736093000,
  "status": "passed"
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
  "duration": 105440900,
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
  "duration": 71919500,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3287198600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "background---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Redirection vers le compte admin \"Welcome\"",
  "keyword": "Then "
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
  "duration": 49688900,
  "status": "passed"
});
formatter.after({
  "duration": 944391400,
  "status": "passed"
});
formatter.before({
  "duration": 5301368700,
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
formatter.step({
  "line": 7,
  "name": "Je saisie le username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je clique sur le bouton Login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3444917900,
  "status": "passed"
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
  "duration": 63509000,
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
  "duration": 79295500,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3157228200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Cliquer sur le module BUZZ",
  "description": "",
  "id": "background---orangehrm;cliquer-sur-le-module-buzz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@buzz"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Je clique sur le module BUZZ",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundStepDefinition.jeCliqueSurLeModuleBUZZ()"
});
formatter.result({
  "duration": 6982158300,
  "status": "passed"
});
formatter.after({
  "duration": 871861400,
  "status": "passed"
});
formatter.before({
  "duration": 5266253200,
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
formatter.step({
  "line": 7,
  "name": "Je saisie le username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie le password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je clique sur le bouton Login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3397935900,
  "status": "passed"
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
  "duration": 80466500,
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
  "duration": 74430700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3338532700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Cliquer sur le module Recruitment",
  "description": "",
  "id": "background---orangehrm;cliquer-sur-le-module-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@rec"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Je clique sur le module Recruitment",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundStepDefinition.jeCliqueSurLeModuleRecruitment()"
});
formatter.result({
  "duration": 1264446000,
  "status": "passed"
});
formatter.after({
  "duration": 855483600,
  "status": "passed"
});
});