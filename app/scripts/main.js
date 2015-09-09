$(document).ready(function ($) {
        var options = { 

        	$AutoPlay: true,
        	 $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2,
                $AutoCenter: 2
            },
            $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $ChanceToShow: 5,            
                $AutoCenter: 2,
                $DisplayPieces: 5,
                $DisableDrag: true

            }


        };
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
    });