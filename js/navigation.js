//var admin_url = "http://wohlig.co.in/powerforone/index.php/";
var admin_url = "http://localhost/powerforone/index.php/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Explore projects",
         classis: "",
        link:"#/explore/0",
        subnav: []
    }, {
        name: "How it works",
        active: "",
        link:"#/works",
        subnav: []
    }, {
        name: "The fellowship",
        classis: "",
        link:"#/fellowship",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
         displayfrmdb:function(callback)
          {
              var category = 0;  
              $http.get(admin_url+ 'json/getprojectbycategory?category=' + category,{}).success(callback);
          },
         viewstaticpage:function(id)
          { 
              return $http.get(admin_url+ 'json/viewstaticpage?id=' + id,{});
          },
         authenticate:function(id)
          { 
              return $http.get(admin_url+ 'json/authenticate',{});
          },
         getstaticpages:function()
          { 
              return $http.get(admin_url+ 'json/getstaticpages',{});
          },
         getallproject:function(category)
          { 
              return $http.get(admin_url+ 'json/getprojectbycategory?category=' + category,{});
          },
         getsinglestaticpage:function(id)
          { 
              return $http.get(admin_url+ 'json/getsinglestaticpage?id=' + id,{});
          },
         displaytestmonial:function(callback)
          {
             
              $http.get(admin_url+ 'json/viewtestimonialjson').success(callback);
          },
         getallcategory:function()
          {
             
              return $http.get(admin_url+ 'jsonbyavi/getallcategory',{});
          },
         logout:function()
          {
             
              return $http.get(admin_url+ 'json/logout',{});
          },
         getsingleproject:function(id,callback)
          {
             
              $http.get(admin_url+ 'json/getsingleproject?id='+id).success(callback);
          },
         login:function(user)
          {
             return $http({
                url: admin_url + "json/login",
                method: "POST",
                data: {
                    'email': user.email,
                    'password': user.password
                }
            });
          },
         register:function(user)
          {
             return $http({
                url: admin_url + "json/register",
                method: "POST",
                data: {
                    'name': user.name,
                    'email': user.email,
                    'password': user.password
                }
            });
          },
        makeactive: function(menuname) {
            for(var i=0;i<navigation.length;i++) {
                if(navigation[i].name==menuname)
                {
                    navigation[i].classis="active";
                }
                else {
                    navigation[i].classis="";
                }
            }
            return menuname;
        },
        
    }
});