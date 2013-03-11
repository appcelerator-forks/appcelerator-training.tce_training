/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "User Input Collection",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "User Input Collection",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 mins teaching, 30 mins for lab) ",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Skin and style native components",
		"%l_agenda2": "Handle keyboard and layout issues",
		"%l_agenda3": "Keyboard customization",
		"%l_agenda4": "Using Web Views and HTML forms for input collection",
		"%l_slidenote_agenda": "Data entry in a mobile application is much different than sitting at a keyboard with a desktop computer.&dagger; In this module, developers will learn how to collect data from users in a streamlined way.",

		"%l_styling_input": "Styling Input Components",
		"%l_sizing_input": "Sizing input elements",
		"%l_pos_input": "Positioning input elements",
		"%l_hint_text": "hintText",
		"%l_clear_edit": "clearOnEdit",
		"%l_auto_correct": "Autocorrection and autocapitalization",
		"%l_slidenote_styling_input": "You can set all the usual width and height values<br>Keep in mind that text sizes differ across platforms, so size text accordingly<br>Position with top, left, right, bottom as usual<br>Hint text shows in empty text fields and text areas, removed when user focuses on the field<br>Clear on edit removes contents on focus<br>Turn off autocorrection and autocapitalization by setting to false in field's properties",

		"%l_styling_input_contd": "Styling Input Components, continued",
		"%l_bg_color": "Background colors and gradients",
		"%l_bg_graphics": "Background graphics",
		"%l_bgcap": "backgroundLeftCap, backgroundTopCap",
		"%l_styling_input_contdn_image": "<img src='images/styling-input.png' style='margin-top:5px;height:250px;'/>",
		"%l_slidenote_styling_input_contd": "<ul><li>Set normal, selected, and disabled background colors</li><li>Gradients on iOS only</li><li>Graphics stretch to fill control size, or are cropped if larger than control</li><li>On iOS, you can enable special stretching mode via backgroundLeftCap / top cap<ul><li>You define an area on the left/top that won't be stretched</li><li>one pixel in the middle is stretched to fill most of the rest</li><li>right/bottom cap is calculated as<br/>total size &ndash; left cap &ndash; center 1px</li></ul>",
		
		"%l_soft_kbd": "Soft Keyboard and Layout Issues",
		"%l_hiding": "Hiding the keyboard - blur()",
		"%l_keyboardshowing": "New in 3.0: Ti.App.keyboardframechanged (event)",
		"%l_suppress": "Suppressing the return key",
		"%l_preventing": "Preventing the keyboard from covering an input:<ul style='margin-left:50px;width:80%;'><li class='fragment'>Put input fields into a scroll view</li><li class='fragment'>Android only:<pre><code contenteditable>\nTi.UI.createWindow({\n   windowSoftInputMode: (Ti.UI.Platform==='android') ?\n      Ti.UI.Android.SOFT_INPUT_ADJUST_PAN : null\n});\n </code></pre></li></ul>",
		"%l_slidenote_soft_kbdv2": "<ul><li>Hide keyboard with input.blur() or show with input.focus()</li><li>There's a native Android-only way to hide the keyboard programmatically, see the Kitchen Sink</li><li>New in Ti 3.0, the keyboardframechanged event is fired when the keyboard is displayed</li><li>Suppressing return &mdash; to get new lines in textarea<br>Add <code>suppressReturn:false</code> to field</li><li>Prevent keyboard covering input:<ul><li>Put input fields into a scroll view</li><li>Android only: use the SOFT_INPUT_ADJUST_PAN constant</li></ul></li></ul>",
		
		"%l_kbd_cust": "Keyboard Customization",
		"%l_kbd_type": "Keyboard Type &mdash; <code>field.keyboardType</code>",
		"%l_returnkey": "Assigning the Return key &mdash; <code>field.returnKeyType</code>",
		"%l_kbd_toolbars": "Keyboard Toolbars",
		"%l_slidenote_kbd_cust": "Agenda type slide<br>Details on upcoming slides",
		
		"%l_kbd_types_ios": "Keyboard Types - iOS",
		"%l_kbd_types_ios_image": "<img src='images/kbd-types-ios.png' style='margin-top:5px;height:500px;'/>",
		"%l_slidenote_kbd_types_ios": "Keyboard types<br>Set on text field or text area with keyboardType =  Ti.UI.type_name",
		
		"%l_kbd_types_android": "Keyboard Types - Android",
		"%l_kbd_types_android_image": "<img src='images/kbd-types-android.png' style='margin-top:5px;height:500px;'/>",
		"%l_slidenote_kbd_types_android": "Differences are subtle<br>Numbers_Punctuation and Namephone_Pad are the same<br>Decimal_Pad not supported<br>Carrier themes will likely change the appearance of these",

		
		"%l_ret_key": "Return Key Options",
		"%l_ret_ke_image": "<img src='images/ret-key.png' style='margin-top:5px;height:500px;'/>",
		"%l_slidenote_ret_key": "field.returnKeyType = Ti.UI.RETURNKEY_type<br>Return key options<br>Changes label and user expectation<br>When button is tapped, the return event of the input field is fired<br>Hint: you could capture return event and move focus to next field in a long form",

		
		"%l_kdb_toolbars": "Keyboard Toolbars",
		"%l_ios_only": "iOS only feature",
		"%l_kdb_toolbars_image": "<img src='images/kbd-toolbars.png' style='margin-top:5px;width:240px;'/>",
		"%l_kbd_toolbarcode": "\n// flexSpace, camera, & other buttons created here\nvar textfield = Ti.UI.createTextField({\n   value: 'Focus to see keyboard w/ toolbar',\n   keyboardToolbar: [flexSpace, camera, flexSpace,\n      tf, flexSpace, send, flexSpace],\n   keyboardToolbarColor: '#999',\n   keyboardToolbarHeight: 40\n});\n ", 
		"%l_slidenote_kdb_toolbars": "Define buttons separately prior<br>Assign object references to keyboardToolbar property<br>Add event listeners to those individual buttons",
		
		"%l_using_webviews": "Using Web Views and HTML Forms",
		"%l_html_forms": "HTML is built for forms",
		"%l_support_tabbing": "Great automatic support for scrolling and 'tabbing' between fields",
		"%l_html5_forms": "HTML 5 forms:",
		"%l_input_type": "Keyboard types set with < input type=type >",
		"%l_html_input": "<a href='www.w3.org/TR/html5/the-input-element.html#attr-input-type'>www.w3.org/TR/html5/the-input-element.html#attr-input-type</a>",
		"%l_viewport": "Controlling the 'viewport'",
		"%l_control_viewport": "<a href='http://bit.ly/sxiFMK'>http://bit.ly/sxiFMK</a>",
		"%l_form_validation": "Form validation support",		
		"%l_slidenote_using_webviews": "HTML 5 includes many form-related additions<br>Keyboard types<br>Control size of page via the meta tag<br>HTML 5 form validation not fully supported across platforms",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_use_an": "Use an HTML form and a WebView for data entry",
		"%l_set_app": "Set appropriate keyboard types for each field",
		"%l_transmit_collected": "Transmit collected data back to native land so data can be saved to a database",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/330+-+User+Input+Collection'>wiki.appcelerator.org/display/td/330+-+User+Input+Collection</a>",
		"%l_slidenote_lab_goals": "In this lab, we'll use a web view to create a user-friendly input form.<br>Demo: form is built with HTML<br><ul><li>Fields auto-scroll to remain visible</li><li>Next/previous buttons</li></ul>"
	},
	"es-es": {
		"%l_filetitle": "Colección de entrada del usuario",
		"%l_subtitle": "Titanium Mobile avanzado para desarrollo",
		"%l_lessontitle": "Colección de entrada del usuario",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 mins teaching, 30 mins for lab) ",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "El tema(skin) y del estilo de componentes nativos",
		"%l_agenda2": "Manejar los problemas del teclado y el diseño",
		"%l_agenda3": "Personalización del teclado",
		"%l_agenda4": "Uso de las vistas Web y formularios HTML para la recolección de datos de entradas",
		"%l_slidenote_agenda": "Data entry in a mobile application is much different than sitting at a keyboard with a desktop computer.&dagger; In this module, developers will learn how to collect data from users in a streamlined way.",

		"%l_styling_input": "El estilo de componentes de entrada",
		"%l_sizing_input": "Dimensionamiento de los elementos de entrada",
		"%l_pos_input": "Colocar elementos de entrada",
		"%l_hint_text": "hintText (sugerencias de texto)",
		"%l_clear_edit": "clearOnEdit(limpiar al editar)",
		"%l_auto_correct": "Autocorrección y autocapitalization",
		"%l_slidenote_styling_input": "You can set all the usual width and height values<br>Keep in mind that text sizes differ across platforms, so size text accordingly<br>Position with top, left, right, bottom as usual<br>Hint text shows in empty text fields and text areas, removed when user focuses on the field<br>Clear on edit removes contents on focus<br>Turn off autocorrection and autocapitalization by setting to false in field's properties",

		"%l_styling_input_contd": "Estilo de componentes de entrada, continuo",
		"%l_bg_color": "Los colores de fondo y los gradientes",
		"%l_bg_graphics": "Gráficos de fondo",
		"%l_bgcap": "backgroundLeftCap(fondo de capa lateral izquierda), backgroundTopCap(fondo de capa lateral superior)",
		"%l_styling_input_contdn_image": "<img src='images/styling-input.png' style='margin-top:5px;height:250px;'/>",
		"%l_slidenote_styling_input_contd": "<ul><li>Set normal, selected, and disabled background colors</li><li>Gradients on iOS only</li><li>Graphics stretch to fill control size, or are cropped if larger than control</li><li>On iOS, you can enable special stretching mode via backgroundLeftCap / top cap<ul><li>You define an area on the left/top that won't be stretched</li><li>one pixel in the middle is stretched to fill most of the rest</li><li>right/bottom cap is calculated as<br/>total size &ndash; left cap &ndash; center 1px</li></ul>",
		
		"%l_soft_kbd": "Teclado en pantalla y problemas de diseño",
		"%l_hiding": "Escondiendo el teclado - blur()",
		"%l_suppress": "La supresión de la tecla de retorno",
		"%l_preventing": "Prevenir que el teclado cubra una entrada:<ul style='margin-left:50px;width:80%;'><li class='fragment'>Ponga los campos de entrada en un punto de vista de desplazamiento</li><li class='fragment'>Solo en Android:<pre><code contenteditable>\nTi.UI.createWindow({\n   softInputMode: (Ti.UI.Platform==='android') ?\n      Ti.UI.Android.SOFT_INPUT_ADJUST_PAN : null\n});\n </code></pre></li></ul>",
		"%l_slidenote_soft_kbd": "<ul><li>Hide keyboard with input.blur() or show with input.focus()</li><li>There's a native Android-only way to hide the keyboard programmatically, see the Kitchen Sink</li><li>No way to tell if the keyboard is showing &mdash; native OS limitation</li><li>Suppressing return &mdash; to get new lines in textarea<br>Add <code>suppressReturn:false</code> to field</li><li>Prevent keyboard covering input:<ul><li>Put input fields into a scroll view</li><li>Android only: use the SOFT_INPUT_ADJUST_PAN constant</li></ul></li></ul>",
		
		"%l_kbd_cust": "Personalización del teclado",
		"%l_kbd_type": "Teclado Tipo &mdash; <code>field.keyboardType</code>",
		"%l_returnkey": "La asignación de la tecla de retorno &mdash; <code>field.returnKeyType</code>",
		"%l_kbd_toolbars": "Barras de herramientas del teclado",
		"%l_slidenote_kbd_cust": "Agenda type slide<br>Details on upcoming slides",
		
		"%l_kbd_types_ios": "Tipos de teclados - iOS",
		"%l_kbd_types_ios_image": "<img src='images/kbd-types-ios.png' style='margin-top:5px;height:500px;'/>",
		"%l_slidenote_kbd_types_ios": "Keyboard types<br>Set on text field or text area with keyboardType =  Ti.UI.type_name",
		
		"%l_kbd_types_android": "Tipos de teclados - Android",
		"%l_kbd_types_android_image": "<img src='images/kbd-types-android.png' style='margin-top:5px;height:500px;'/>",
		"%l_slidenote_kbd_types_android": "Differences are subtle<br>Numbers_Punctuation and Namephone_Pad are the same<br>Decimal_Pad not supported<br>Carrier themes will likely change the appearance of these",

		
		"%l_ret_key": "Opciones de tecla regresar",
		"%l_ret_ke_image": "<img src='images/ret-key.png' style='margin-top:5px;height:500px;'/>",
		"%l_slidenote_ret_key": "field.returnKeyType = Ti.UI.RETURNKEY_type<br>Return key options<br>Changes label and user expectation<br>When button is tapped, the return event of the input field is fired<br>Hint: you could capture return event and move focus to next field in a long form",

		
		"%l_kdb_toolbars": "Barras de herramientas del teclado",
		"%l_ios_only": "Característica sólo del iOS",
		"%l_kdb_toolbars_image": "<img src='images/kbd-toolbars.png' style='margin-top:5px;width:240px;'/>",
		"%l_kbd_toolbarcode": "\n// FlexSpace, la cámara, y otros botones creado aquí\nvar textfield = Ti.UI.createTextField({\n   value: 'Focus to see keyboard w/ toolbar',\n   keyboardToolbar: [flexSpace, camera, flexSpace,\n      tf, flexSpace, send, flexSpace],\n   keyboardToolbarColor: '#999',\n   keyboardToolbarHeight: 40\n});\n ", 
		"%l_slidenote_kdb_toolbars": "Define buttons separately prior<br>Assign object references to keyboardToolbar property<br>Add event listeners to those individual buttons",
		
		"%l_using_webviews": "Uso de las vistas Web y los formularios HTML",
		"%l_html_forms": "HTML es construido por las formas",
		"%l_support_tabbing": "Gran apoyo automático para el desplazamiento y la 'tabulación' entre los campos",
		"%l_html5_forms": "Formularios en HTML 5:",
		"%l_input_type": "Tipos de teclado establecidos con < input type=type >",
		"%l_html_input": "<a href='www.w3.org/TR/html5/the-input-element.html#attr-input-type'>www.w3.org/TR/html5/the-input-element.html#attr-input-type</a>",
		"%l_viewport": "El control de la ventana 'viewport'",
		"%l_control_viewport": "<a href='http://bit.ly/sxiFMK'>http://bit.ly/sxiFMK</a>",
		"%l_form_validation": "Formulario de soporte de validación",		
		"%l_slidenote_using_webviews": "HTML 5 includes many form-related additions<br>Keyboard types<br>Control size of page via the meta tag<br>HTML 5 form validation not fully supported across platforms",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Objetivos del Laboratorio",
		"%l_use_an": "Use un formulario HTML y un WebView para entrada de datos",
		"%l_set_app": "Establecer los tipos adecuados de teclado para cada campo",
		"%l_transmit_collected": "Transmitir los datos recogidos de nuevo a la tierra nativa lo que los datos pueden ser guardados en una base de datos",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/330+-+User+Input+Collection'>wiki.appcelerator.org/display/td/330+-+User+Input+Collection</a>",
		"%l_slidenote_lab_goals": "In this lab, we'll use a web view to create a user-friendly input form.<br>Demo: form is built with HTML<br><ul><li>Fields auto-scroll to remain visible</li><li>Next/previous buttons</li></ul>"
	}	
});
