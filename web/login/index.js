
const Joi = require('joi');
const Hoek = require('hoek');

exports.register = function (server, options, next) {

  options = Hoek.applyToDefaults({ basePath: '' }, options);

  server.route({
    method: 'GET',
    path: '/login',
    handler: function (request, reply) {
      reply.view('login/index', { title: 'user login page' });
    }
  });

  server.route({
    method: 'POST',
    path: '/login',
    config: {
      validate: {
        payload: {
          username: Joi.string().required(),
          password: Joi.string().required()
        }
      }
    },
    handler: function (request, reply) {
      reply({ code: 'ok', body: request.payload });
    }
  });
    next();
};


exports.register.attributes = {
    name: 'web/login'
};
