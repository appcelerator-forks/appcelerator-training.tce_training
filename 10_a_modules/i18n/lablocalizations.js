/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Installing and using a Titanium Module",
		"%l_mission": "<img src='https://wiki.appcelerator.org/download/attachments/14090407/Screenshot_44.png?version=1&modificationDate=1311723223000' style='height:300px;float:right;margin-top:-40px;margin-bottom: 10px;'><strong>Mission: </strong>Titanium modules extend the core Ti functionality. Modules are available from the Marketplace. Some are free, while others have price tags associated. Each adds a specific area of capability to your iOS or Android apps. In this lab, you will download and implement the PayPal module.",
		"%l_specification": "Specification: </strong>To successfully complete this lab, you must:",
		"%l_spec1": "Have a Titanium developer account in order to log into the Marketplace.",
		"%l_spec2": "Support subscribers may also log onto the support helpdesk and download the module from there.",
		
		"%l_labstep1": "1. Download the PayPal module from the Marketplace or Support site. ",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. In Studio, create a new project. Copy the module zip file you downloaded to the root of your project (same folder as tiapp.xml).",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. Copy the contents of /modules/platform/ti.paypal/<em>VERSION</em>/example/ to the Resources directory of your project (overwrite the default app.js in that directory).",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. In Studio, open the tiapp.xml file and using the controls on that page, add the PayPal module to the project. View the XML source after you've done that to see the module tag added to your tiapp.xml file.",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. Open Resources/simple.js and in the payment block, delete the paymentSubtype line. Then, set recipient equal to kwhinn_1305818279_biz@appcelerator.com",
		"%l_labstepexplanation5": "",

		"%l_labstep6": "6. Build and test your app in the simulator/emulator. Activate the Simple tab then click the PayPal button. When prompted for the sender's email address, use kwhinn_1305817727_per@appcelerator.com with 11111111 as the password (that's eight number 1s).",
		"%l_labstepexplanation6": "",

		"%l_labstep7": "7. When you're done, build the project for either the iOS Simulator or Android emulator. Correct any code mistakes, if necessary. Test your work by using the Simple tab's controls to complete a fake transaction. (The app is in Sandbox mode, so no money will be transferred.)",
		"%l_labstepexplanation7": "",

		"%l_summary": "Summary",
		"%l_summarypara": "In this lab, you ...",

		"%l_resources": "Resources",
		"%l_resources1": "Finished code: <a href='http://wiki.appcelerator.org/download/attachments/14090407/PayPalModule.zip'>http://wiki.appcelerator.org/download/attachments/14090407/PayPalModule.zip</a>",
		"%l_resources2": "",

	}});
