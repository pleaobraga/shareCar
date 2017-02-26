module.exports = function (grunt){
  grunt.initConfig({
    connect:
    {
      server:
      {
        options:
        {
          hostname: 'localhost',
          port: 9000,
          keepalive: true,
          livereload: true
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default',['connect']);

}
