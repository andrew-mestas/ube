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
		document.getElementsByClassName(className)[idx].style.minHeight = height; 
		return true;
	};
	// To set the width of the entry div for proper centering 
	var setPageWidth = function(className, idx){
		var width = (window.innerWidth).toString();
		width += "px";
		document.getElementsByClassName(className)[idx].style.width = width; 
		return true;
	};

	var setAllWidth = function(className){
		var sections = document.querySelectorAll(className);

		for(var i =0; i< sections.length; i++){
			var width = (window.innerWidth -40).toString();
			width += "px";

			sections[i].style.width = width;
		};
	};
	// Bound the image 
	var imageBound = function(className, maxwidth){

		var images = document.querySelectorAll(className);
		var length = images.length;
		
		for(var i = 0; i< length; i++){
		var width = window.innerWidth;
		 width = width > maxwidth ? ((width/2 -100)/width)*100 : 100;
		 images[i].style.width = width + "%";
		 images[i].style.height = "1%";
		}

	};

	var slideShow = function(){
		var slideshows = document.querySelectorAll(".slideShow");
		var slides = document.querySelectorAll(".slide");
		var length = slideshows.length;
		for(var i = 0; i< length; i++){
			var child = slideshows[i].children.length;
			slideshows[i].style.width = (child * 100).toString() + "%";
		};
		// horizontal center
		for(var i= 0; i< slides.length; i++){
			slides[i].children[0].style.marginLeft = ((parseInt(slides[i].style.width) * .50)- slides[0].children[0].width/2).toString() + "px";
		}

		// vertical center
		for(var i= 0; i< slides.length; i++){
			slides[i].children[0].style.marginTop = ((window.innerHeight * .3)- slides[0].children[0].height/2).toString() + "px";
		}
	};
	// For accessing sections
	var setUpSections = function(){
		var arraySections = document.getElementsByClassName('section');
		var amount = arraySections.length;
		sections['amt'] = amount;
		sections['sectionList'] = arraySections;
		for(var i = 0; i < amount; i++){
			arraySections[i].tabIndex = -1;
			 setPageHeight(arraySections[i].className, 0);
		}
		var header = document.getElementsByClassName("header")[0];
		sections['header'] = header;
		var sidebar = document.getElementsByClassName('sidebar')[0];
		 setPageHeight(sidebar.className, 0);
		// header.className = header.className + " hide";
	};

	// For resize 
	var setHeight = function(){
		for(var i = 0; i < sections['amt']; i++){
			 setPageHeight(sections['sectionList'][i].className, 0);
		}
		var sidebar = document.getElementsByClassName('sidebar')[0];
		 setPageHeight(sidebar.className, 0);


	};
    // Navigation
    var setNavigation = function(){
    	 var up = document.getElementsByClassName("up")[0];
   	  var down = document.getElementsByClassName("down")[0];

	  // navigate down if not at last slide
	  document.getElementsByClassName('down')[0].addEventListener("click", function(){
	  	if(sections['current'] +1 !== sections['amt']){
			up.className == "up hide" ? up.className = "up" : up.className = "up";
	  		var nextSlide = sections['current'] + 1;
	  		sections['sectionList'][nextSlide].focus();
	  		sections['current'] += 1;
	  		if(sections['current']+1 == sections['amt']){
			down.className = "down" ? down.className = "down hide" : down.className = "down hide";

	  		}
	  	}

	  });
	  // navigate up if not first slide
	  document.getElementsByClassName('up')[0].addEventListener("click", function(){
	  	if(sections['current']-1 >= 0){
	  		var nextSlide = sections['current'] - 1;
	  		sections['sectionList'][nextSlide].focus();
	  		sections['current'] -= 1;
	  		down.className = "down hide" ? down.className = "down" : down.className = "down";

	  	} else {
	  		// sections['header'].className = sections['header'].className + " hide";
	  		up.className = "up hide";
	  		window.scrollTo(0,0);
	  		sections['current'] = 0;
	  	}
	  	

	  });
	  // Side menu
	  document.getElementsByClassName("btn")[0].addEventListener("click", function(){
	  	var sidebar = document.getElementsByClassName("sidebar")[0];
	  	var ulbar = document.getElementsByClassName("ulbar")[0];
	  	var icon = document.getElementsByClassName("fa")[0];

	  	sidebar.className == "sidebar center shide" ? sidebar.className = "sidebar center" : sidebar.className = "sidebar center shide";
	  	ulbar.className == "ulbar fhide" ? ulbar.className = "ulbar" : ulbar.className = "ulbar fhide";
	  	icon.className == "fa fa-bars" ? icon.className = "fa fa-times" : icon.className = "fa fa-bars";
	  });
    };

    var letters = function(){
    	var idname = document.getElementsByClassName("letters")[0].children[0].className;
		var phrase = document.getElementsByClassName("letters")[0].children[0].innerHTML;
		document.getElementsByClassName("letters")[0].children[0].innerHTML = "";
		var repeat = parseInt(document.getElementsByClassName("letters")[0].dataset.letter);
		var appendTo = document.getElementsByClassName(idname)[0];

		for(var i =0; i< phrase.length; i++){
 			var letterDiv = document.createElement('span');
 			letterDiv.id = idname + (i%repeat).toString();
 			letterDiv.innerHTML = phrase[i];
 			document.getElementsByClassName(idname)[0].appendChild(letterDiv);
		};

    };

	var setupUbe = function(){
	    setUpSections();
   		setAllWidth(".slide");
	    slideShow();
	    imageBound('.bound', 400);
		setNavigation();
   		letters();

	// window.addEventListener("orientationchange", function() {
	// 	// Announce the new orientation number
	// 	location.reload();
	// }, false);
	window.addEventListener("resize", function(){
	  setHeight();
	  slideShow();
	  setAllWidth(".slide");
	}, false);

};