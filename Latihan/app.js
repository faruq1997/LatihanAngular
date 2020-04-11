// inisiasi angular
const app = angular.module('xapp', []);
// inisiasi untuk controllernya
app.controller('xctrl', function ($scope) {
    $scope.operate = function (param) {
        //simbol + untuk memberitahu sistem bahwa ini adalah angka
        var a = +$scope.obj1;
        var b = +$scope.obj2;
        switch (param) {
            case "tambah":
                $scope.operasi = "PENJUMLAHAN";
                $scope.hasil = a + b;
                break;
            case "kurang":
                $scope.operasi = "PENGURANGAN";
                $scope.hasil = a - b;
                break;
            case "kali":
                $scope.operasi = "PERKALIAN";
                $scope.hasil = a * b;
                break;
            case "bagi":
                $scope.operasi = "PEMBAGIAN";
                $scope.hasil = a / b;
                break;
        }

    };
});