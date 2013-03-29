/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Animation",
		"%l_subtitle": "Titanium Certified Expert (TCE) Training",
		"%l_lessontitle": "Animation",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 mins teaching, 30 mins lab)",

		"%l_agenda_title": "In this lesson, you will",
		"%l_agenda1": "Learn key animation concepts",
		"%l_agenda2": "Animate the properties of views",
		"%l_agenda3": "Animate views with 2D and 3D matrix operations",
		"%l_slidenote_agenda": "",

		"%l_overview": "Animation Overview",
		"%l_visually_pickup": "Animations can help a user visually pick up on application state changes",
		"%l_can_help": "Can help make your app more engaging and dynamic (read: look cool)",
		"%l_essential": "Essential for games (a less often used application of Titanium, but becoming more popular)",
		"%l_overview": "Animation Overview",
		"%l_slidenote_overview": "",
		
		"%l_basic": "Basic Animation",
		"%l_for_simple": "For simple property animations, we use obj.animate()",
		"%l_basic_code": "\nvar circle = Ti.UI.createView();\ncircle.animate({\n   top: 200,\n   right: 30,\n   duration: 500\n}, function() {\n   // called when anim is complete\n   circle.animate({\n      top: 0,\n      left: 0,\n      duration: 500\n   });\n});\n ",
		"%l_slidenote_basic": "Animate the basic properties of a view, such as positions, colors, background colors, opacity, z-index<br/><br/>Animation is from the <i>current value</i> to the new value you specify over the duration in milliseconds<br/><br/>Callback is run when the first animation is complete (such as to move it back to its original position)",
		
		"%l_basicobj": "Basic Animation With Object",
		"%l_reuse": "To reuse animations, create an object which can be passed to animate():",
		"%l_basicobj_code": "\nvar circle = Ti.UI.createView();\nvar a = Ti.UI.createAnimation({\n   backgroundColor: '#ff0000',\n   autoreverse: true,\n   repeat: 3\n});\na.duration = 1000;\ncircle.animate(a);\n ",
		"%l_slidenote_basicobj": "<ul><li>Animation object lets you apply the same animation to multiple elements.</li><li>Set properties at creation, or after the fact</li><li>autoreverse and repeat properties can be used without the animation object also (w/inline definition as on previous slide)</li></ul>",

		
		"%l_matrix": "Matrix Animations",
		"%l_matrix_image": "<img src='images/matrix.png' style='margin-top:5px;height:380px;float:right;'/>",
		"%l_what_is": "What is a matrix?",
		"%l_matrix_url": "<a href='http://en.wikipedia.org/wiki/Matrix_(mathematics)'>http://en.wikipedia.org/wiki/Matrix_(mathematics)</a> if you care",
		"%l_for_animations": "For animations, it's a set of properties describing a transformation of an object in a way a computer can process and execute",
		"%l_provides_more": "Provides more options for animation",
		"%l_slidenote_matrix": "<ul><li>Matrix animations are for more complex animations</li><li>A matrix is a grid of values representing the properties of an object</li><li>You then transform starting to ending values of that matrix to animate the object</li></ul>",
		
		"%l_2d_matrix": "2D Matrix Animations",
		"%l_2d_matrix_image": "<img src='images/2d-matrix.png' style='margin-top:5px;height:440px;float:right;'/>",
		"%l_transform": "Transform objects in 2D Space",
		"%l_rotate": "Rotate",
		"%l_scale": "Scale",
		"%l_skew": "Skew",
		"%l_associated": "Associated with Animation object",
		"%l_slidenote_2d_matrix": "<ul><li>You can combine these transformations</li><li>These work on iOS and (mostly) on Android</li></ul>",
		
		"%l_2d_matrix_example": "2D Matrix Animation Example",
		"%l_2d_matrix_code": "\n// our view to animate\nvar cloud = Ti.UI.createImageView({image: 'cloud.png' });\n\n// a 2D matrix object\nvar twoD = Ti.UI.create2DMatrix();\ntwoD = twoD.rotate(20);\ntwoD = twoD.scale(1.5);\n\n// which is used in an animation object\nvar a = Ti.UI.createAnimation();\na.transform = twoD;\na.duration = 3000;\na.autoreverse = true;\na.repeat = 3;\n\n// set it all in motion\ncloud.animate(a);\n ",

		"%l_slidenote_2d_matrix_example": "<ul><li>We don't have to worry about the matrix math</li><li>We create a matrix object and use one of its methods, such as rotate or scale</li></ul>",
		
		"%l_3d_matrix": "3D Matrix Animations (iOS)",
		"%l_matrix_3d_image": "<img src='images/3d.png' style='margin-top:5px;height:380px;float:right;'/>",
		"%l_transform_3d": "Transform objects in 3D Space",		
		"%l_slidenote_3d_matrix": "<ul><li>Same sorts of transformations, but in 3D space</li><li>Not supported on Android, API docs inaccurate on this</li></ul>",
		
		"%l_3d_matrix_example": "3D Matrix Animation Example",
		"%l_3d_matrix_code": "\n// our view to animate\nvar cloud = Ti.UI.createImageView({image: 'cloud.png' });\n\n// a 3D matrix object -- note namespace!\nvar threeD = Ti.UI.iOS.create3DMatrix();\nthreeD = threeD.rotate(180, 1, 1, 0);\nthreeD = threeD.scale(2.0, 2.0, 2.0);\n// modify value at a specific matrix location\nthreeD.m34 = 1.0/-1500;\n\n// use the matrix in an animation object\nvar a = Ti.UI.createAnimation();\na.transform = threeD;\na.duration = 3000;\na.autoreverse = true;\na.repeat = 3;\n\n// set it all in motion\ncloud.animate(a);\n ",
		"%l_slidenote_3d_matrix_example": "<ul><li>Titanium.UI.iOS.3DMatrix as of 1.8 (was Ti.UI.3DMatrix earlier)</li><li>Set up 3D transformations in much the same way as 2D</li><li>Extra values in methods represent coordinates in 3-dimensional space (x, y, z)</li><li><code>threeD.m34</code> represents an access to an actual matrix location and value (e.g. row 3, column 4)</li></ul>",
		
		"%l_opacity": "Using Opacity",
		"%l_opacity_imp": "Opacity is an important property in animation",
		"%l_values": "Values:",
		"%l_val0": "0 is invisible",
		"%l_val1": "1 is totally opaque",
		"%l_scrollToView": "scrollToView()",
		"%l_dimming": "Dimming objects indicates they are unavailable",
		"%l_fading": "Fading in/out views makes UI state changes less jarring",
		"%l_demo_animating": "Demo: animating the opacity property",
		"%l_slidenote_opacity": "Animatable property<br>Has typical use scenarios &mdash; indicating a disabled or unavailable state<br><b>Demo</b><br>Use the finished code from Lab 340. Demonstrate working app, then examine app.js",
		
		"%l_transitions": "Transitions",
		"%l_ios_allows": "iOS allows for animated transitions between views and windows",
		"%l_can_open": "Can open window with a transition",
		"%l_can_transition": "Can transition between child views",
		"%l_demo_transitions": "Demo: Using transitions on iOS",
		"%l_slidenote_transitions": "<b>Demo</b>Use the finished code from Lab 340. Demonstrate working app, then examine app.js<br>OR<br>Demo: KitchenSInk<br><ul><li>Basic tab > Transitions</li><li>File is <b>transitions.js</b></li><li>~line 110 transition property in animate()</li></ul>",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_implement": "Implement basic animations",
		"%l_compare": "Compare animation capabilities across platforms",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/340+-+Animation+API+Deep+Dive'>wiki.appcelerator.org/display/td/340+-+Animation+API+Deep+Dive</a>",
		"%l_slidenote_lab_goals": "In this lab, you will animate three elements in a partially-completed app. You'll add code to fade an element out of view, then back into view; add code to slide an element off screen, then back; and you'll add code to transition between two views using iOS-specific functionality.",
		

	},
	"ES": {
		"%l_filetitle": "Animaciones",
		"%l_subtitle": "Titanium Mobile avanzado para desarrollo",
		"%l_lessontitle": "Animaciones",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 mins teaching, 30 mins lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Conceptos clave de animación",
		"%l_agenda2": "Propiedades básicas de las animacións",
		"%l_agenda3": "Matrices de animación en 2d y 3d",
		"%l_agenda4": "Laboratorio",
		"%l_slidenote_agenda": "",

		"%l_overview": "Información general sobre animaciones",
		"%l_visually_pickup": "Las animaciones pueden ayudar a un usuario distiguir cambios de estado en una aplicación",
		"%l_can_help": "Puede ayudar a hacer su aplicación más atractiva y dinámica (es decir: 'a la moda')",
		"%l_essential": "Esencial para los juegos (un uso con menos frecuencia en Titanium, pero cada vez más popular)",
		"%l_overview": "Información general sobre animaciones",
		"%l_slidenote_overview": "",
		
		"%l_basic": "Animaciones Basicas",
		"%l_for_simple": "Para las animaciones simples, utilizamos la propiedad obj.animate()",
		"%l_basic_code": "\nvar circle = Ti.UI.createView();\ncircle.animate({\n   top: 200,\n   right: 30,\n   duration: 500\n}, function() {\n   // called when anim is complete\n   circle.animate({\n      top: 0,\n      left: 0,\n      duration: 500\n   });\n});\n ",
		"%l_slidenote_basic": "Animate the basic properties of a view, such as positions, colors, background colors, opacity, z-index<br/><br/>Animation is from the <i>current value</i> to the new value you specify over the duration in milliseconds<br/><br/>Callback is run when the first animation is complete (such as to move it back to its original position)",
		
		"%l_basicobj": "Animaciones básicas con objetos",
		"%l_reuse": "To reuse animations, create an object which can be passed to animate():",		
		"%l_reuse": "Para volver a utilizar las animaciones, se puede crear un objeto y asigarle un animate():",
		"%l_basicobj_code": "\nvar circle = Ti.UI.createView();\nvar a = Ti.UI.createAnimation({\n   backgroundColor: '#ff0000',\n   autoreverse: true,\n   repeat: 3\n});\na.duration = 1000;\ncircle.animate(a);\n ",
		"%l_slidenote_basicobj": "<ul><li>Animation object lets you apply the same animation to multiple elements.</li><li>Set properties at creation, or after the fact</li><li>autoreverse and repeat properties can be used without the animation object also (w/inline definition as on previous slide)</li></ul>",

		
		"%l_matrix": "Matriz de animaciones",
		"%l_matrix_image": "<img src='images/matrix.png' style='margin-top:5px;height:380px;float:right;'/>",
		"%l_what_is": "Que es una matriz?",
		"%l_matrix_url": "<a href='http://en.wikipedia.org/wiki/Matrix_(mathematics)'>http://en.wikipedia.org/wiki/Matrix_(mathematics)</a> por si le interesa",
		"%l_for_animations": "Para las animaciones, es un conjunto de propiedades que describen la transformación de un objeto en una forma que un ordenador puede procesar y ejecutar",
		"%l_provides_more": "Ofrece más opciones para la animación",
		"%l_slidenote_matrix": "<ul><li>Matrix animations are for more complex animations</li><li>A matrix is a grid of values representing the properties of an object</li><li>You then transform starting to ending values of that matrix to animate the object</li></ul>",
		
		"%l_2d_matrix": "Matriz de animaciones en 2D ",
		"%l_2d_matrix_image": "<img src='images/2d-matrix.png' style='margin-top:5px;height:440px;float:right;'/>",
		"%l_transform": "Transforma objectos en espacio 2D",
		"%l_rotate": "Rotate (rotar)",
		"%l_scale": "Scale (escalar)",
		"%l_skew": "Skew (sesgar)",
		"%l_associated": "Asociados con objeto de animación",
		"%l_slidenote_2d_matrix": "<ul><li>You can combine these transformations</li><li>These work on iOS and (mostly) on Android</li></ul>",
		
		"%l_2d_matrix_example": "Ejemplo de matriz de animación 2D",
		"%l_2d_matrix_code": "\n// our view to animate\nvar cloud = Ti.UI.createImageView({image: 'cloud.png' });\n\n// a 2D matrix object\nvar twoD = Ti.UI.create2DMatrix();\ntwoD = twoD.rotate(20);\ntwoD = twoD.scale(1.5);\n\n// which is used in an animation object\nvar a = Ti.UI.createAnimation();\na.transform = twoD;\na.duration = 3000;\na.autoreverse = true;\na.repeat = 3;\n\n// set it all in motion\ncloud.animate(a);\n ",

		"%l_slidenote_2d_matrix_example": "<ul><li>We don't have to worry about the matrix math</li><li>We create a matrix object and use one of its methods, such as rotate or scale</li></ul>",
		
		"%l_3d_matrix": "Matriz de animación en 3D (iOS)",
		"%l_matrix_3d_image": "<img src='images/3d.png' style='margin-top:5px;height:380px;float:right;'/>",
		"%l_transform_3d": "Transformación de objetos en el espacio 3D",		
		"%l_slidenote_3d_matrix": "<ul><li>Mismos tipos de transformaciones, pero en el espacio 3D</li><li>no es soportado por Android, API documentos inexactos</li></ul>",
		
		"%l_3d_matrix_example": "Ejemplo de matriz de animación 3D",
		"%l_3d_matrix_code": "\n// our view to animate\nvar cloud = Ti.UI.createImageView({image: 'cloud.png' });\n\n// a 3D matrix object -- note namespace!\nvar threeD = Ti.UI.iOS.create3DMatrix();\nthreeD = threeD.rotate(180, 1, 1, 0);\nthreeD = threeD.scale(2.0, 2.0, 2.0);\n// modify value at a specific matrix location\nthreeD.m34 = 1.0/-1500;\n\n// use the matrix in an animation object\nvar a = Ti.UI.createAnimation();\na.transform = threeD;\na.duration = 3000;\na.autoreverse = true;\na.repeat = 3;\n\n// set it all in motion\ncloud.animate(a);\n ",
		"%l_slidenote_3d_matrix_example": "<ul><li>Titanium.UI.iOS.3DMatrix as of 1.8 (was Ti.UI.3DMatrix earlier)</li><li>Set up 3D transformations in much the same way as 2D</li><li>Extra values in methods represent coordinates in 3-dimensional space (x, y, z)</li><li><code>threeD.m34</code> represents an access to an actual matrix location and value (e.g. row 3, column 4)</li></ul>",
		
		"%l_opacity": "Usando la opacidad",
		"%l_opacity_imp": "La opacidad es una característica importante en la animación",
		"%l_values": "Values:(valores)",
		"%l_val0": "0 es invisible",
		"%l_val1": "1 es totalmente opaco",
		"%l_scrollToView": "scrollToView()",
		"%l_dimming": "Atenuación de los objetos indica que no están disponibles",
		"%l_fading": "Los Fading in / out son puntos de vista hace menos discordante los cambios de interfaz de usuario del estado",
		"%l_demo_animating": "Demo: la animación de la propiedad de opacidad",
		"%l_slidenote_opacity": "Animatable property<br>Has typical use scenarios &mdash; indicating a disabled or unavailable state<br><b>Demo</b><br>Use the finished code from Lab 340. Demonstrate working app, then examine app.js",
		
		"%l_transitions": "Transiciones",
		"%l_ios_allows": "iOS permite transiciones animadas entre vistas y ventanas",
		"%l_can_open": "Se puede abrir una ventana con una trnasición",
		"%l_can_transition": "Puede pasar de una vista a los niños",
		"%l_demo_transitions": "Demo: Uso de las transiciones de iOS",
		"%l_slidenote_transitions": "<b>Demo</b>Use the finished code from Lab 340. Demonstrate working app, then examine app.js<br>OR<br>Demo: KitchenSInk<br><ul><li>Basic tab > Transitions</li><li>File is <b>transitions.js</b></li><li>~line 110 transition property in animate()</li></ul>",
		
		"%l_common_anim": "Usos comunes de animaciones",
		"%l_window_transitions": "Transición de ventanas (ya se hizo una demostración)",
		"%l_view_opacity": "Vista de la opacidad (ya se hizo una demostración)",
		"%l_slide_demo": "Deslizar - Demo",
		"%l_bounce_demo": "Bounce(salto)/Grow(crecer)/Shrink(encojer) - Demo",
		"%l_drag": "Arrastrar y soltar",
		"%l_slidenote_common_anim": "<ul><li>Demo A: KitchenSink ñ Base UI tab, Animations > Basic</li><ul><li>file is: basic_animation.js</li></ul><li><Demo B: show the touchmove event listener</li><li>drop part would be the callback function: you'd determine the x/y and bounds of the dragged object, if it were in the right spot per your app's UI, then you'd take the appropriate actions</li><li>Drag & drop is not an automated / built-in function. You have to manually build that functionality</li></ul>",
		
		"%l_qa": "Preguntas",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Objetivos de laboratorio",
		"%l_implement": "Implementar animaciones básicas",
		"%l_compare": "Comparar las capacidades de animación a través de plataformas",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/340+-+Animation+API+Deep+Dive'>wiki.appcelerator.org/display/td/340+-+Animation+API+Deep+Dive</a>",
		"%l_slidenote_lab_goals": "In this lab, you will animate three elements in a partially-completed app. You'll add code to fade an element out of view, then back into view; add code to slide an element off screen, then back; and you'll add code to transition between two views using iOS-specific functionality.",
		

	}	
});
