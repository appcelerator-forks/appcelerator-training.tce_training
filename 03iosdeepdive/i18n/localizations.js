/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "iOS Deep Dive",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "iOS Deep Dive",
		"%l_slidenote_titleslide": "<b>Module time: 90 mins</b><br/>(60 mins teaching, 30 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "iOS Platform Characteristics",
		"%l_agenda2": "iOS-specific API Overview",
		"%l_agenda3": "Key APIs",
		"%l_agenda4": "Deep Dive: iOS Properties",
		"%l_agenda5": "Examples in Action",
		"%l_agenda6": "Lab Exercise Overview",
		"%l_slidenote_agenda": "We will give an overview on the platform characteristics, including basic UI structure.  Then we'll focus on iOS-specific APIs, starting with a high level view of what the key areas are in Titanium.Let the deep dive begin..",
		
		"%l_platform_chars": "Platform Characteristics",
		"%l_what_we": "What we are talking about is <b>Cocoa Touch</b>, which provides the key frameworks for developing applications on devices running iOS",
		"%l_platform_chars_image": "<img src='images/ios-platform.png' style='margin-top:5px;height:375px;'/>",
		"%l_slidenote_platform_chars": "Cocoa Touch provides the key frameworks for developing applications on devices running iOS. Some of these key frameworks are:<br> Foundation Kit Framework<br> UIKit Framework (based on Application Kit)<br>- Game Kit Framework<br>- iAd Framework<br> Map Kit Framework<br>This may be helpful for developers to understand.",

		"%l_platform_chars_2_image": "<img src='images/ios-platform-2.png' style='margin-top:5px;height:500px;'/>",
		"%l_slidenote_platform_chars_2": "These are taken from Apple's HIG (Human Interface Guidelines)<br>- Single Window = there's a single UIKit / iOS window object regardless of the number of Titanium windows you create.",
		
		"%l_ios_ui": "iOS User Interface Basics",
		"%l_ios_ui_image": "<img src='images/ios-ui.png' style='margin-top:5px;height:500px;'/>",
		"%l_slidenote_ios_ui": "A tab bar gives people the ability to switch between different subtasks, views, or modes.<br>Use a tab bar to give users access to different perspectives on the same set of data or different subtasks related to the overall function of your app.",
		
		"%l_ios_api": "iOS-Specific API Overview",
		"%l_ios_api_image": "<img src='images/ios-api.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ios_api": "iOS-specific APIs can be broken out into 2 segments: form and function",
		
		"%l_key_api": "Key User Interface APIs",
		"%l_keyapi1": "Ti.UI.iPhone.NavigationGroup",
		"%l_keyapi2": "Ti.UI.iOS.Toolbar",
		"%l_keyapi3": "Ti.UI.iOS.TabbedBar",
		"%l_keyapi4": "Ti.UI.iOS.CoverFlowView",
		"%l_keyapi5": "Ti.UI.DashboardView (not in iOS namespace)",
		"%l_keyapi6": "Ti.UI.iOS.AdView",
		"%l_slidenote_key_apiV2": "NavigationGroup is also supported on MobileWeb, but there's a Ti.UI.MobileWeb.NavigationGroup object for that.<br><br/>As of SK1.8, Toolbar, TabbedBar, and CoverFlowView were moved to iOS namespace<br><br/>DashboardView not there yet, but will probably be moved soon.",
	
		"%l_ios_nav": "UI: Navigation Group",
		"%l_ios_nav_image": "<img src='images/ios-nav.png' style='margin-top:5px;height:350px;'/>",
		"%l_ios_nav_explanation": "A Navigation Group implements a specialized view that manages the navigation of hierarchical content",
		"%l_slidenote_ios_nav": "A Navigation Group implements a specialized view that manages the navigation of hierarchical content. A Navigation Group is very similar to Tab Bars with the exception that they do not maintain a group of windows with a interface bar at the bottom",
		
		"%l_ios_nav_image_2": "<img src='images/nav-group.png' style='margin-top:5px;height:550px;background-color:#fff;'/>",
		"%l_slidenote_ios_nav_2": "A navigation bar enables navigation through an information hierarchy and, optionally, management of screen contents.",
		
		"%l_ios_nav_eg": "UI: Navigation Group - Example",
		"%l_navgroup_code1": "\n// need a window for inside our nav group\nvar innerWin = Ti.UI.createWindow({\n   backgroundColor: '#fff',\n   title: 'Dashboard',\n   barColor: #f5c115;\n});\n// create the nav group\nvar nav = Ti.UI.iPhone.createNavigationGroup({\n   window: innerWin\n});\n\n// add the nav group to app's main window\nvar outerWin = Ti.UI.createWindow();\nouterWin.add(nav);\nouterWin.open();\n ",
		"%l_os_nav_eg_image": "<img src='images/nav_dashboard.png' style='margin-top:5px;width:240px;'/>",
		"%l_slidenote_ios_nav_eg": "nav.window property defines the 'home' window of the NavGroup<br><br>The NavGroup itself then needs to be added to a window",
		
		"%l_ios_nav_eg_2": "UI: Navigation Group - Adding a Window",
		"%l_navgroup_code2": "\n// add windows to the nav group\nvar win2 = Ti.UI.createWindow({\n   backgroundColor: '#fff',\n   title: 'Details',\n   barColor: #f5c115;\n});\nnav.open(win2);\n ",
		"%l_os_nav_eg_2_image": "<img src='images/nav_dashboard2.png' style='margin-top:5px;height:450px;backgroundColor:#fff;'/>",
		"%l_slidenote_ios_nav_eg_2": "To add another window to the stack, create it and then call open",
		
		"%l_ios_nav_bar": "UI: Navigation Bar - Example",
		"%l_navbar_code": "\n// create buttons to go in the nav bar\nvar back = Ti.UI.createButton({ title: 'Back' });\nvar next = Ti.UI.createButton({ title: 'Next' });\n\n// implement the buttons\nwin.setLeftNavButton(back);\nwin.setRightNavButton(next);\n\n// add a logo to the nav bar\nvar logo = Ti.UI.createImageView({ image: 'logo.png' });\nwin.setTitleImage(logo);\n ",
		"%l_os_nav_bar_image": "<img src='images/nav-bar.png' style='margin-top:5px;height:91px;'/>",
		"%l_slidenote_ios_nav_bar": "There are other components that you can set, such as <br>setTItleControl()<br>setTitleImage()<br>setTitle()",
		
		"%l_ui_toolbar": "UI: Toolbars",
		"%l_toolbar1": "Buttons perform actions related to current context",
		"%l_toolbar2": "Create button objects first, store in an array",
		"%l_toolbar3": "Pass the array to the Toolbar object",
		"%l_toolbar4": "Aim for 44 x 44 point hit area for buttons",
		"%l__ui_toolbar_image": "<img src='images/ui-toolbar.png' style='margin-top:5px;height:240px;'/>",
		"%l_slidenote_ui_toolbar": "On iPhone, a toolbar appear at the bottom edge of a screen or view, but on iPad it can instead appear at the top edge. Can also appear atop a keyboard.<br>Toolbar items are displayed equally spaced across the width of the toolbar. The precise set of toolbar items can change from view to view, because the items are always specific to the context of the current view.<br>On iPhone, changing the device orientation from portrait to landscape can change the height of the toolbar automatically. On iPad, the height and translucency of a toolbar does not change with rotation.",
		
		"%l_toolbar_cod": "\n// create buttons to go in the tool bar\nvar camera = Ti.UI.createButton();\nvar flexSpace = Ti.UI.createButton({\n   style:Ti.UI.iPhone.SystemButtonStyle.FLEXIBLE_SPACE\n});\n// other buttons would be defined here\n\n// implement the toolbar\nwin.toolbar = [camera, flexSpace, tf, flexSpace, send];\n ",
		"%l__ui_toolbar_2_image": "<img src='images/ui-toolbar-2.png' style='margin-top:5px;height:240px;'/>",
		"%l_slidenote_ui_toolbar_2": "\n<br>Buttons are stored as an array of objects (NSArray)<br>win.toolbar property &mdash; setting that docks the toolbar to the bottom of the window<br>Otherwise you could position it anywhere (if you do win.add(toolbar))",
		
		"%l_ui_keyboardtoolbar": "UI: Keyboard Toolbars",
		"%l_keyboardtoolbar_code": "\n// create buttons to go in the tool bar\nvar camera = Ti.UI.createButton();\n...\n\n// create the TextField or TextArea\nvar textview = Ti.UI.createTextArea({\n   keyboardToolbar = [camera, flexSpace, tf, flexSpace, send],\n   keyboardToolbarColor: '#999',\n   keyboardToolbarHeight: 40\n});\n ",
		"%l_ui_toolbar_3_image": "<img src='images/ui-toolbar-3.png' style='margin-top:5px;height:240px;'/>",
		"%l_slidenote_ui_toolbar_3": "Works with text fields and text areas",
		
		"%l_ui_buttonbar": "UI: Button Bar",
		"%l_buttonbartext": "Related controls that don't maintain state",
		"%l_ui_buttonbar_image": "<img src='images/buttonbar.png' style='margin-top:5px;width:400px;'/>",
		"%l_buttonbar_code": "\nvar bb = Ti.UI.createButtonBar({\n   labels: ['One', 'Two', 'Three', 'Four', 'Five'],\n   backgroundColor: 'maroon',\n   /* style is optional */\n   style: Ti.UI.iPhone.SystemButtonStyle.BAR\n});\nwin.add(bb);\n ",
		"%l_slidenote_ui_buttonbar": "<ul><li>Not like a radio button set &mdash; buttons don't maintain state and pressing one doesn't affect the others</li><li>Don't create separate buttons; supply an array of labels</li><li>Event listener on whole bar, where <code>index</code> property tells you which button was actually clicked</li><li>SystemButtonStyle is used to set more compact layout and is not required to make a button bar</li></ul>",
		
		"%l_ui_tabbar": "UI: Tabbed Bar",
		"%l_tabbedbar_text": "Like radio buttons, maintain state",
		"%l_tabbedbar_code": "\nvar tb = Ti.UI.iOS.createTabbedBar({\n   labels: ['IMAP', 'POP', 'Exchange']\n});\nwin.add(tb);\n ",

		"%l_ui_tabbar_image": "<img src='images/tabbedbars.png' style='margin-top:5px;width:300px;'/>",
		"%l_slidenote_ui_tabbar": "<ul><li>Also known as 'segmented controls'</li><li>Maintains state &mdash; like radio buttons</li><li>Used for closely related, but mutually exclusive choices.</li><li>All segments in a segmented control have equal width</li><li>Segments can contain text or images, but not both</li></ul>",
		
		"%l_ui_switch": "UI: Switch",
		"%l_switch1": "Presents two mutually exclusive choices", 
		"%l_switch2": "On iOS, can't change labels", 
		"%l_switch3": "Android &amp; Mobile Web offer more flexible options", 
		"%l_ui_switch_image": "<img src='images/switches.png' style='margin-top:5px;width:200px;'/>",
		"%l_switch_code": "\nvar switch = Ti.UI.createSwitch({\n   value: true\n});\nwin.add(switch);\n ",

		"%l_slidenote_ui_switch": "<ul><li>Not iOS specific</li><li>Can't change 'On' and 'Off' labels on iOS</li><li>On Android &amp; Mobile Web you can use a checkbox style and change the labels</li><li>Add <code>change</code> event listener to switch and check <code>value</code> property to determine state</li></ul>",
		
		"%l_ui_slider": "UI: Slider",
		"%l_ui_slider_image": "<img src='images/ui-slider.png' style='margin-top:5px;width:400px;'/>",
		"%l_slider_code": "\nvar slider = Ti.UI.createSlider({\n   min: 0,\n   max: 10,\n   value: 3,\n   thumbImage: 'images/skull.png'\n});\nwin.add(slider);\n ",
		"%l_slidenote_ui_slider": "A slider consists of a track and a thumb (a circular control that the user can slide) and optional images that convey the meaning of the right and left values. When people drag the thumb along the slider, the value or process is updated continuously and is displayed in the track.",
		
		"%l_ui_ipad": "UI: iPad-Specific APIs",
		"%l_ipadAPIs1": "Ti.UI.iPad.Popover",
		"%l_ipadAPIs2": "Ti.UI.iPad.SplitWindow",
		"%l_slidenote_ui_ipad": "There are two custom views related to iPad development.  We'll explore these two in detail",
		
		"%l_key_api_ti": "Key APIs - Titanium.UI.iPad.Popover",
		"%l_popover1": "Transient view revealed by tap on a control",
		"%l_popover2": "Hovers over app content",
		"%l_key_api_ti_image": "<img src='images/popover.png' style='margin-top:5px;width:300px;'/>",
		"%l_slidenote_key_api_ti": "<ul><li>Like a dialog box</li><li>Always has an arrow pointing to the control that opened it</li><li>Contains a Ti.UI.View</li></ul>",
		
		"%l_ti_splitwindow": "Key APIs - Titanium.UI.iPad.SplitWindow",
		"%l_splitwindow1": "Full-screen, two-pane view",
		"%l_splitwindow2": "Left pane fixed at 320 points",
		"%l_splitwindow3": "User cannot resize panes",
		"%l_ti_splitwindow_image": "<img src='images/splitwindow.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ti_splitwindow": "Left pane called 'master' and right pane 'detail'<br/><br/>Both panes can contain a wide variety of objects and views, such as:<br><br>Table, image, map, text, web, or custom views.<br>Navigation bars, toolbars, or tab bars...",
		

		"%l_splitwindow_code": "\n// These will be the contents of the splitwindow\nvar masterPane = Ti.UI.createView();\nvar detailPane = Ti.UI.createView();\n\n// create the splitwindow\nvar splitwin = Ti.UI.iPad.createSplitWindow({\n   masterView: masterPane,\n   detailView: detailPane\n});\n\n// you don't add the splitwin to a win object\n// it is the top-level 'window' object\nsplitwin.open();\n ",

		"%l_slidenote_ti_splitwindow_2": "<ul><li>Contains two views: master and detail</li><li>These define a hierarchy: info selected in left (master) pane typically controls what is shown in the right (detail) pane</li><li>You have to code that relationship and associated actions</li><li>In general, indicate the current selection in the left pane in a persistent way.</li></ul>",
		
		"%l_ui_tabbadge": "UI: Tab Badge",
		"%l_tabbadge1": "Communicates status to the user, their attention is needed in part of your app",
		"%l_ui_tabbadge_image": "<img src='images/tabbadge.png' style='margin-top:5px;width:400px;'/>",
		"%l_tabbadge_code": "\nvar tab = Ti.UI.currentTab;\ntab.badge = 10; // set the badge\ntab.badge = null; // to remove it\n ",
		"%l_slidenote_ui_tabbadge": "tab.badge has to be set to a number<br>Set to NULL to remove",
		
		"%l_ui_appbadge": "UI: App Badge",
		"%l_ui_appbadge_image": "<img src='images/appbadge.png' style='margin-top:5px;height:450px;'/>",
		"%l_appbadge_code": "\nTi.UI.iPhone.appBadge = 14;\nTi.UI.iPhone.appBadge = null;\n ",
		"%l_slidenote_ui_appbadge": "Can be set while the app is running<br>Or, use a background service to set when the app's not running",
		
		"%l_ui_cover": "UI: CoverFlow View",
		"%l_coverflow_code": "\nvar cover = Ti.UI.iOS.createCoverFlowView({\n   images: ['a.png', 'b.png', 'c.png'],\n   backgroundColor: '#000'\n});\nwin.add(cover);\n ",
		"%l_ui_cover_image": "<img src='images/coverflow.png' style='margin-top:5px;height:300px;'/>",
		"%l_slidenote_ui_cover": "Cover art or gallery style, animated 3D UI component to display a series of images.<br/><br/>If an image is tapped, you can grab an index so you can branch code accordingly",
		
		"%l_ui_dashboard": "UI: Dashboard View",
		"%l_dash1": "Springboard-like view", 
		"%l_dash2": "Use as app home screen", 
		"%l_dash3": "User can rearrange or remove icons (if you enable it)", 
		"%l_dash4": "Scrolling container", 
		"%l_ui_dashboard_image": "<img src='images/dashboard.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ui_dashboard": "This isn't setting or accessing the actual Springboard<br>Just presenting a similar view",
		
		"%l_dashboard_code": "\n// create the button items to go in the dashboard\nvar item = Ti.UI.createDashboardItem({\n   image: 'images/item1.png',\n   label: 'Home'\n});\n\n// create the dashboard\nvar dashboard = Ti.UI.createDashboardView({\n   data: [item],\n   wobble: true /* wobble while in edit mode */\n});\nwin.add(dashboard);\n\nvar isEditable = false;\nitem.addEventListener('longpress', function() {\n  (isEditable) ? dashboard.stopEditing() : dashboard.startEditing();\n});\ndashboard.addEventListener('edit', function() {\n   // in edit mode, handle accordingly\n});\n ",
		"%l_slidenote_ui_dashboard_2": "",
		
		"%l_ui_adview": "UI: AdView",
		"%l_ui_adview_image": "<img src='images/adview2.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ui_adview": "For more information on the iAd Network, see http://developer.apple.com/iad/<br>While you are developing your application, iAd Network sends test advertisements to your application. To assist you in validating your implementation, the iAd Network occasionally returns errors to test your error handling code. You can also test your error handling support manually by turning your device's wireless capability off.<br>iAd Network automatically displays the correct ad depending on the how your application binary was downloaded onto your test device",
		

		"%l_adview_code": "\nvar iad = Ti.UI.iOS.createAdView({\n   width: 'auto',\n   height: 'auto',\n   bottom: -100\n});\niad.addEventListener('load', function(){\n   iad.animate({\n      bottom: 0,\n      duration: 500\n   });\n\n});\niad.addEventListener('action', function(){\n   mygame.pause(); // do something when ad is clicked\n\n});\nwin.add(iad);\n ",
		"%l_slidenote_ui_adview_3": "Best to not show ad if nothing is loaded. Set to be off-screen and then move into view when an ad is loaded. Could also show at the top or elsewhere, doesn't have to be on the bottom. <br/><br/>You can tell when a user clicks on an ad, but can't tell what the ad is. Basically this is to pause action that shouldn't run while the ad is showing.",
		
		"%l_key_api_pl": "Platform Functionality APIs",
		"%l_funcapi1": "Ti.App.iOS",
		"%l_funcapi2": "Ti.Contacts",
		"%l_funcapi3": "Ti.Media",
		"%l_funcapi4": "Ti.Network",
		"%l_slidenote_key_api_pl": "Platform specific business logic methods are available for iOS",
		
		"%l_background": "Background Services",
		"%l_background1": "Extend runtime for limited duration",
		"%l_background1": "Long-running geolocation or music playback",
		"%l_background_code": "\nvar svc = Ti.App.iOS.registerBackgroundService({\n   url: 'bg.js'\n});\n ",
		"%l_background_tiappxml": "\n&lt;ios>\n&lt;plist>\n&lt;dict>\n  &lt;key>UIBackgroundModes&lt;/key>\n  &lt;array>\n    &lt;string>audio&lt;/string>\n    &lt;string>location&lt;/string>\n    &lt;string>voip&lt;/string>\n    &lt;string>newsstand-content&lt;/string>\n    &lt;string>external-accessory&lt;/string>\n    &lt;string>bluetooth-central&lt;/string>\n  &lt;/array>\n&lt;/dict>\n&lt;/plist>\n&lt;/ios>\n ",
		"%l_slidenote_key_api_appv2": "This JS will run when the app is paused (home button clicked).<br><br/>Services typically run for 10 mins or until iOS shuts them down.<br/><br/>Useful to finish a download, cache data, etc.<br/><br/>For a BackgroundService to run for more than a limited period of time, the application must declare one or more of these background modes.",


		"%l_localnotification": "Local Notifications",
		"%l_localnotification1": "Runs on device, not push",
		"%l_localnotification2": "Scheduled action",
		"%l_localnotification3": "Background service alert the user",

		"%l_notification_code": "\n// schedule the notification\nTitanium.App.iOS.scheduleLocalNotification({\n   alertBody:'View Alarm',\n   alertAction:'You set an alarm',\n   userInfo:{data: 'Data to pass'},\n   date:new Date(new Date().getTime() + 3000)\n});\n// listen for the notification\nTi.App.iOS.addEventListener('notification', \n   function(e) {\n      Ti.API.info('Local notification received: '\n         + e.data);\n});\n ", 
		"%l_slidenote_localnotification": "Local notifications let you schedule user interaction. A background service could alert the user when it's done. You might set an alarm at a specific datetime or interval.",
		
		"%l_key_api_con": "Key APIs - Contacts, Media, Network",
		"%l_cmn1": "Contacts",
		"%l_cmn2": "Ti.Contacts.Group",
		"%l_cmn3": "Ti.Contacts.Person",
		"%l_cmn4": "Media",
		"%l_cmn5": "Ti.Media.AudioRecorder",
		"%l_cmn6": "Ti.Media.Item",
		"%l_cmn7": "Ti.Media.MusicPlayer",
		"%l_cmn8": "Network",
		"%l_cmn9": "Ti.Network.BonjourBrowser",
		"%l_cmn10": "Ti.Network.BonjourService",
		"%l_slidenote_key_api_con": "Your app can participate in the Apple Bonjour (self-configuring, discoverable) networking environment for printing and other services.",
		
		"%l_deep_ios": "Deep Dive: iOS-Specific Properties",
		"%l_deep_ios_image": "<img src='images/deep-ios.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios": "Do a quick walk through of the various iPhone related properties.  It's good to point out that these variables exist",
		
		"%l_deep_ios_2_image": "<img src='images/deep-ios-2.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_2": "",
		
		"%l_deep_ios_3_image": "<img src='images/deep-ios-3.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_3": "",
		
		"%l_deep_ios_4_image": "<img src='images/deep-ios-4.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_4": "",
		
		"%l_deep_ios_5_image": "<img src='images/deep-ios-5.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_5": "",
		
		"%l_deep_ios_6_image": "<img src='images/deep-ios-6.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_6": "",
		
		"%l_deep_ios_7_image": "<img src='images/deep-ios-7.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_7": "",
		
		"%l_deep_ios_56_image": "<img src='images/ios_systembutton.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_56": "",
		
		"%l_deep_ios_8_image": "<img src='images/deep-ios-8.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_8": "",
		
		"%l_deep_ios_9_image": "<img src='images/deep-ios-9.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_9": "",
		
		"%l_deep_ios_10_image": "<img src='images/deep-ios-10.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_10": "",
		
		"%l_deep_ios_11_image": "<img src='images/deep-ios-11.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_11": "",
		
		"%l_deep_ios_12_image": "<img src='images/deep-ios-12.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_12": "",
		
		"%l_deep_ios_13_image": "<img src='images/deep-ios-13.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_13": "",
		
		"%l_impl_app": "Implementing Application Preferences",
		"%l_impl_app_image": "<img src='images/impl-app.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_impl_app": "'The Settings Bundle'<br/><br/>Apple's guidelines say all app preferences and settings should be done through the Settings app. In practice, most apps provide at least some options and settings within the app itself. A common mix is to see 'power user' settings in the Settings app and user settings within the app.",
		

		"%l_settings": "Creating the Settings Bundle", 
		"%l_settings1": "Copy KitchenSink/platform/iphone to your project",
		"%l_settings2": "In Finder, right-click Settings.bundle and choose <strong>Show Package Contents</strong>",
		"%l_settings3": "Open Root.plist",
		"%l_settings4": "Edit as necessary, then save",
		"%l_settings5": "Do clean-build of your project",
		"%l_slidenote_settings": "This is easiest way; you could also create the XML file directly<br/><br/>Settings bundle needs to be in project/platform (which doesn't exist by default)<br><br/>(Used to go in project/modules prior to 1.8)<br><br>See tutorial at http://iphoneincubator.com/blog/tutorial/how-to-create-an-iphone-preferences-file",
				
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_add_settings": "Add settings to an iOS application",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/360+-+iOS+API+Deep+Dive'>wiki.appcelerator.org/display/td/360+-+iOS+API+Deep+Dive</a>",
		"%l_slidenote_lab_goals": "In this lab, you will create a Settings bundle so that application settings can be changed via the Settings app in the simulator or on a phone. You will then use that setting within the app to control the app's user interface",
		
	},
	"ES": {
		"%l_filetitle": "Vista a fondo del iOS",
		"%l_subtitle": "Titanium Mobile avanzado para desarrollo",
		"%l_lessontitle": "Vista a fondo del iOS",
		"%l_slidenote_titleslide": "<b>Module time: 90 mins</b><br/>(60 mins teaching, 30 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Caracteristicas de la plataforma iOS",
		"%l_agenda2": "API especifico de iOS información general",
		"%l_agenda3": "Claves APIs",
		"%l_agenda4": "iOS Propiedades: vista a fondo",
		"%l_agenda5": "Ejemplos en Acción",
		"%l_agenda6": "Información general sobre el laboratorio",
		"%l_slidenote_agenda": "We will give an overview on the platform characteristics, including basic UI structure.  Then we'll focus on iOS-specific APIs, starting with a high level view of what the key areas are in Titanium.Let the deep dive begin..",
		
		"%l_platform_chars": "Características de la plataforma",
		"%l_what_we": "Lo que estamos hablando es de <b> Cocoa Touch </ b>, que proporciona los marcos clave para el desarrollo de aplicaciones en dispositivos que ejecutan iOS",
		"%l_platform_chars_image": "<img src='images/ios-platform.png' style='margin-top:5px;height:375px;'/>",
		"%l_slidenote_platform_chars": "Cocoa Touch provides the key frameworks for developing applications on devices running iOS. Some of these key frameworks are:<br> Foundation Kit Framework<br> UIKit Framework (based on Application Kit)<br>- Game Kit Framework<br>- iAd Framework<br> Map Kit Framework<br>This may be helpful for developers to understand.",

		"%l_platform_chars_2_image": "<img src='images/ios-platform-2.png' style='margin-top:5px;height:500px;'/>",
		"%l_slidenote_platform_chars_2": "These are taken from Apple's HIG (Human Interface Guidelines)<br>- Single Window = there's a single UIKit / iOS window object regardless of the number of Titanium windows you create.",
		
		"%l_ios_ui": "Fundamentos de la interfaz de usuario de iOS",
		"%l_ios_ui_image": "<img src='images/ios-ui.png' style='margin-top:5px;height:500px;'/>",
		"%l_slidenote_ios_ui": "A tab bar gives people the ability to switch between different subtasks, views, or modes.<br>Use a tab bar to give users access to different perspectives on the same set of data or different subtasks related to the overall function of your app.",
		
		"%l_ios_api": "Información general del APIs para IOS",
		"%l_ios_api_image": "<img src='images/ios-api.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ios_api": "iOS-specific APIs can be broken out into 2 segments: form and function",
		
		"%l_key_api": "Claves para las interfaces de usuario del APIs",
		"%l_keyapi1": "Ti.UI.iPhone.NavigationGroup",
		"%l_keyapi2": "Ti.UI.iOS.Toolbar",
		"%l_keyapi3": "Ti.UI.iOS.TabbedBar",
		"%l_keyapi4": "Ti.UI.iOS.CoverFlowView",
		"%l_keyapi5": "Ti.UI.DashboardView (not in iOS namespace)",
		"%l_keyapi6": "Ti.UI.iOS.AdView",
		"%l_slidenote_key_api": "NavigationGroup actually works on iPad and our API should probably be moved out of the iPhone namespace to the iOS namespace<br><br/>As of SK1.8, Toolbar, TabbedBar, and CoverFlowView were moved to iOS namespace<br><br/>DashboardView not there yet, but will probably be moved soon.",
	
		"%l_ios_nav": "UI: Navigation Group (Grupo de Navegación)",
		"%l_ios_nav_image": "<img src='images/ios-nav.png' style='margin-top:5px;height:350px;'/>",
		"%l_ios_nav_explanation": "Un grupo de navegación implementa un punto de vista especializado que gestiona la navegación de contenido jerárquico",
		"%l_slidenote_ios_nav": "A Navigation Group implements a specialized view that manages the navigation of hierarchical content. A Navigation Group is very similar to Tab Bars with the exception that they do not maintain a group of windows with a interface bar at the bottom",
		
		"%l_ios_nav_image_2": "<img src='images/nav-group.png' style='margin-top:5px;height:550px;background-color:#fff;'/>",
		"%l_slidenote_ios_nav_2": "A navigation bar enables navigation through an information hierarchy and, optionally, management of screen contents.",
		
		"%l_ios_nav_eg": "UI: Navigation Group (Grupo de Navegación) - ejemplo",
		"%l_navgroup_code1": "\n// necesita una ventana del grupo de navegación dentro del sitio \nvar innerWin = Ti.UI.createWindow({\n   backgroundColor: '#fff',\n   title: 'Dashboard',\n   barColor: #f5c115;\n});\n// debe crear un gurpo de navegación\nvar nav = Ti.UI.iPhone.createNavigationGroup({\n   window: innerWin\n});\n\n// agregar el grupo de navegación de la ventana principal de aplicación\nvar outerWin = Ti.UI.createWindow();\nouterWin.add(nav);\nouterWin.open();\n ",
		"%l_os_nav_eg_image": "<img src='images/nav_dashboard.png' style='margin-top:5px;width:240px;'/>",
		"%l_slidenote_ios_nav_eg": "nav.window property defines the 'home' window of the NavGroup<br><br>The NavGroup itself then needs to be added to a window",
		
		"%l_ios_nav_eg_2": "UI: Grupo de Navegación - Adición de una ventana",
		"%l_navgroup_code2": "\n// agregue una ventana de navegación a group\nvar win2 = Ti.UI.createWindow({\n   backgroundColor: '#fff',\n   title: 'Details',\n   barColor: #f5c115;\n});\nnav.open(win2);\n ",
		"%l_os_nav_eg_2_image": "<img src='images/nav_dashboard2.png' style='margin-top:5px;height:450px;backgroundColor:#fff;'/>",
		"%l_slidenote_ios_nav_eg_2": "To add another window to the stack, create it and then call open",
		
		"%l_ios_nav_bar": "UI: Barra de navegación - Ejemplo",
		"%l_navbar_code": "\n// crear botones para ir a la navegación bar\nvar back = Ti.UI.createButton({ title: 'Back' });\nvar next = Ti.UI.createButton({ title: 'Next' });\n\n// implemente los botones buttons\nwin.setLeftNavButton(back);\nwin.setRightNavButton(next);\n\n// agregue el logo a la barra de navegación bar\nvar logo = Ti.UI.createImageView({ image: 'logo.png' });\nwin.setTitleImage(logo);\n ",
		"%l_os_nav_bar_image": "<img src='images/nav-bar.png' style='margin-top:5px;height:91px;'/>",
		"%l_slidenote_ios_nav_bar": "There are other components that you can set, such as <br>setTItleControl()<br>setTitleImage()<br>setTitle()",
		
		"%l_ui_toolbar": "Barra de herramientas : interfaz de usuario",
		"%l_toolbar1": "Botones que llevan a cabo acciones relacionadas con el contexto actual",
		"%l_toolbar2": "Debe crear objetos 'boton' primero, luego debe guardarlo en un array",
		"%l_toolbar3": "Pase la matriz con la barra de herramientas de objeto",
		"%l_toolbar4": "Objetivo 44 x 44 puntos de un area de golpe para los botones",
		"%l__ui_toolbar_image": "<img src='images/ui-toolbar.png' style='margin-top:5px;height:240px;'/>",
		"%l_slidenote_ui_toolbar": "On iPhone, a toolbar appear at the bottom edge of a screen or view, but on iPad it can instead appear at the top edge. Can also appear atop a keyboard.<br>Toolbar items are displayed equally spaced across the width of the toolbar. The precise set of toolbar items can change from view to view, because the items are always specific to the context of the current view.<br>On iPhone, changing the device orientation from portrait to landscape can change the height of the toolbar automatically. On iPad, the height and translucency of a toolbar does not change with rotation.",
		
		"%l_toolbar_cod": "\n// crear botones para ir a la barra de herramientas bar\nvar camera = Ti.UI.createButton();\nvar flexSpace = Ti.UI.createButton({\n   style:Ti.UI.iPhone.SystemButtonStyle.FLEXIBLE_SPACE\n});\n// otros botones se define aquí\n\n// implementar la barra de herramientas\nwin.toolbar = [camera, flexSpace, tf, flexSpace, send];\n ",
		"%l__ui_toolbar_2_image": "<img src='images/ui-toolbar-2.png' style='margin-top:5px;height:240px;'/>",
		"%l_slidenote_ui_toolbar_2": "\n<br>Buttons are stored as an array of objects (NSArray)<br>win.toolbar property &mdash; setting that docks the toolbar to the bottom of the window<br>Otherwise you could position it anywhere (if you do win.add(toolbar))",
		
		"%l_ui_keyboardtoolbar": "Teclado Barras de herramientas: Interfaz de usuario",
		"%l_keyboardtoolbar_code": "\n// crear botones para ir a la barra de herramientas\nvar camera = Ti.UI.createButton();\n...\n\n// crear el TextField o TextArea\nvar textview = Ti.UI.createTextArea({\n   keyboardToolbar = [camera, flexSpace, tf, flexSpace, send],\n   keyboardToolbarColor: '#999',\n   keyboardToolbarHeight: 40\n});\n ",
		"%l_ui_toolbar_3_image": "<img src='images/ui-toolbar-3.png' style='margin-top:5px;height:240px;'/>",
		"%l_slidenote_ui_toolbar_3": "Works with text fields and text areas",
		
		"%l_ui_buttonbar": "Barra de botones: Interfaz de usuario",
		"%l_buttonbartext": "Controles relacionados que no mantienen el estado",
		"%l_ui_buttonbar_image": "<img src='images/buttonbar.png' style='margin-top:5px;width:400px;'/>",
		"%l_buttonbar_code": "\nvar bb = Ti.UI.createButtonBar({\n   labels: ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'],\n   backgroundColor: 'maroon',\n   /* style is optional */\n   style: Ti.UI.iPhone.SystemButtonStyle.BAR\n});\nwin.add(bb);\n ",
		"%l_slidenote_ui_buttonbar": "<ul><li>Not like a radio button set &mdash; buttons don't maintain state and pressing one doesn't affect the others</li><li>Don't create separate buttons; supply an array of labels</li><li>Event listener on whole bar, where <code>index</code> property tells you which button was actually clicked</li><li>SystemButtonStyle is used to set more compact layout and is not required to make a button bar</li></ul>",
		
		"%l_ui_tabbar": "Barra de pestañas: Interfaz de usuario",
		"%l_tabbedbar_text": "Al igual que los botones de opción (radio buttons), mantienen un estado",
		"%l_tabbedbar_code": "\nvar tb = Ti.UI.iOS.createTabbedBar({\n   labels: ['IMAP', 'POP', 'Exchange']\n});\nwin.add(tb);\n ",

		"%l_ui_tabbar_image": "<img src='images/tabbedbars.png' style='margin-top:5px;width:300px;'/>",
		"%l_slidenote_ui_tabbar": "<ul><li>Also known as 'segmented controls'</li><li>Maintains state &mdash; like radio buttons</li><li>Used for closely related, but mutually exclusive choices.</li><li>All segments in a segmented control have equal width</li><li>Segments can contain text or images, but not both</li></ul>",
		
		"%l_ui_switch": "Interruptor:Interfaz de usuario",
		"%l_switch1": "Presenta dos opciones mutuamente excluyentes", 
		"%l_switch2": "En iOS, no puede cambiar las etiquetas", 
		"%l_switch3": "Android y Web Móvil ofrece opciones más flexibles", 
		"%l_ui_switch_image": "<img src='images/switches.png' style='margin-top:5px;width:200px;'/>",
		"%l_switch_code": "\nvar switch = Ti.UI.createSwitch({\n   value: true\n});\nwin.add(switch);\n ",

		"%l_slidenote_ui_switch": "<ul><li>Not iOS specific</li><li>Can't change 'On' and 'Off' labels on iOS</li><li>On Android &amp; Mobile Web you can use a checkbox style and change the labels</li><li>Add <code>change</code> event listener to switch and check <code>value</code> property to determine state</li></ul>",
		
		"%l_ui_slider": "Control deslizante:Interfaz de usuario",
		"%l_ui_slider_image": "<img src='images/ui-slider.png' style='margin-top:5px;width:400px;'/>",
		"%l_slider_code": "\nvar slider = Ti.UI.createSlider({\n   min: 0,\n   max: 10,\n   value: 3,\n   thumbImage: 'images/skull.png'\n});\nwin.add(slider);\n ",
		"%l_slidenote_ui_slider": "A slider consists of a track and a thumb (a circular control that the user can slide) and optional images that convey the meaning of the right and left values. When people drag the thumb along the slider, the value or process is updated continuously and is displayed in the track.",
		
		"%l_ui_ipad": "APIs especificas iPad: Interfaz de usario",
		"%l_ipadAPIs1": "Ti.UI.iPad.Popover",
		"%l_ipadAPIs2": "Ti.UI.iPad.SplitWindow",
		"%l_slidenote_ui_ipad": "There are two custom views related to iPad development.  We'll explore these two in detail",
		
		"%l_key_api_ti": "Claves de APIs - Titanium.UI.iPad.Popover",
		"%l_popover1": "Vista transitoria revela mediante un click en un control",
		"%l_popover2": "Se posiciona sobre el contenido de aplicación",
		"%l_key_api_ti_image": "<img src='images/popover.png' style='margin-top:5px;width:300px;'/>",
		"%l_slidenote_key_api_ti": "<ul><li>Like a dialog box</li><li>Always has an arrow pointing to the control that opened it</li><li>Contains a Ti.UI.View</li></ul>",
		
		"%l_ti_splitwindow": "Claves de APIs - Titanium.UI.iPad.SplitWindow",
		"%l_splitwindow1": "Pantalla completa, dos paneles",
		"%l_splitwindow2": "Panel de la izquierda fija en 320 puntos",
		"%l_splitwindow3": "El usuario no puede cambiar el tamaño de los paneles",
		"%l_ti_splitwindow_image": "<img src='images/splitwindow.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_ti_splitwindow": "Left pane called 'master' and right pane 'detail'<br/><br/>Both panes can contain a wide variety of objects and views, such as:<br><br>Table, image, map, text, web, or custom views.<br>Navigation bars, toolbars, or tab bars...",
		

		"%l_splitwindow_code": "\n// Estos serán los contenidos de la splitwindow\nvar masterPane = Ti.UI.createView();\nvar detailPane = Ti.UI.createView();\n\n// crear una splitwindow\nvar splitwin = Ti.UI.iPad.createSplitWindow({\n   masterView: masterPane,\n   detailView: detailPane\n});\n\n// no se agrega el splitwin a un objeto de ganar\n// es el objeto de nivel superior 'ventana'\nsplitwin.open();\n ",

		"%l_slidenote_ti_splitwindow_2": "<ul><li>Contains two views: master and detail</li><li>These define a hierarchy: info selected in left (master) pane typically controls what is shown in the right (detail) pane</li><li>You have to code that relationship and associated actions</li><li>In general, indicate the current selection in the left pane in a persistent way.</li></ul>",
		
		"%l_ui_tabbadge": "Ficha insignia: Interfaz de usuario",
		"%l_tabbadge1": "Se comunica el estado del usuario, su atención es requerida, en la parte, de su aplicación",
		"%l_ui_tabbadge_image": "<img src='images/tabbadge.png' style='margin-top:5px;width:400px;'/>",
		"%l_tabbadge_code": "\nvar tab = Ti.UI.currentTab;\ntab.badge = 10; // set the badge\ntab.badge = null; // to remove it\n ",
		"%l_slidenote_ui_tabbadge": "tab.badge has to be set to a number<br>Set to NULL to remove",
		
		"%l_ui_appbadge": "Aplicación insignia: Interfaz de usuario",
		"%l_ui_appbadge_image": "<img src='images/appbadge.png' style='margin-top:5px;height:450px;'/>",
		"%l_appbadge_code": "\nTi.UI.iPhone.appBadge = 14;\nTi.UI.iPhone.appBadge = null;\n ",
		"%l_slidenote_ui_appbadge": "Can be set while the app is running<br>Or, use a background service to set when the app's not running",
		
		"%l_ui_cover": "Cuvierta de Flujo:Interfaz de usuario ",
		"%l_coverflow_code": "\nvar cover = Ti.UI.iOS.createCoverFlowView({\n   images: ['a.png', 'b.png', 'c.png'],\n   backgroundColor: '#000'\n});\nwin.add(cover);\n ",
		"%l_ui_cover_image": "<img src='images/coverflow.png' style='margin-top:5px;height:300px;'/>",
		"%l_slidenote_ui_cover": "Cover art or gallery style, animated 3D UI component to display a series of images.<br/><br/>If an image is tapped, you can grab an index so you can branch code accordingly",
		
		"%l_ui_dashboard": "Panel de vista: Interfaz de usuario",
		"%l_dash1": "Plataforma de lanzamiento tipo vista", 
		"%l_dash2": "Use su aplicación como pantalla de inicio", 
		"%l_dash3": "El usuario puede reordenar o quitar iconos (si lo permiten)", 
		"%l_dash4": "Desplazamiento de contenedores", 
		"%l_ui_dashboard_image": "<img src='images/dashboard.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ui_dashboard": "This isn't setting or accessing the actual Springboard<br>Just presenting a similar view",
		
		"%l_dashboard_code": "\n// crear los elementos de los botones para ir en el panel\nvar item = Ti.UI.createDashboardItem({\n   image: 'images/item1.png',\n   label: 'Home'\n});\n\n// crear el panel\nvar dashboard = Ti.UI.createDashboardView({\n   data: [item],\n   wobble: true /* se tambalea mientras esta en el modo de edición */\n});\nwin.add(dashboard);\n\nvar isEditable = false;\nitem.addEventListener('longpress', function() {\n  (isEditable) ? dashboard.stopEditing() : dashboard.startEditing();\n});\ndashboard.addEventListener('edit', function() {\n   // en el modo de edición in edit mode,manejelo con cuidado\n});\n ",
		"%l_slidenote_ui_dashboard_2": "",
		
		"%l_ui_adview": "AdView : Interfaz de usuario",
		"%l_ui_adview_image": "<img src='images/adview2.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_ui_adview": "For more information on the iAd Network, see http://developer.apple.com/iad/<br>While you are developing your application, iAd Network sends test advertisements to your application. To assist you in validating your implementation, the iAd Network occasionally returns errors to test your error handling code. You can also test your error handling support manually by turning your device's wireless capability off.<br>iAd Network automatically displays the correct ad depending on the how your application binary was downloaded onto your test device",
		

		"%l_adview_code": "\nvar iad = Ti.UI.iOS.createAdView({\n   width: 'auto',\n   height: 'auto',\n   bottom: -100\n});\niad.addEventListener('load', function(){\n   iad.animate({\n      bottom: 0,\n      duration: 500\n   });\n\n});\niad.addEventListener('action', function(){\n   mygame.pause(); // hacer algo cuando se hace clic en anuncios\n\n});\nwin.add(iad);\n ",
		"%l_slidenote_ui_adview_3": "Best to not show ad if nothing is loaded. Set to be off-screen and then move into view when an ad is loaded. Could also show at the top or elsewhere, doesn't have to be on the bottom. <br/><br/>You can tell when a user clicks on an ad, but can't tell what the ad is. Basically this is to pause action that shouldn't run while the ad is showing.",
		
		"%l_key_api_pl": "Plataforma de la funcionalidad de las API",
		"%l_funcapi1": "Ti.App.iOS",
		"%l_funcapi2": "Ti.Contacts",
		"%l_funcapi3": "Ti.Media",
		"%l_funcapi4": "Ti.Network",
		"%l_slidenote_key_api_pl": "Platform specific business logic methods are available for iOS",
		
		"%l_background": "Servicios en segundo plano",
		"%l_background1": "Extender el tiempo de duración limitada",
		"%l_background2": "De larga duración de geolocalización o la reproducción de música",
		"%l_background_code": "\nvar svc = Ti.App.iOS.registerBackgroundService({\n   url: 'bg.js'\n});\n ",
		"%l_slidenote_key_api_app": "This JS will run when the app is paused (home button clicked).<br><br/>Services typically run for 10 mins or until iOS shuts them down.<br/><br/>Useful to finish a download, cache data, etc.",


		"%l_localnotification": "Notificaciones Locales",
		"%l_localnotification1": "Se ejecuta en el dispositivo (no push)",
		"%l_localnotification2": "Acción programada",
		"%l_localnotification3": "Servicio en segundo plano alerta al usuario",

		"%l_notification_code": "\n// schedule the notification\nTitanium.App.iOS.scheduleLocalNotification({\n   alertBody:'View Alarm',\n   alertAction:'You set an alarm',\n   userInfo:{data: 'Data to pass'},\n   date:new Date(new Date().getTime() + 3000)\n});\n// listen for the notification\nTi.App.iOS.addEventListener('notification', \n   function(e) {\n      Ti.API.info('Local notification received: '\n         + e.data);\n});\n ", 
		"%l_slidenote_localnotification": "Local notifications let you schedule user interaction. A background service could alert the user when it's done. You might set an alarm at a specific datetime or interval.",
		
		"%l_key_api_con": "Clave API - Contactos, Medios de Comunicación, Red",
		"%l_cmn1": "Contactos",
		"%l_cmn2": "Ti.Contacts.Group",
		"%l_cmn3": "Ti.Contacts.Person",
		"%l_cmn4": "Media",
		"%l_cmn5": "Ti.Media.AudioRecorder",
		"%l_cmn6": "Ti.Media.Item",
		"%l_cmn7": "Ti.Media.MusicPlayer",
		"%l_cmn8": "Red",
		"%l_cmn9": "Ti.Network.BonjourBrowser",
		"%l_cmn10": "Ti.Network.BonjourService",
		"%l_slidenote_key_api_con": "Your app can participate in the Apple Bonjour (self-configuring, discoverable) networking environment for printing and other services.",
		
		"%l_deep_ios": "iOS propiedades específicas: vistas a profundidad",
		"%l_deep_ios_image": "<img src='images/deep-ios.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios": "Do a quick walk through of the various iPhone related properties.  It's good to point out that these variables exist",
		
		"%l_deep_ios_2_image": "<img src='images/deep-ios-2.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_2": "",
		
		"%l_deep_ios_3_image": "<img src='images/deep-ios-3.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_3": "",
		
		"%l_deep_ios_4_image": "<img src='images/deep-ios-4.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_4": "",
		
		"%l_deep_ios_5_image": "<img src='images/deep-ios-5.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_5": "",
		
		"%l_deep_ios_6_image": "<img src='images/deep-ios-6.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_6": "",
		
		"%l_deep_ios_7_image": "<img src='images/deep-ios-7.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_7": "",
		
		"%l_deep_ios_56_image": "<img src='images/ios_systembutton.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_56": "",
		
		"%l_deep_ios_8_image": "<img src='images/deep-ios-8.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_8": "",
		
		"%l_deep_ios_9_image": "<img src='images/deep-ios-9.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_9": "",
		
		"%l_deep_ios_10_image": "<img src='images/deep-ios-10.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_10": "",
		
		"%l_deep_ios_11_image": "<img src='images/deep-ios-11.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_11": "",
		
		"%l_deep_ios_12_image": "<img src='images/deep-ios-12.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_12": "",
		
		"%l_deep_ios_13_image": "<img src='images/deep-ios-13.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_deep_ios_13": "",
		
		"%l_impl_app": "Preferencias de la aplicación de ejecución",
		"%l_impl_app_image": "<img src='images/impl-app.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_impl_app": "'The Settings Bundle'<br/><br/>Apple's guidelines say all app preferences and settings should be done through the Settings app. In practice, most apps provide at least some options and settings within the app itself. A common mix is to see 'power user' settings in the Settings app and user settings within the app.",
		

		"%l_settings": "Crear el paquete de configuración", 
		"%l_settings1": "Copiar el KitchenSink/platform/iphone a sus proyectos",
		"%l_settings2": "En el Finder, click-derecho Settings.bundle y elija <strong>Mostrar contenido del paquete</strong>",
		"%l_settings3": "Abra Root.plist",
		"%l_settings4": "Edite si es necesario, luego guarde",
		"%l_settings5": "No limpie la construcción de su proyecto",
		"%l_slidenote_settings": "This is easiest way; you could also create the XML file directly<br/><br/>Settings bundle needs to be in project/platform (which doesn't exist by default)<br><br/>(Used to go in project/modules prior to 1.8)<br><br>See tutorial at http://iphoneincubator.com/blog/tutorial/how-to-create-an-iphone-preferences-file",
				
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Objetivos de laboratorio",
		"%l_add_settings": "Añadir la configuración de una aplicación iOS",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/360+-+iOS+API+Deep+Dive'>wiki.appcelerator.org/display/td/360+-+iOS+API+Deep+Dive</a>",
		"%l_slidenote_lab_goals": "In this lab, you will create a Settings bundle so that application settings can be changed via the Settings app in the simulator or on a phone. You will then use that setting within the app to control the app's user interface",
		
	}	
});
