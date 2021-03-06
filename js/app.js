// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice'
  
]);

firstapp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'views/template.html',
            controller: 'home'
        }).
        when('/works/:id', {
            templateUrl: 'views/template.html',
            controller: 'works'
        }).
        
        
        when('/blog', {
            templateUrl: 'views/template.html',
            controller: 'blog'
        }).
        
        when('/login', {
            templateUrl: 'views/template.html',
            controller: 'login'
        }).
        
        
          when('/register', {
            templateUrl: 'views/template.html',
            controller: 'register'
        }).
        
        when('/checkout', {
            templateUrl: 'views/template.html',
            controller: 'checkout'
        }).
        
        when('/faq', {
            templateUrl: 'views/template.html',
            controller: 'faq'
        }).
        
        
         when('/workwithus/:id', {
            templateUrl: 'views/template.html',
            controller: 'workwithus'
        }).
         when('/teampage', {
            templateUrl: 'views/template.html',
            controller: 'Teampage'
        }).
        
         when('/policy', {
            templateUrl: 'views/template.html',
            controller: 'policy'
        }).
        
         when('/thankyou', {
            templateUrl: 'views/template.html',
            controller: 'thankyou'
        }).
        when('/contactus/:id', {
            templateUrl: 'views/template.html',
            controller: 'Contactus'
        }).
        when('/fellowship', {
            templateUrl: 'views/template.html',
            controller: 'fellowship'
        }).
         when('/aboutUs/:id', {
            templateUrl: 'views/template.html',
            controller: 'aboutUs'
        }).
         when('/explore/:id', {
            templateUrl: 'views/template.html',
            controller: 'Explore'
        }).
        when('/campaign/:id', {
            templateUrl: 'views/template.html',
            controller: 'campaign'
        }).
        when('/myprofile', {
            templateUrl: 'views/template.html',
            controller: 'myprofile'
        }).
         when('/rewards', {
            templateUrl: 'views/template.html',
            controller: 'rewards'
        }).
         when('/termsandcondition', {
            templateUrl: 'views/template.html',
            controller: 'termsandcondition'
        }).
        otherwise({
            redirectTo: '/home'
        });
      
    
  }]);

firstapp.directive('wrapOwlcarousel', function () {  
    return {  
        restrict: 'E',  
        link: function (scope, element, attrs) {  
            var options = scope.$eval($(element).attr('data-options'));  
            $(element).owlCarousel(options);  
        }  
    };  
});  

firstapp.filter('categoryimagepath', function () {
    return function (input) {
        if (input == null) {
            return "http://wohlig.co.in/angular-powerforone/images/categoryimg/childwelfare.jpg";
        } else {
            return "http://wohlig.co.in/powerforone/uploads/" + input;
        }
    };
});

firstapp.filter('testimonialimagepath', function () {
    return function (input) {
        if (input == null) {
            return "http://wohlig.co.in/angular-powerforone/images/face.png";
        } else {
            return "http://wohlig.co.in/powerforone/uploads/" + input;
        }
    };
});

firstapp.filter('projectbannerimagepath', function () {
    return function (input) {
        if (input == null) {
            return "http://wohlig.co.in/angular-powerforone/images/salaam_bombay.png";
        } else {
            return "http://wohlig.co.in/powerforone/uploads/" + input;
        }
    };
});

firstapp.filter('ngoimagepath', function () {
    return function (input) {
        if (input == null || input == '') {
            return "http://wohlig.co.in/angular-powerforone/images/face.png";
        } else {
            return "http://wohlig.co.in/powerforone/uploads/" + input;
        }
    };
});

firstapp.filter('fourletter', function () {
        return function (input) {
            return input.substring(0, 5);

        };
    });
firstapp.filter('rawHtml', ['$sce', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}]);

function partitionarray(myarray, number) {
            var arrlength = myarray.length;
            var newarray = [];
            var j = -1;
            for (var i = 0; i < arrlength; i++) {
                if (i % number == 0) {
                    j++;
                    newarray[j] = [];
                }
                newarray[j].push(myarray[i]);
            }
            return newarray;
        };