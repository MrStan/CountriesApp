// CONTROLLERS
countriesApp.controller('countriesController', function ($scope, $http) {
    $scope.results = '';
    var url = 'https://restcountries.eu/rest/v2/all';
    $http.get(url).
        then(
            function onSuccess(response) {
                $scope.results = response.data;
            });
});

countriesApp.controller('countryController', function ($scope, $http, $routeParams) {
    $scope.result = '';
    $scope.borderingCountries = [];

    var url = 'https://restcountries.eu/rest/v2/name/' + $routeParams.country;
    $http.get(url).
        then(
            function onSuccess(response) {
                $scope.result = response.data[0];
                for (i = 0; i <= $scope.result.borders.length; i++) {
                    if ($scope.result.borders[i] != undefined) {
                        var url = 'https://restcountries.eu/rest/v2/alpha/' + $scope.result.borders[i];
                        $http.get(url).
                            then(
                                function onSuccess(response) {
                                    $scope.borderingCountries.push(response.data);
                                }
                            )
                    }
                };
            });
});