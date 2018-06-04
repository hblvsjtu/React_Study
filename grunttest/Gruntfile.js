/* ***************************************************************
  *
  * * Filename: Gruntfile.js
  *
  * * Description:Configure the Grunt job
  *
  * * Version: 1.0
  *
  * * Created: 2018/06/03
  *
  * * Revision: none
  *
  * * Compiler: node
  *
  * * Author: Lv Hongbin
  *
  * * Company: Shanghai JiaoTong Univerity
  *
 /* **************************************************************/

// The "wrapper" function
module.exports = function(grunt) {

  // Do grunt-related things in here
  // Project configuration.
  grunt.initConfig({

    //参考已有的一些设置，避免重复，并且可以有启用插件一些特殊的命令
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
       src: "src/test.js"
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.main %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {

        // 实现多文件压缩
        src: ['<%= pkg.main %>', 'src/test.js', 'build/complied'],
        dest: 'index.min.js',
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).用一个数组把需要运行的插件列出来
  grunt.registerTask('default', ['jshint', 'uglify']);

};
