
function initMap() {
        var myCenter = new google.maps.LatLng(46.482526, 30.72330958);
        var map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom: 8,
            scrollwheel: false,
            draggable: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: myCenter
        });
      }

$(document).ready(function() {	
		smoothScroll.init({
			offset: 80
		});
	});

$(document).ready(function() {	
		if($('.navbar-onepage .nav a').length > 0){	
			$('.navbar-onepage .nav a').on('click', function(){								
				if ($(window).width() < 991) {
				   $('.btn-navbar').click(); //bootstrap 2.x
					$('.navbar-toggle').click() //bootstrap 3.x by Richard
				}
				else {
				   return;
				}								
			});	
		}	
	});	