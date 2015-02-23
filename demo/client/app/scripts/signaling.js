angular.module('phonertcdemo')
  .factory('signaling', function (socketFactory) {
    var socket = io.connect('http://192.168.100.27:8080/');
    
    var socketFactory = socketFactory({
      ioSocket: socket
    });

    return socketFactory;
  })