/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_labname": "Lab - Finding and correcting memory leaks",
		"%l_mission": "<strong>Mission: </strong>In this lab assignment, you will find and correct a memory leak in an application. This lab's steps are written for iOS development; notes and guidelines for Android are included at the end.",
		"%l_specification": "<strong>Specification: </strong>Memory leaks occur when your app allocates memory but doesn't release it. JavaScript garbage collects objects, meaning it removes them from memory, when no references to them remain in your application. Leaks occur when unintended or overlooked references to objects remain in scope. In this lab, you'll examine an app that has a memory leak deliberately included. You'll apply various fixed and check your work until you have eliminated the leak.",
		
		"%l_labstep1": "1. Download the AppLeak project from  <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/AppLeak.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/AppLeak.zip</a>.",
		"%l_labstepexplanation1": "",

		"%l_labstep2": "2. Extract the archive, then import it into Studio as an existing Titanium project.",
		"%l_labstepexplanation2": "",

		"%l_labstep3": "3. Build the project for the iPhone or iPad simulator.",
		"%l_labstepexplanation3": "",

		"%l_labstep4": "4. Open Instruments &mdash; depending on your version of Xcode and how you installed it, this tool will be located in various locations:<br/><ul><li>Applications/Xcode.app/Contents/Applications/Instruments</li><li>/Developer/Applications/Instruments</li><li><i>your home directory</i>/Developer/Applications/Library</li></ul>",
		"%l_labstepexplanation4": "",

		"%l_labstep5": "5. In Instruments, attach to your app's process:<br/><ol style='margin-left:20px;list-style-type:lower-alpha;'><li>In the Choose A Template window, choose Allocations</li><li>Click Choose Target, Attach to Process, then under System choose AppLeak</li><li>Click Record and wait a moment until data begins recording</li><li>In the Instrument Detail filter box, enter TiUI</li></ol>",
		"%l_labstepexplanation5": "",

		"%l_labstep6": "6. In the simulator, click the Test 1 button. In Instruments, the # Living column for TiUITableViewRowProxy should show 5 objects are in memory; these objects correspond to the rows in the table. Close the modal window, then click Test 1 again. This time, # Living should increase to 10. The original 5 rows were not released and 5 new rows are allocated in memory.",
		"%l_labstepexplanation6": "While the actual usage is small, if you were to repeatedly show this window enough times the app would exhaust its available memory and crash.",

		"%l_labstep7": "7. Close the simulator.",
		"%l_labstepexplanation7": "This will stop the data recording in Instruments.",

		"%l_labstep8": "8. In Studio, in test1.js, examine the code and speculate on the cause of the leak.",
		"%l_labstepexplanation8": "",

		"%l_labstep9": "9. Add this code after the existing app-level event listener:<br/><pre><code>test1win.addEventListener('close', function() {\n  Ti.App.removeEventListener('bad:idea', doSomething);\n});</code></pre>",
		"%l_labstepexplanation9": "",

		"%l_labstep10": "10. Build your app for the simulator again. Attach to your process and begin recording allocations again, as described above.",
		"%l_labstepexplanation10": "This time, you should see the numbers in the # Transitory column increase as you open and close the Test 1 window. These values represent objects that have been garbage collected. You might see # Living go up above the 5 active rows occasionally; this simply reflects Instruments reacting more slowly than you clicking through the app.",

		"%l_labstep11": "11. Close the simulator and Instruments; don't save the log results.",
		"%l_labstepexplanation11": "",


		"%l_androidnotesh2": "Android Notes",
		"%l_androidnotes": "Memory leaks are a problem for Android, even though we didn't include steps for that platform in this lab. You can use the DDMS tool, and its Allocation Tracker component to watch for such leaks. Steps for Android are provided at <a href='http://docs.appcelerator.com/titanium/2.1/index.html#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-MonitoringallocationsonAndroid'>http://docs.appcelerator.com/titanium/2.1/index.html#!/guide/Managing_Memory_and_Finding_Leaks-section-29004941_ManagingMemoryandFindingLeaks-MonitoringallocationsonAndroid</a>",

		"%l_summary": "Summary",
		"%l_summarypara": "The app-level listener added within build() remains in scope after the window is closed. This forces the objects the window contains to remain in scope, which means they cannot be garbage collected. When build() runs again, a new window and table are created, which also cannot be garbage collected. You've got a leak! By removing the event listener when the window closes, the rest of the objects can be marked as ready for garbage collection. Even though a new set of objects are created by build(), the old ones are gone from memory and this leak is fixed.",

		"%l_resources": "Resources",
		"%l_resources1": "Finished code: <a href='http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/AppLeak_finished.zip'>http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/AppLeak_finished.zip</a>",
		"%l_resources2": "Guides: <a href='http://docs.appcelerator.com/titanium/2.1/index.html#!/guide/Managing_Memory_and_Finding_Leaks'>http://docs.appcelerator.com/titanium/2.1/index.html#!/guide/Managing_Memory_and_Finding_Leaks</a>",

	}});
