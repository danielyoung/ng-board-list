var widgets = angular.module('-.widgets');

widgets.directive('wList',
  ['$io', '$timeout'
  , function ($io, $timeout){
    var dirObj = {
      restrict: 'EA',
      scope: {
        eventName: '@listenTo',
        limit: '@limit'
      },

      replace: false,
      template: '<ul class="{{eventName}}_list"><li ng-repeat="item in items">{{item}}</li></ul>',

      link: {
        pre: function (scope, iElement, iAttrs) {},
        post: function (scope, iElement, iAttrs) {
          var items = [];
          $io.$on(iAttrs.listenTo, function (data) {
            items.unshift(data);
            items.splice(scope.limit, 1);
            scope.items = items;
          });
        }
      }
    };
    return dirObj;
  }]
);