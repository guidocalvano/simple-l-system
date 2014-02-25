define(['three'], function (THREE) {

	function BranchSegment() {}

	BranchSegment.prototype = Object.create(Object.prototype, {
		init: {value: function (length, thickness) {

			// Creates a mesh for a branch.

			var radius = .6 * thickness;

			this.material = new THREE.MeshBasicMaterial({color:0x331111})

			this.stem = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, 8, 1, false), this.material);
			this.stem.position.y = length * .5;
			this.tip = new THREE.Mesh(new THREE.SphereGeometry(radius, 4, 4), this.material);
			this.tip.position.y = length;

			this.sceneNode = new THREE.Object3D();
			this.sceneNode.add(this.stem);
			this.sceneNode.add(this.tip);

			this.childrenNode = new THREE.Object3D();
			this.childrenNode.position.y = length;
			this.sceneNode.add(this.childrenNode);

			return this;
		}}
	})

	BranchSegment.prototype.constructor = BranchSegment;

	return BranchSegment;
});