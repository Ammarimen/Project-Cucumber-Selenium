package com.orangeHRM.e2eTests.uploadFile.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class UploadFilePage {
	
	public String filePath = "C:\\Users\\Imen BEN AMMAR\\Desktop\\FormationTestAuto\\pictures\\pic.png";
	
	/*Locators*/
	final static String ADDFILEBUTTON_CSS= ".btn.btn-success.fileinput-button";
	
	/*FindBy*/
	@FindBy(how = How.CSS, using = ADDFILEBUTTON_CSS)
	public static WebElement addFileButton;	
	
	/*Methods*/
	public void clickButtonAddFile() {
		addFileButton.click();
	}

}
