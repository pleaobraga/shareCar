module.exports = function (grunt){

  var rewrite = require( "connect-modrewrite" );

  grunt.initConfig({

    connect: {
      options: {
        middleware: function ( connect, options, middlewares ) {
            var rules = [
                "!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif$ /index.html"
            ];
            middlewares.unshift( rewrite( rules ) );
            return middlewares;
        }
    },
      server: {
        options: {
          hostname: '*',
          port: 8080,
          keepalive: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default',['connect']);

}
