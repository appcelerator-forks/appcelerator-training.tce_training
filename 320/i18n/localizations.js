/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "API Deep Dive: Table Views",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "API Deep Dive: Table Views",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b>(30 mins teaching, 30 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "TableView Examples",
		"%l_agenda2": "TableView Basics and Beyond",
		"%l_agenda3": "Headers, Footers, and Sections",
		"%l_agenda4": "Events and Extras",
		"%l_slidenote_agenda": "In this module, we'll look at some table examples<br>review tableview basics then go a bit further into what you can do with tables<br>we'll look at headers, footers, and sections<br>we'll wrap up with another look at events as well as some cross platform continuous scrolling solution",

		"%l_examples": "Examples",
		"%l_examples_image": "<img src='images/table1.png' style='height:320px;' class='fragment'/><img src='images/table2.png' style='height:320px;' class='fragment'/><img src='images/table3.png' style='height:320px;' class='fragment'/><br/><img src='images/table4.png' style='height:320px;' class='fragment'/><img src='images/table5.png' style='height:320px;' class='fragment'/>",
		"%l_slidenote_examples": "Many options for formatting tables (five total shown)",

		"%l_basic_tableview": "Basic TableView",
		"%l_basic_tableview_code": "\nvar table = Ti.UI.createTableView({\n   properties\n}); \n",
		"%l_basicLH": "Key Table Properties:",
		"%l_basic1": "height / width",
		"%l_basic2": "top / left",
		"%l_basic3": "backgroundColor / backgroundImage",
		"%l_basic4": "rowHeight / minRowHeight / maxRowHeight",
		"%l_basic5": "headerTitle / headerView",
		"%l_basic6": "footerTitle / footerView",
		"%l_basic7": "scrollable",
		"%l_slidenote_basic_tableview": "This is probably all review from BNAPPs.<br/>These are some of the most common properties you'll set on tables.",
		
		"%l_table_anonymous": "Table Rows with Anonymous Objects",
		"%l_l_table_anonymous_code": "\nvar tbl_data = [{title:'Row 1'}, {title:'Row 2'}, {title:'Row 3'}];\nvar table = Ti.UI.createTableView({\n   data: tbl_data\n});\n\n// alternatively\ntable.setData(tbl_data);\n ",
		"%l_slidenote_table_anonymous": "One option for adding rows is to use anonymous objects<br>Useful with JSON data pulled from a web service or database",

		"%l_table_obj": "TableViewRow Object",
		"%l_table_row_code": "\nvar row = Ti.UI.createTableViewRow({\n   properties\n});\ntable.data = [row];\n//or\ntable.appendRow(row);",
		"%l_tableLH": "Key TableViewRow Properties:",
		"%l_table1": "title",
		"%l_table2": "height / width / top / left",
		"%l_table3": "color / backgroundColor",
		"%l_table4": "leftImage / rightImage",

		"%l_slidenote_table_obj": "You can also create TableViewRow objects<br>Useful when you want to manipulate the row's properties before/after adding to the table<br>Saves cumbersome means of accessing the object within the table's data array<br>As of SDK 1.8, appendRow() accepts row object, dictionary, or array (of rows/dictionary objects)",
		
		
		"%l_row_ind": "Row Indicators",
		"%l_row_ind_image": "<img src='images/row-ind.png' style='margin-top:5px;height:250px;'/>",
		"%l_rowindicators": "hasChild<br/><br/>hasDetail<br/><br/>hasCheck",

		"%l_slidenote_row_ind": "Per Apple's HIG, these icons imply the following meaning:<ul><li>hasChild &mdash; indicates sub-table or additional rows</li><li>hasDetail &mdash; indicates a detail view or alert will appear when row is tapped (not supported on Android)</li><li>hasCheck &mdash; on/off or yes/no indicator</li></ul>",
		
		"%l_basic_table": "Basic Table and Row Properties",
		"%l_basic_table_image": "<img src='images/basic-table.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_basic_table": "Formatting can be done with standard TableViewRow properties<br>First row has different background image than middle rows<br>Not labeled, but the row's foreground (text) color also set<br>The &ldquo;other information&rdquo; text is added as a label rather than a standard row property",
		
		"%l_cust_rows": "Custom Table Rows",
		"%l_cust_rows_image": "<img src='images/cust-rows.png' style='margin-top:5px;height:350px;float:right;'/>",
		"%l_add_label": "Add labels, views, images to your rows",
		"%l_pos": "Positioning: relative to top-left of row",
		"%l_elements": "Elements accessible via children[]",
		"%l_slidenote_cust_rows": "You can add labels, views, and images to create custom rows<br>Point out the three labels<br>Point out the image views<br>The &ldquo;plus&rdquo; image is set with the row's rightImage property",
		
		"%l_header_footer": "Header and Footer Titles",
		"%l_tablefooter_code": "var table = Ti.UI.createTableView({\n   data: tbl_data,\n   headerTitle: 'TableView examples and test cases',\n   footerTitle: 'Wow. That was cool!'\n});\n ",
		"%l_header_footer_image": "<img src='images/table_footer.png'style='margin-top:5px;height:252;float:right;'/>",
		"%l_slidenote_header_footer": "headerTitle and footerTitle are non-stylable text.",

		"%l_header_footerview": "Header and Footer Views",
		"%l_tablefooterview_code": "var table = Ti.UI.createTableView({\n   data: tbl_data,\n   headerView: simpleAPIView,\n   footerTitle: someOtherTiView;\n});\n ",
		"%l_header_footerview_image": "<img src='images/headerview.png'style='margin-top:5px;height:242;float:right;'/>",
		"%l_slidenote_header_footerview": "You can use the headerView and footerView properties to place Ti.UI.View objects as headers and footers, and those you can style as needed.",
		
		"%l_rowheader": "Row Headers and Footers",
		"%l_rowheader_code": "var table = Ti.UI.createTableView({\n   data: tbl_data,\n   headerView: simpleAPIView,\n   footerTitle: someOtherTiView;\n});\n ",
		"%l_header_rowheader_image": "<img src='images/rowheader.png' style='margin-top:5px;height:245;float:right;'/>",
		"%l_slidenote_rowheader": "Rows also have header and footer properties. These are not views, but text labels, and un-stylable.",
		
		"%l_table_sections": "Table Sections",
		"%l_section_code": "\nvar section1 = Ti.UI.createTableViewSection({\n   headerTitle:'Section 1'\n});\nvar section2 = Ti.UI.createTableViewSection({\n   headerTitle: 'Section 2'\n});\nsection1.add({title:'Row 0'});\n...\nvar tv = Ti.UI.createTableView({\n	data:[section1,section2]\n});\n ",
		"%l_table_sections_image": "<img src='images/tablesections.png' style='height:400px;float:right;padding:0'/>",
		"%l_slidenote_table_sections": "Create sections, add rows to them<br>assign sections to table via an array added to the data property",
		
		"%l_table_groupedsections": "Grouped Sections - iOS",
		"%l_groupdsection_code": "\nvar tableView = Titanium.UI.createTableView({\n   style:Titanium.UI.iPhone.TableViewStyle.GROUPED\n});\n ",
		"%l_table_groupedsections_image": "<img src='images/groupedsections.png' style='height:400px;float:right;padding:0'/>",
		"%l_slidenote_table_groupedsections": "On iOS, you can create grouped sections. You do by creating sections as shown previously and setting the <code>style</code> property on the table.",
		
		"%l_table_searching": "Table Searching",
		"%l_l_tablesearching_code": "var searchbar = Titanium.UI.createSearchBar({\n   barColor:'#385292',\n   showCancel:false\n});\nvar tableView = Titanium.UI.createTableView({\n   search:searchbar\n});\n ",
		"%l_table_searching_image": "<img src='images/tablesearch_android.png' style='margin-top:5px;height:320px;float:right;'/>",
		"%l_table_searching_image2": "<img src='images/tablesearch_ios.png' style='margin-top:5px;height:320px;float:right;'/>",
		"%l_slidenote_table_searching": "Same code, but different looks",
		
		"%l_ios_only_features": "iOS Only Features",
		"%l_iosonly1": "Edit/Delete mode<pre><code contenteditable>var tableView = Titanium.UI.createTableView({\n   editable:true\n});\ntableview.addEventListener('delete',function(e) {\n   ...\n});</code></pre><img style='position:absolute;top:100px;right:10px;float:right;height:400px;' src='images/editmode.png'/>",
		"%l_iosonly2": "Move mode<pre><code contenteditable>editBtn.addEventListener('click', function() {\n   tableview.moving = true;\n});\ntableview.addEventListener('move',function(e) {\n   ...\n});</code></pre><img style='position:absolute;top:100px;right:10px;float:right;height:400px;' src='images/movemode.png'/>",
		"%l_iosonly3": "Filters<pre><code contenteditable>var index = [\n   {title:'A',index:0},\n   ...\n   {title:'P',index:(data.length -1)}\n];\ntableview.index = index;</code></pre><img style='position:absolute;top:100px;right:10px;float:right;height:400px;' src='images/filters.png'/>",
		"%l_slidenote_ios_only_features": "iOS only properties (table.editable = true) will be ignored on Android<br><br/>You can use swipe to delete (swiping reveals the delete button) or "normal" in which the minus-sign button shown here is displayed.<br><br/>You listen for the delete/move events and take action based on that<br/><br>They're called filters, but you implement them with the <code>index</code> property.",
	
		"%l_table_events": "Table Events",
		"%l_l_tableevents_code": "table.addEventListener('click', function(e){\n   alert('You clicked row ' + e.index);\n})",
		"%l_keyevents": "Key Events",
		"%l_tableevents1": "click / double-click",
		"%l_tableevents2": "scroll/scrollend",
		"%l_tableevents3": "touchstart, touchmove, touchend, touchcancel",
		"%l_tableevents4": "swipe",
		"%l_tableevents5": "move / delete (iOS)",
		"%l_tableevents6": "longpress",
		"%l_keyproperties": "Key Properties",
		"%l_eventproperties1": "index",
		"%l_eventproperties2": "row",
		"%l_eventproperties3": "rowData",
		"%l_eventproperties4": "source",
		"%l_eventproperties5": "section",
		"%l_eventproperties6": "searchMode",
		"%l_l_slidenote_table_events": "Generally, you'll handle table events on the table rather than the rows or children<br>Determine which row clicked by using the e.row property instead<br>Titanium 1.8 adds support for native long-press event,gist workaround useful for older SDKs",

	
		"%l_event_extras": "Event Extras",
		"%l_scroll_events": "Scroll Events - contentOffset (iOS only)",
		"%l_scroll_events_android": "Scroll Events - firstVisibleItem, visibleItemCount, totalItemCount (Android only)",
		"%l_dyn_scroll": "Dynamic scrolling Android workarounds<br>https://gist.github.com/903895<br>					https://gist.github.com/810391",
		"%l_slidenote_event_extras": "Use these events to create dynamic scrolling, also called continuous or infinite scrolling<br>See these gists as well as the Q&A forums for more info on creating cross-platform infinite scrolling solutions",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_create_custom": "Create custom table",
		"%l_doesnt_fill": "doesn't fill entire viewport",
		"%l_cust_background": "custom rows with backgrounds and child elements",
		"%l_table_listeners": "table event listeners that react differently depending on which child element receives the event",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/320+-+API+Deep+Dive+-+TableView'>wiki.appcelerator.org/display/td/320+-+API+Deep+Dive+-+TableView</a>",
		"%l_slidenote_lab_goals": "In this lab assignment, you will create a custom table that doesn't fill the entire viewport. The table will contain customized rows with background images that differ based on the row's location within the table. Each row will contain two images and two labels. When you tap a row, an event listener will determine if either of the images was the object that received the tap. If so, that image will be swapped with an alternate graphic.",
		
		
	},
	"ES": {
		"%l_filetitle": "API analizado a fondo: Vistas de tablas (TableView)",
		"%l_subtitle": "Titanium Móvil avanzado para el desarrollo",
		"%l_lessontitle": "API analizado a fondo: Vistas de tablas",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b>(30 mins teaching, 30 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Ejemplos TableView",
		"%l_agenda2": "TableView Conceptos básicos y más allá",
		"%l_agenda3": "Encabezados, pies de página y secciones",
		"%l_agenda4": "Eventos y extras",
		"%l_slidenote_agenda": "In this module, we'll look at some table examples<br>review tableview basics then go a bit further into what you can do with tables<br>we'll look at headers, footers, and sections<br>we'll wrap up with another look at events as well as some cross platform continuous scrolling solution",

		"%l_examples": "Ejemplos",
		"%l_examples_image": "<img src='images/table1.png' style='height:320px;' class='fragment'/><img src='images/table2.png' style='height:320px;' class='fragment'/><img src='images/table3.png' style='height:320px;' class='fragment'/><br/><img src='images/table4.png' style='height:320px;' class='fragment'/><img src='images/table5.png' style='height:320px;' class='fragment'/>",
		"%l_slidenote_examples": "Many options for formatting tables (five total shown)",

		"%l_basic_tableview": "TableView basicos",
		"%l_basic_tableview_code": "\nvar table = Ti.UI.createTableView({\n   properties\n}); \n",
		"%l_basicLH": "Propiedades clave de la tabla:",
		"%l_basic1": "height(alto) / width (ancho)",
		"%l_basic2": "top (superior) / left (izquierda)",
		"%l_basic3": "backgroundColor (color de fondo) / backgroundImage (imagen de fondo)",
		"%l_basic4": "rowHeight (alto de columna)/ minRowHeight(minimo alto de columna) / maxRowHeight(máximo alto de columna)",
		"%l_basic5": "headerTitle(titlo de cabecera) / headerView (vista de cabecera)",
		"%l_basic6": "footerTitle (titlo de pie de página) / footerView (titlo de pie de página)",
		"%l_basic7": "scrollable (desplazable)",
		"%l_slidenote_basic_tableview": "This is probably all review from BNAPPs.<br/>These are some of the most common properties you'll set on tables.",
		
		"%l_table_anonymous": "Filas de tabla con objetos anónimos",
		"%l_l_table_anonymous_code": "\nvar tbl_data = [{title:'Row 1'}, {title:'Row 2'}, {title:'Row 3'}];\nvar table = Ti.UI.createTableView({\n   data: tbl_data\n});\n\n// alternatively\ntable.setData(tbl_data);\n ",
		"%l_slidenote_table_anonymous": "One option for adding rows is to use anonymous objects<br>Useful with JSON data pulled from a web service or database",

		"%l_table_obj": "TableView objeto de fila",
		"%l_table_row_code": "\nvar row = Ti.UI.createTableViewRow({\n   properties\n});\ntable.data = [row];\n//or\ntable.appendRow(row);",
		"%l_tableLH": "Propiedades principales TableViewRow:",
		"%l_table1": "title (título)",
		"%l_table2": "height (alto) / width(ancho) / top(superior) / left(izquierda)",
		"%l_table3": "color / backgroundColor (color de fondo)",
		"%l_table4": "leftImage(imágen izquierda) / rightImage (imágen derecha)",

		"%l_slidenote_table_obj": "You can also create TableViewRow objects<br>Useful when you want to manipulate the row's properties before/after adding to the table<br>Saves cumbersome means of accessing the object within the table's data array<br>As of SDK 1.8, appendRow() accepts row object, dictionary, or array (of rows/dictionary objects)",
		
		
		"%l_row_ind": "Los indicadores de fila",
		"%l_row_ind_image": "<img src='images/row-ind.png' style='margin-top:5px;height:250px;'/>",
		"%l_rowindicators": "hasChild<br/><br/>hasDetail<br/><br/>hasCheck",

		"%l_slidenote_row_ind": "Para los HIG de Apple, estos iconos implica el siguiente significado:<ul><li>hasChild &mdash; indica una sub-table o filas adicionales</li><li>hasDetail &mdash; indica una vista de detalle o de alerta que aparecerá cuando la fila se toca (no es compatible con Android)</li><li>hasCheck &mdash; indicadores on/off or yes/no</li></ul>",
		
		"%l_basic_table": "Tablas básicas y propiedades de las filas",
		"%l_basic_table_image": "<img src='images/basic-table.png' style='margin-top:5px;height:450px;'/>",
		"%l_slidenote_basic_table": "Formatting can be done with standard TableViewRow properties<br>First row has different background image than middle rows<br>Not labeled, but the row's foreground (text) color also set<br>The &ldquo;other information&rdquo; text is added as a label rather than a standard row property",
		
		"%l_cust_rows": "Filas de tablas personalizadas",
		"%l_cust_rows_image": "<img src='images/cust-rows.png' style='margin-top:5px;height:350px;float:right;'/>",
		"%l_add_label": "Añade etiquetas, vistas, imágenes a sus filas",
		"%l_pos": "Posicionamiento: en relación con la parte superior izquierda de la fila",
		"%l_elements": "Elementos accesibles a través de hijos[]",
		"%l_slidenote_cust_rows": "You can add labels, views, and images to create custom rows<br>Point out the three labels<br>Point out the image views<br>The &ldquo;plus&rdquo; image is set with the row's rightImage property",
		
		"%l_header_footer": "Títulos en el Header (encabezado) and Footer (pie de pagina)",
		"%l_tablefooter_code": "var table = Ti.UI.createTableView({\n   data: tbl_data,\n   headerTitle: 'TableView ejemplos y casos de prueba',\n   footerTitle: 'Wow. That was cool!'\n});\n ",
		"%l_header_footer_image": "<img src='images/table_footer.png'style='margin-top:5px;height:252;float:right;'/>",
		"%l_slidenote_header_footer": "headerTitle and footerTitle are non-stylable text.",

		"%l_header_footerview": "Vistas en el Header (encabezado) and Footer (pie de pagina)",
		"%l_tablefooterview_code": "var table = Ti.UI.createTableView({\n   data: tbl_data,\n   headerView: simpleAPIView,\n   footerTitle: someOtherTiView;\n});\n ",
		"%l_header_footerview_image": "<img src='images/headerview.png'style='margin-top:5px;height:242;float:right;'/>",
		"%l_slidenote_header_footerview": "You can use the headerView and footerView properties to place Ti.UI.View objects as headers and footers, and those you can style as needed.",
		
		"%l_rowheader": "Encabezados de fila (headers) y pies de página (footers)",
		"%l_rowheader_code": "var table = Ti.UI.createTableView({\n   data: tbl_data,\n   headerView: simpleAPIView,\n   footerTitle: someOtherTiView;\n});\n ",
		"%l_header_rowheader_image": "<img src='images/rowheader.png' style='margin-top:5px;height:245;float:right;'/>",
		"%l_slidenote_rowheader": "Rows also have header and footer properties. These are not views, but text labels, and un-stylable.",
		
		"%l_table_sections": "Secciones de la tabla",
		"%l_section_code": "\nvar section1 = Ti.UI.createTableViewSection({\n   headerTitle:'Section 1'\n});\nvar section2 = Ti.UI.createTableViewSection({\n   headerTitle: 'Section 2'\n});\nsection1.add({title:'Row 0'});\n...\nvar tv = Ti.UI.createTableView({\n	data:[section1,section2]\n});\n ",
		"%l_table_sections_image": "<img src='images/tablesections.png' style='height:400px;float:right;padding:0'/>",
		"%l_slidenote_table_sections": "Create sections, add rows to them<br>assign sections to table via an array added to the data property",
		
		"%l_table_groupedsections": "Secciones agrupadas - iOS",
		"%l_groupdsection_code": "\nvar tableView = Titanium.UI.createTableView({\n   style:Titanium.UI.iPhone.TableViewStyle.GROUPED\n});\n ",
		"%l_table_groupedsections_image": "<img src='images/groupedsections.png' style='height:400px;float:right;padding:0'/>",
		"%l_slidenote_table_groupedsections": "On iOS, you can create grouped sections. You do by creating sections as shown previously and setting the <code>style</code> property on the table.",
		
		"%l_table_searching": "Busqueda en la tabla",
		"%l_l_tablesearching_code": "var searchbar = Titanium.UI.createSearchBar({\n   barColor:'#385292',\n   showCancel:false\n});\nvar tableView = Titanium.UI.createTableView({\n   search:searchbar\n});\n ",
		"%l_table_searching_image": "<img src='images/tablesearch_android.png' style='margin-top:5px;height:320px;float:right;'/>",
		"%l_table_searching_image2": "<img src='images/tablesearch_ios.png' style='margin-top:5px;height:320px;float:right;'/>",
		"%l_slidenote_table_searching": "Same code, but different looks",
		
		"%l_ios_only_features": "Caracteristicas únicas del iOS",
		"%l_iosonly1": "Modo Edit/Delete (edición/borrado)<pre><code contenteditable>var tableView = Titanium.UI.createTableView({\n   editable:true\n});\ntableview.addEventListener('delete',function(e) {\n   ...\n});</code></pre><img style='position:absolute;top:100px;right:10px;float:right;height:400px;' src='images/editmode.png'/>",
		"%l_iosonly2": "Modo Move(mover)<pre><code contenteditable>editBtn.addEventListener('click', function() {\n   tableview.moving = true;\n});\ntableview.addEventListener('move',function(e) {\n   ...\n});</code></pre><img style='position:absolute;top:100px;right:10px;float:right;height:400px;' src='images/movemode.png'/>",
		"%l_iosonly3": "Filters(filtros)<pre><code contenteditable>var index = [\n   {title:'A',index:0},\n   ...\n   {title:'P',index:(data.length -1)}\n];\ntableview.index = index;</code></pre><img style='position:absolute;top:100px;right:10px;float:right;height:400px;' src='images/filters.png'/>",
		"%l_slidenote_ios_only_features": "iOS only properties (table.editable = true) will be ignored on Android<br>You listen for the delete/move events and take action based on that<br/>They're called filters, but you implement them with the <code>index</code> property.",
	
		"%l_table_events": "Eventos de la tabla",
		"%l_l_tableevents_code": "table.addEventListener('click', function(e){\n   alert('You clicked row ' + e.index);\n})",
		"%l_keyevents": "Eventos claves",
		"%l_tableevents1": "click / double-click",
		"%l_tableevents2": "scroll/scrollEnd",
		"%l_tableevents3": "touchstart(toque inicial), touchmove (movimiento con toque), touchend (toque final), touchcancel (toque cancelando)",
		"%l_tableevents4": "swipe(deslizado)",
		"%l_tableevents5": "move(mover) / delete (borrar) (iOS)",
		"%l_tableevents6": "longpress (pulsado largo)",
		"%l_keyproperties": "Propiedades clave",
		"%l_eventproperties1": "index",
		"%l_eventproperties2": "row(fila)",
		"%l_eventproperties3": "rowData(datos de la fila)",
		"%l_eventproperties4": "source(fuente)",
		"%l_eventproperties5": "section(sección)",
		"%l_eventproperties6": "searchMode(modo de busqueda)",
		"%l_l_slidenote_table_events": "Generally, you'll handle table events on the table rather than the rows or children<br>Determine which row clicked by using the e.row property instead<br>Titanium 1.8 adds support for native long-press event,gist workaround useful for older SDKs",

	
		"%l_event_extras": "Eventos extras",
		"%l_scroll_events": "Eventos de desplazamiento - contentOffset (solo en iOS)",
		"%l_scroll_events_android": "Eventos de desplazamiento - firstVisibleItem, visibleItemCount, totalItemCount (solo para Android)",
		"%l_dyn_scroll": "Desplazamiento dinámico de Android soluciones alternativas<br>https://gist.github.com/903895<br>					https://gist.github.com/810391",
		"%l_slidenote_event_extras": "Use these events to create dynamic scrolling, also called continuous or infinite scrolling<br>See these gists as well as the Q&A forums for more info on creating cross-platform infinite scrolling solutions",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Objetivos de laboratorio",
		"%l_create_custom": "Crear una tabla personalizada",
		"%l_doesnt_fill": "No debe estar llena toda la ventana",
		"%l_cust_background": "Filas personalizados con antecedentes y elementos secundarios",
		"%l_table_listeners": "Una tabla de eventos oyentes que reacciona de forma diferente dependiendo de qué elemento secundario recibe el evento",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/320+-+API+Deep+Dive+-+TableView'>wiki.appcelerator.org/display/td/320+-+API+Deep+Dive+-+TableView</a>",
		"%l_slidenote_lab_goals": "In this lab assignment, you will create a custom table that doesn't fill the entire viewport. The table will contain customized rows with background images that differ based on the row's location within the table. Each row will contain two images and two labels. When you tap a row, an event listener will determine if either of the images was the object that received the tap. If so, that image will be swapped with an alternate graphic.",
	}	
});
