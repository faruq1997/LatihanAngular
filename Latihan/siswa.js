var app = angular.module('appSiswa', []);
app.controller('ctrlSiswa', function ($scope) {
    $scope.datasiswa = siswa;

    $scope.urutkan = function (ordvar, by) {
        by = !by;
        $scope.ord = ordvar;
        $scope.ordstatus = by;
        return by;
    }
});
var siswa = [{
        nama: "Faruq Aziz",
        nim: '11151503',
        ipk: 3.50
    },
    {
        nama: 'Faruq',
        nim: '11151502',
        ipk: 3.90
    },
    {
        nama: 'Aziz',
        nim: '11151501',
        ipk: 3.80
    },
    {
        nama: 'Abdul',
        nim: '11151504',
        ipk: 3.88
    },
    {
        nama: 'Zakaria',
        nim: '11151505',
        ipk: 3.88
    },
    {
        nama: 'Muhammad',
        nim: '11151506',
        ipk: 3.81
    },
    {
        nama: 'Hari Darmawan',
        nim: '11151507',
        ipk: 3.86
    },
    {
        nama: 'Ichwan Faturrahman',
        nim: '11151508',
        ipk: 3.87
    },
    {
        nama: 'Devi Septiani',
        nim: '11151509',
        ipk: 3.89
    },
    {
        nama: 'Vemilia Rahmasari',
        nim: '11151510',
        ipk: 3.9
    },
    {
        nama: 'Hamid Kurniawan',
        nim: '11151511',
        ipk: 3.99
    }
];