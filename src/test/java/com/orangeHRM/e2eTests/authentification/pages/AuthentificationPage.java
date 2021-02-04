package com.orangeHRM.e2eTests.authentification.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class AuthentificationPage {

	/*Locators*/
	final static String USERNAME_ID = "txtUsername";
	final static String USERPASSEWORD_ID = "txtPassword";
	final static String BUTTON_lOGIN_ID = "btnLogin";
	final static String MESSAGE_WELCOME_ID = "welcome";

	/*FindBy*/
	@FindBy(how = How.ID, using = USERNAME_ID)
	public static WebElement userName;
	@FindBy(how = How.ID, using = USERPASSEWORD_ID)
	public static WebElement userPasseword;
	@FindBy(how = How.ID, using = BUTTON_lOGIN_ID)
	public static WebElement buttonLogin;
	@FindBy(how = How.ID, using = MESSAGE_WELCOME_ID)
	public static WebElement messageWelcome;

	/*Methods*/
	public void fillUserName(String name) {
		userName.sendKeys(name);
	}
	public void fillPassword(String password) {
		userPasseword.sendKeys(password);
	}

	public void clickButtonLogin() {
		buttonLogin.click();
	}

}
