
app.service('MyServ', ['$resource', function ($resource) {
        this.consultaAjax = function () {
            return $resource('resp.php/imagen/:id', null, {
                'update': {method: 'PUT\n\
'}
            });
        };
    }]);
