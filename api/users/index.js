
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
              limit: Joi.number().default(20),
              offset: Joi.number().default(1)
            }
          }
        },
        handler: function (request, reply) {
          var limit = request.query.limit;
          var page = request.query.page;

          return reply({
            code: 'ok',
            limit,
            offset,
            body: {}
          });
        }
    });


    next();
};


exports.register.attributes = {
    name: 'users'
};
