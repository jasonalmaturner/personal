var app = angular.module('personal');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'Mjr7iYuWTLCnjC8OqgtH56qqbYk67p4zYB3yCIJl', 'X-Parse-REST-API-Key': 'C4CzUPo3ziolUgBxt52AIonVvg2OGmWOfLSiYZ3m'}
      return config;
    }
  };
});