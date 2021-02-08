package com.orangeHRM.e2eTests.uploadFile.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.uploadFile.pages.UploadFilePage;
import com.orangeHRM.e2eTests.utils.CommonMethods;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class UploadFileStepDefinition {
	
	public WebDriver driver;
	private UploadFilePage uploadFilePage = new UploadFilePage();
	private CommonMethods commonMethods = new CommonMethods();
	public UploadFileStepDefinition() {
		driver = Setup.driver;
		PageFactory.initElements(driver, UploadFilePage.class);
	}

	@Given("^I connect to the url jQuery File Upload Demo$")
	public void iConnectToTheUrlJQueryFileUploadDemo() throws Throwable {
		commonMethods.openApplicationWithConfigFile("url-UF");
	}

	@When("^I click on the Add File button$")
	public void iClickOnTheAddFileButton() throws Throwable {
		uploadFilePage.clickButtonAddFile();
		commonMethods.uploadFileWithRobot(uploadFilePage.filePath);
		Thread.sleep(2000);
	}

}
