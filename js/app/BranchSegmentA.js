define(['three', 'app/BranchSegment', 'app/LeafSegment','app/SegmentDictionary'], function (THREE, BranchSegment, LeafSegment, SegmentDictionary) {

	function BranchSegmentA() {}

	BranchSegmentA.prototype = Object.create(Object.prototype, {
		init: {value: function (depth, length, thickness) {

			// Invoking the parent constructor creates the mesh and a point to mount children.
			BranchSegment.prototype.init.call(this, length, thickness);

			// But we still have to create points where we can mount other nodes.
			// This node has a child of type BranchSegmentA oriented in a specific direction...

			this.childANode = new THREE.Object3D();
			this.childANode.rotation.z = .2 * Math.PI + .05 * Math.random();

			this.childANode.rotation.y = -.6 * Math.PI + .05 * Math.random();

			this.childrenNode.add(this.childANode);

			// ...and a child of type BranchSegmentB oriented in a another direction
			this.childBNode = new THREE.Object3D();
			this.childBNode.rotation.z = -.2 * Math.PI + .05 * Math.random();

			this.childrenNode.add(this.childBNode);

			// I deeper nodes must still be created, create them after a random amount of time.
			if (depth > 0) {
				// Note that each child is a little shorter and thinner.
				setTimeout((function () {

					var childA = (new SegmentDictionary.A()).init(depth - 1, length - .4 * length * Math.random(), thickness - .4 * thickness * Math.random());

					this.childANode.add(childA.sceneNode);
				}).bind(this), 200 + 400 * Math.random());

				setTimeout((function () {

					var childB = (new SegmentDictionary.B()).init(depth - 1, length - .4 * length * Math.random(), thickness - .4 * thickness * Math.random());

					this.childBNode.add(childB.sceneNode);

				}).bind(this), 200 + 400 * Math.random());
			} else {
				var leaf = (new LeafSegment()).init();

				this.childrenNode.add(leaf.sceneNode);
			}
			return this;
		}}
	})

	BranchSegmentA.prototype.constructor = BranchSegmentA;

	SegmentDictionary.A = BranchSegmentA;

	return BranchSegmentA;
});