define(['three'], function (THREE) {
	/*
	 Boiler plate of all threejs related stuff
	*/
	function ThreeContext() {};

	ThreeContext.prototype = Object.create(Object.prototype, {
		init: {value: function () {
			// Create the scene, a root object so the whole scene can be manipulated, camera, lights etc.
			this.scene = new THREE.Scene();

			this.root = new THREE.Object3D();
			this.scene.add(this.root);

			this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 4000 );

			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( this.renderer.domElement );

			this.camera.position.z = 1500;
			this.camera.position.y = 500;

			var light = new THREE.AmbientLight( 0x404040 ); // soft white light
			this.scene.add( light );

			var light = new THREE.PointLight( 0xffffff, 100, 10000 );
			light.position.set( 50, 50, 50 );
			this.scene.add( light );

			return this;
		}},

		render: {value: function () {
			// Keeps animation going using requestAnimationFrame.
			// Also rotates the whole scene continuously.
			requestAnimationFrame(this.render.bind(this));
			this.root.rotation.y = Date.now() * 2 * Math.PI / 6000;
			this.renderer.render(this.scene, this.camera);

		}}
	});

	ThreeContext.prototype.constructor = ThreeContext;

	return ThreeContext;
});