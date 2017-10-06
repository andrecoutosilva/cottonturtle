// Define the `cottonTurtleApp` module
var cottonTurtleApp = angular.module('cottonTurtleApp', []);
var quilts2017pv = "images/2017/quilts/quilts.json";
var quilts2017oi = "images/2017oi/quilts/quilts.json";

// Define the `MainController` controller on the `phonecatApp` module
cottonTurtleApp.controller('MainController', function MainController($scope) {
    
    // Controller Variables.
    $scope.quilts = [];
    
    // Data collection with all the images.
    var quiltsDatabase;

    // initializes the view, loading up all the necessary data.
    (function initialize() {
        

        readTextFile(quilts2017oi, function(text){
        
            quiltsDatabase = JSON.parse(text);        
        
            $scope.quilts.length = 0;

            // Group data in arrays of two.
            for(var i = 0; i < quiltsDatabase.length; i++) {

                obj = quiltsDatabase[i];
                if (i%2 === 0) {
                    $scope.quilts.push([obj]);
                } else {
                    $scope.quilts[Math.floor(i/2)].push(obj);
                }
            }

            // refresh the view.
            $scope.$apply();
        });
    })();

    $scope.thumbnailClick = function(clickedIndex) {

        var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options;
                            
        // define options (if needed)
        options = {
            // optionName: 'option value'
            // for example:
            index: clickedIndex - 1 // start at first slide
        };

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, quiltsDatabase, options);
        gallery.init();
    };
});