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
          plugin: 'lout'
        },
        {
          plugin: 'vision'
        },
        {
          plugin: {
            register: './api/users',
            options: {
              basePath: '/api'
            }
          }
        }
    ]
};


module.exports = manifest;
