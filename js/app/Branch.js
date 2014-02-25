define(['three', 'app/BranchSegmentA', 'app/BranchSegmentB'], function (THREE, BranchSegmentA, BranchSegmentB) {
	function Branch() {}

	Branch.prototype = Object.create(Object.prototype, {
		init: {value: function () {
			// All Branch really has to do is to create a BranchSegmentA with the right depth, length and thickness.
			this.sceneNode = new THREE.Object3D();

			this.root = (new BranchSegmentA()).init(11, 200, 20);

			this.sceneNode.add(this.root.sceneNode);

			return this;
		}}
	});

	Branch.prototype.constructor = Branch;

	return Branch;
});