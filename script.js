	var sections = {'amt': 0, 'sectionList': [], 'current': 0, 'header': null};
	var palette = {'Exotic': ['#0f1f38','#8E7970','#F55449','#1B4B5A'],
				   'Tech': ['FBCD4B','#A3A599','#282623','#88A550'],
				   'Beyond': ['#31A2AC','#AF1C1C','#F0EFF0','#2F2F28'],
				   'Crisp': ['#0F1B07','#FFFFFF','#5C821A','#C6D166'],
				   'DayNight': ['#011A27','#063852','#F0810F','#E6DF44'],
				   'Professional': ['#90AFC5','#336B87','#2A3132','#763626']
	};

	var loadPalette = function(idx){
		var paletteName = Object.keys(palette)[idx];
		var chosen = [];

		console.log("Palette: ", palette);

            for(var i =0; i < 4; i++){
            var index = Math.floor(Math.random() * (sections['sectionList'].length) );
			var random = i;
			var backgroundStyle = palette[paletteName][random];
			if(sections['sectionList'][index].style.background == ""){
				sections['sectionList'][index].style.background = (backgroundStyle).toString();
				chosen.push(backgroundStyle);
			} else if (chosen.indexOf(sections['sectionList'][index].style.background) > -1){
				console.log("same");
			}
		};	
	};
	// To set the height of the entry div for proper centering 
	var setPageHeight = function(className, idx){
		var height = (window.innerHeight).toString();
		height += "px";
		document.getElementsByClassName(className)[idx].style.height = height; 
		return true;
	};
	// To set the width of the entry div for proper centering 
	var setPageWidth = function(className, idx){
		var width = (window.innerWidth).toString();
		width += "px";
		document.getElementsByClassName(className)[idx].style.width = width; 
		return true;
	};
	// Bound the image 
	var imageBound = function(className, idx, maxwidth){
		var image = document.getElementsByClassName(className)[idx];
		var width = window.innerWidth;
		width = width > maxwidth ? ((width/2 -100)/width)*100 : 100;
		image.style.width = width + "%";
		image.style.height = "1%";

	};
	// For accessing sections
	var setUpSections = function(){
		var arraySections = document.getElementsByClassName('section');
		var amount = arraySections.length;
		sections['amt'] = amount;
		sections['sectionList'] = arraySections;
		for(var i = 0; i < amount; i++){
			arraySections[i].tabIndex = -1;
		}
		var header = document.getElementsByClassName("header")[0];
		sections['header'] = header;
		// header.className = header.className + " hide";
	};

	  // var setHeight = function(){
	  // setPageHeight('entry', 0);
	  // setPageHeight('projects', 0);
	  // setPageHeight('aboutme', 0);
	  // setPageHeight('sidebar', 0);
	  // };

	  // setHeight();
	  // setUpSections();
	  // imageBound('bound', 0, 400);