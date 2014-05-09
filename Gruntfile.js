module.exports = function(grunt) {
	//Project configuration.

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		//checking js quality

		//less
		less: {
		      dist: {
		        files: [
		          {
		          expand: true,
		          cwd: 'assets/less',
		          src: 'app.less',
		          dest: 'assets/css',
		          ext: '.css'
		          }
		        ],
		        options: {
		          compress: false,
		          yuicompress: true,
		          ieCompat: true,
		          // LESS source map
		          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
		          // sourceMap: true,
		          // sourceMapFilename: '_src/assets/css/app.min.css.map',
		          // sourceMapURL: 'app.min.css.map',
		          // sourceMapBasepath: 'dist',
		          // sourceMapRootpath: '/'

		          // sourceMapFilename: 'css/main.css.map', // where file is generated and located
		          // sourceMapFilename: '_src/css/app.min.css.map',
		          // sourceMapURL: '/assets/css/app.min.css.map',
		          // sourceMapRootpath: ''
		        }
		      }
		},

		//watch
		watch: {
			all: {
				files: 'index.html', //change if you are not watching index
				//options
			},
			//less
			less:{
				files: [
					'assests/less/app.less'
				],
				tasks: ['styles'],
				options: {
					spawn: false,
					livereload: true
				}
			},
		}

	});

	// Load the plugin that provides the tasks.

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('dev', ['watch']);
	grunt.registerTask('styles', ['less']);
	grunt.registerTask('default', ['']);


};