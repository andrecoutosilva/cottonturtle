// Define the `cottonTurtleApp` module
var cottonTurtleApp = angular.module('cottonTurtleApp', []);

// Define the `MainController` controller on the `phonecatApp` module
cottonTurtleApp.controller('MainController', function MainController($scope) {
    
    var init = function() {

        $scope.quilts = [];

        for(var i = 0; i < galleryItems.length; i++) {

            obj = galleryItems[i];
            if (i%2 == 0) {
                $scope.quilts.push([obj]);
            } else {
                $scope.quilts[Math.floor(i/2)].push(obj);
            }
        }
    };

    $scope.thumbnailClick = function(clickedIndex) {

        var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options;
                            
        // define options (if needed)
        var options = {
            // optionName: 'option value'
            // for example:
            index: clickedIndex - 1 // start at first slide
        };

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, galleryItems, options);
        gallery.init();
    };

    var galleryItems = [ 
        {
            name : 'Morgan Azul Anis',
            title : 'Morgan Azul Anis',
            year : '2017',
            filename: '01_morganazul.jpg',
            src: 'images/2017/01_morganazul.jpg',
            datasize: '',
            index: 1,
            w: 2126,
            h: 1419,
        } , {
            name : 'Morgan Bege',
            title : 'Morgan Bege',
            year : '2017',
            filename: '01_morganbege.jpg',
            src: 'images/2017/01_morganbege.jpg',
            datasize: '',
            index: 2,
            w: 2126,
            h: 1419,
        } , {
            name : 'Morgan Rosa',
            year : '2017',
            filename: '01_morganrosa.jpg',
            src: 'images/2017/01_morganrosa.jpg',
            datasize: '',
            index: 3,
            w: 2126,
            h: 1419,
        } , {
            name : 'Morgan Verde',
            year : '2017',
            filename: '01_morganverde.jpg',
            src: 'images/2017/01_morganverde.jpg',
            datasize: '',
            index: 4,
            w: 2126,
            h: 1419,
        } , {
            name : 'Woman Bege',
            year : '2017',
            filename: '02_womanbege.jpg',
            datasize: '',
            src: 'images/2017/02_womanbege.jpg',
            index: 5,
            w: 2126,
            h: 1496,
        } , {
            name : 'Woman Bordo',
            year : '2017',
            filename: '02_womanbordo.jpg',
            src: 'images/2017/02_womanbordo.jpg',
            datasize: '',
            index: 6,
            w: 2126,
            h: 1496,
        } , {
            name : 'Woman Branco',
            year : '2017',
            filename: '02_womanbranco.jpg',
            src: 'images/2017/02_womanbranco.jpg',
            datasize: '',
            index: 7,
            w: 2126,
            h: 1496,
        } , {
            name : 'Woman Cinza',
            year : '2017',
            filename: '02_womancinza.jpg',
            src: 'images/2017/02_womancinza.jpg',
            datasize: '',
            index: 8,
            w: 2126,
            h: 1496,
        } , {
            name : 'Akua Azul',
            year : '2017',
            filename: '03_akuaazul.jpg',
            src: 'images/2017/03_akuaazul.jpg',
            datasize: '',
            index: 9,
            w: 2126,
            h: 1515,
        } , {
            name : 'Akua Bege',
            year : '2017',
            filename: '03_akuabege.jpg',
            src: 'images/2017/03_akuabege.jpg',
            datasize: '',
            index: 10,
            w: 2126,
            h: 1515,
        } , {
            name : 'Akua Branco',
            year : '2017',
            filename: '03_akuabranco.jpg',
            src: 'images/2017/03_akuabranco.jpg',
            datasize: '',
            index: 11,    
            w: 2126,
            h: 1515,        
        } , {
            name : 'Akua Cinza',
            year : '2017',
            filename: '03_akuacinza.jpg',
            src: 'images/2017/03_akuacinza.jpg',
            datasize: '',
            index: 12,       
            w: 2126,
            h: 1515,            
        }
    ];

    init();
});