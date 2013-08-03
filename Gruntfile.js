'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    qunit: {
      files: ['test/unit/**/*.html']
    },
    jshint: {
      src: ['dist/**/*.js']
    },
    sass: {
      options: {
        cacheLocation: 'test/build/.sass-cache',
        loadPath: [
          'components/fe-lat-global/dist/styles'
        ]
      },
      dist: {
        src: ['dist/styles/*.scss'],
        dest: 'test/build/nav.css'
      }
    },
    watch: {
      sass: {
        files: [
          '../components/fe-lat-global/dist/styles/*.scss',
          'dist/styles/*.scss'
        ],
        tasks: ['sass'],
      }
    },
    connect: {
      development: {
        options: {
          keepalive: false
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['jshint', 'sass:dist', 'qunit']);
  grunt.registerTask('server', ['sass:dist', 'connect', 'watch:sass']);
};
