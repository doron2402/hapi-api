
const Joi = require('joi');
const Hoek = require('hoek');

exports.register = function (server, options, next) {

  options = Hoek.applyToDefaults({ basePath: '' }, options);

  server.route({
    method: 'GET',
    path: options.basePath + '/users',
    config: {
      validate: {
        query: {
          limit: Joi.number().min(1).max(100).default(20),
          offset: Joi.number().min(1).max(100).default(1),
        }
      }
    },
    handler: function (request, reply) {
      var limit = request.query.limit;
      var offset = request.query.offset;

      return reply({
        code: 'ok',
        limit: limit,
        offset: offset,
        body: {}
      });
    }
  });

  server.route({
    method: 'GET',
    path: options.basePath + '/test',
    handler: function (request, reply) {
       reply.view('test', { title: 'testing app' });
    }
  })


    next();
};


exports.register.attributes = {
    name: 'api/users'
};
