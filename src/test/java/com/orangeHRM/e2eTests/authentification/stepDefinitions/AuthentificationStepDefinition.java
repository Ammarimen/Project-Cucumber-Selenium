package com.orangeHRM.e2eTests.authentification.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.authentification.pages.AuthentificationPage;
import com.orangeHRM.e2eTests.utils.CommonMethods;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDefinition extends CommonMethods{
	
	public WebDriver driver;
	private AuthentificationPage authentificationPage = new AuthentificationPage() ;
	private CommonMethods commonMethods = new CommonMethods();
	
	public AuthentificationStepDefinition() {
		driver = Setup.driver;
	}

	@Given("^Je me connecte à l'application OrangeHRM$")
	public void jeMeConnecteÀLApplicationOrangeHRM() throws Throwable {
		logger.info("Je me connecte à l'application OrangeHRM");
		commonMethods.openApplicationWithConfigFile("url_test");
	}

	@When("^Je saisie le username \"([^\"]*)\"$")
	public void jeSaisieLeUsername(String name) throws Throwable {
		PageFactory.initElements(driver, AuthentificationPage.class);
		logger.info("Je saisie le username");
		authentificationPage.fillUserName(name);	
	}

	@When("^Je saisie le password \"([^\"]*)\"$")
	public void jeSaisieLePassword(String password) throws Throwable {	
		logger.info("Je saisie le password");
		authentificationPage.fillPassword(password);
	}

	@When("^je clique sur le bouton Login$")
	public void jeCliqueSurLeBoutonLogin() throws Throwable {
		logger.info("je clique sur le bouton Login");
		authentificationPage.clickButtonLogin();
	}

	@Then("^Redirection vers le compte admin \"([^\"]*)\"$")
	public void redirectionVersLeCompteAdmin(String message) throws Throwable {
		logger.info("Redirection vers le compte admin");
		String welcomeMessage = AuthentificationPage.messageWelcome.getText();
		Assert.assertTrue(welcomeMessage.contains(message));
	}

}
