
app.service('MyServ', ['$resource', function ($resource) {
        this.consultaAjax = function () {
            return $resource('resp.php/pokem/:id', null, {
                'update': {method: 'PUT\n\
'}
            });
        };
    }]);
