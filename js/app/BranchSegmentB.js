define(['three', 'app/BranchSegment', 'app/SegmentDictionary'], function (THREE, BranchSegment, SegmentDictionary) {

	function BranchSegmentB() {}

	BranchSegmentB.prototype = Object.create(Object.prototype, {
		init: {value: function (depth, length, thickness) {

			// Invoking the parent constructor creates the mesh and a point to mount children.

			BranchSegment.prototype.init.call(this, length, thickness);

			// But we still have to create points where we can mount other nodes.
			// This node has a child of type BranchSegmentA oriented in a semi random direction.
			this.childANode = new THREE.Object3D();

			this.childANode.rotation.z = .2 * Math.PI;
			this.childANode.rotation.y = .6 * Math.PI;

			this.childrenNode.add(this.childANode);

			// I deeper nodes must still be created, create them after a random amount of time.
			if (depth > 0) {

				setTimeout((function () {
					// The child is a little shorter and thinner.

					var childA = (new SegmentDictionary.A()).init(depth - 1, length - .1 * length * Math.random(), thickness - .1 * thickness * Math.random());

					this.childANode.add(childA.sceneNode);

				}).bind(this), 200 + 400 * Math.random());

			}

			return this;
		}}});

	BranchSegmentB.prototype.constructor = BranchSegmentB;

	console.log('assigning b');
	SegmentDictionary.B = BranchSegmentB;

	return BranchSegmentB;
});