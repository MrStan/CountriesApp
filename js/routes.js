//ROUTES
countriesApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/countries-list.html',
            controller: 'countriesController'
        })

        .when('/:country', {
            templateUrl: 'pages/country-details.html',
            controller: 'countryController'
        })

        $locationProvider.html5Mode(true);
});