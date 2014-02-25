Goal

	- To show I understand recursion
	- To show I understand threejs
	- To show I understand requirejs
	- In little time

Overview

	This is an L-system written in three js.

	It follows the following pattern:

		http://en.wikipedia.org/wiki/L-system#Example_1:_Algae

	js/BranchSegmentA corresponds to the A node
	js/BranchSegmentB corresponds to the B node

	An important issue to understand is that the nodes are cyclicly dependent. In a normal 
	javascript environment without requirejs this is a trivial problem to solve, but with 
	requirejs this does force thought.

	If A nodes defined in file A.js create B nodes defined in file B.js, and vice versa
	then requirejs must load A.js before B.js and B.js before A.js which is impossible.

	To solve this, BranchSegmentA and BranchSegmentB register their constructor function
	as members on the base class when their files are loaded.

	Branch.js now loads all the files containing L-system nodes before instantiating the
	first L-system nodes. Because all the L-system files have been loaded, they've all
	had the time to register themselves in BranchSegment. So all L-system nodes can now
	use BranchSegment to construct the other nodes.

STARTING POINT

	index.html is just a boiler plate skeleton that invokes main.js.
	From main.js one can follow how the application is started.