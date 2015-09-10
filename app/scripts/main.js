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
<<<<<<< HEAD
                $AutoCenter: 2,
                $DisplayPieces: 5,
                $DisableDrag: true
=======
                // $AutoCenter: 2,
                $DisplayPieces: 5

>>>>>>> 931ec38cf6c5623cf4ab567e739189a51083ee2e
            }
        };
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);
    });