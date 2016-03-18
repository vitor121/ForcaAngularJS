angular.module("jogo", []).controller("forca", function($scope) {
  $scope.palavraSortiada = {
    dica: "Heroi milionario que tinha medo de morcegos",
    resposta: "batman"
  }

  $scope.parcial = new Array($scope.palavraSortiada.resposta.length);
  for (var i = 0; i < $scope.palavraSortiada.resposta.length; i++) {
    $scope.parcial[i] = "_"
  }
  $scope.letra = function(key) {
    console.log(key);

    for (var i = 0; i < $scope.palavraSortiada.resposta.length; i++) {
      if ($scope.palavraSortiada.resposta[i] == key) {
        $scope.parcial[i] = key;
      }

    }
  }


});
