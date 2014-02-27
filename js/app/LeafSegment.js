define(['three', 'app/SegmentDictionary'], function (THREE, SegmentDictionary) {

	Math.TAU = 2 * Math.PI;

	function LeafSegment() {};

	LeafSegment.prototype = Object.create(Object.prototype, {
		init: {value: function (depth, length, thickness) {
			var vertexCount = 20;
			this.geometry = new THREE.Geometry();

			for (var i = 0; i < vertexCount; ++i)	{
				var alpha = Math.TAU * i / 8;

				var v = new THREE.Vector3(Math.cos(alpha), Math.sin(alpha), 0);

				v.y += 1; // place the bottom of the circle at [ 0, 0 ]
				v.x *= Math.abs(v.x);
				v.x *= (2 - v.y); // create the leaf outline
				v.y *= 1.618; // stretch the length
				this.geometry.vertices.push(v);
			}

			for (var j = 1; j < vertexCount - 1; ++j) {
				this.geometry.faces.push(new THREE.Face3(0, j, j + 1));
			}

			this.material = new THREE.MeshBasicMaterial({color:0x55dd88})
			this.material.side = THREE.DoubleSide;

			this.mesh = new THREE.Mesh(this.geometry, this.material);

			this.mesh.scale = new THREE.Vector3(20,20,20);

			this.sceneNode = new THREE.Object3D();

			this.sceneNode.add(this.mesh);

			return this;
		}}
	});

	LeafSegment.prototype.constructor = LeafSegment;

	SegmentDictionary.L = LeafSegment;

	return LeafSegment;
});