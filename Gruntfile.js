module.exports = (grunt) => {

  // grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    exec: {
      install_deps: {
        cwd: 'appointments',
        cmd: 'npm install',
        notify: 'echo "npm install complete?"',
      },
      other_deps: {
        cwd: 'reviews',
        cmd: 'npm install',
        notify: 'isntalled npm deps for reviews',
      },
    },
    concat: {
   
      dist: {
        
        src: [
        'appointments/public/dist/bundle.js'
        ],

        dest: 'public/built.js',
      },
    },

  });

  
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', 'this is the help answer!', ['concat', /*'run', 'exec', 'express',*/ ]);
};