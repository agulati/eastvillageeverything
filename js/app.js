var app = angular.module('eastVillageEverything', ['ngSanitize']);

app.controller('tagsController', [ '$scope', '$http', function($scope, $http) {
  $http.get("http://54.84.219.81:8000/api/tags").success( function (tags) {
    $scope.tags = tags
  })
}])

app.controller('placesController', [ '$scope', '$http', '$sanitize', function($scope, $http, $sanitize) {
  $http.get("http://54.84.219.81:8000/api/places").success( function (places) {
    $scope.places = _.map(places, function (place) {
      place.displayPhone = formatLocal("US", place.phone)
      place.tags = !!place.tags ? place.tags.join(" ") : ""
      return place
    })
  })
}])
