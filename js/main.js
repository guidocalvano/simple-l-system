require.config({
	baseUrl: '/~guidocalvano/algae/js',
	shim: {
		three: {
			init: function() {

				return THREE;
			}
		}
	},
	paths: {
		three: 'lib/three',
		jquery: 'lib/jquery-2.1.0.min'
	}
});

require(['jquery', 'app/ThreeContext', 'app/Branch'], function ($, ThreeContext, Branch) {
	$(document).ready(function () {

		var tc = new ThreeContext().init();

		var sv = new Branch().init();

		tc.root.add(sv.sceneNode);

		tc.render();
	});
});