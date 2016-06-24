'use strict';

const manifest = {
    connections: [
      {
        port: 8000,
        labels: ['web']
      }
    ],
    registrations: [
        {
            plugin: 'vision'
        },
        {
            plugin: {
                register: 'visionary',
                options: {
                    engines: { 'html': 'handlebars' },
                    path: 'web/views',
                    partialsPath: 'web/partials',
                    relativeTo: __dirname
                }
            }
        },
        {
          plugin: {
            register: './api/users',
            options: {
              basePath: '/api'
            }
          }
        },
        {
          plugin: {
            register: './api/home',
            options: {}
          }
        },
        {
          plugin: {
            register: './web/login',
            options: {}
          }
        },
    ]
};


module.exports = manifest;
