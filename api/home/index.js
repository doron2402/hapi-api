exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      return reply({
        code: 'ok',
        body: {}
      });
    }
  });

  next();
};


exports.register.attributes = {
    name: 'api/home'
};
