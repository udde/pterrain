var THREE = require('three');

module.exports = function(){
    

var x = 10;
var geometry = new THREE.BufferGeometry();

var vertexPositions = [
	[-1.0, -1.0,  1.0],
	[ 1.0, -1.0,  1.0],
	[ 1.0,  1.0,  1.0],

	[ 1.0,  1.0,  1.0],
	[-1.0,  1.0,  0.0],
	[-1.0, -1.0,  1.0]
];

var vertices = new Float32Array( vertexPositions.length * 3 );

for ( var i = 0; i < vertexPositions.length; i++ )
{
	vertices[ i*3 + 0 ] = vertexPositions[i][0];
	vertices[ i*3 + 1 ] = vertexPositions[i][1];
	vertices[ i*3 + 2 ] = vertexPositions[i][2];
}
console.log(vertices)
geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var mesh = new THREE.Mesh( geometry, material );

return mesh;
}