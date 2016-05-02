/*
* Procedurally generate height data for a "random" terrain using simplex noise
* return a buffer geometry with 'per triangle attributes' to the vertices
*/
var math = require('mathjs');

function swap(arr, i, j){

}
function sort(arr){

}

function terrainGeometry() {

    var geometry = new THREE.BufferGeometry();
    var vertexData = generateTerrainData(0, 0);
    geometry.addAttribute( 'position', new THREE.BufferAttribute( vertexData.aPositionData, 3 ) );
    geometry.addAttribute( 'normal', new THREE.BufferAttribute( vertexData.aNormalData, 3 ) );

    //stupid way of calculating triangle height max/min values
    var h = Float32Array.from(vertexData.aTriangleHeightData);

    //Bugg - hardcode the values
    //this only works in chrome atm...
    // h.sort();
    // var hMax = h[h.length-1]; var hMin = h[0];
    var hMax = 247.1935272216797;
    var hMin = -145.72349548339844;
    // debugger;

    vertexData.aTriangleHeightData.forEach(function(val, index, array){
        array[index] += math.abs(hMin);
        array[index] /= ( math.abs(hMin) + math.abs(hMax) );
    });

    geometry.addAttribute( 'triangleHeight', new THREE.BufferAttribute( vertexData.aTriangleHeightData, 1 ) );

    return geometry;
}

//generate the plane geometry. push the y positions with the height function and calculate normals
function generateTerrainData(resX, resY) {

    var gridResX = resX, gridResY = resY;
    gridResX = 200, gridResY = 200;
    var xScale = 16, yScale = 16;
    var offsetX = 0, offsetY = 0;
    var totalSquareSize = 18;
    var totalDataSize = totalSquareSize * gridResX * gridResY;
    var nVertices = totalSquareSize * gridResX * gridResY / 3;
    var aPositionData = new Float32Array(totalDataSize);
    var aNormalData = new Float32Array(totalDataSize);
    var aTriangleHeightData = new Float32Array(nVertices);
    var triangleHeightDataPos = 0;
    var i = 0;

    var xh = gridResX / 2;
    var yh = gridResY / 2;
    for (var X = -xh; X < xh; X++)
    for (var Y = -yh; Y < yh; Y++, i += totalSquareSize) {

        var x = X  * xScale;
        var y = Y  * yScale;

        aPositionData[i   ] = x
        aPositionData[i+2 ] = y
        aPositionData[i+1 ] = getHeight(aPositionData[i] + offsetX, aPositionData[i + 2] + offsetY)

        aPositionData[i+3 ] = x
        aPositionData[i+5 ] = y+yScale
        aPositionData[i+4 ] = getHeight(aPositionData[i + 3] + offsetX, aPositionData[i + 5] + offsetY)

        aPositionData[i+6 ] = x+xScale
        aPositionData[i+8 ] = y
        aPositionData[i+7 ] = getHeight(aPositionData[i + 6] + offsetX, aPositionData[i + 8] + offsetY)

        var triangleHeight1 = (aPositionData[i+1] + aPositionData[i+4] + aPositionData[i+7]) / 3 ;

        var normal1 = math.cross([
            aPositionData[i + 3] - aPositionData[i + 0],
            aPositionData[i + 4] - aPositionData[i + 1],
            aPositionData[i + 5] - aPositionData[i + 2]
        ],[
            aPositionData[i + 6] - aPositionData[i + 3],
            aPositionData[i + 7] - aPositionData[i + 4],
            aPositionData[i + 8] - aPositionData[i + 5]
        ]);

        aPositionData[i+ 9] = x+xScale
        aPositionData[i+11] = y
        aPositionData[i+10] = getHeight(aPositionData[i + 9] + offsetX, aPositionData[i + 11] + offsetY)

        aPositionData[i+12] = x
        aPositionData[i+14] = y+yScale
        aPositionData[i+13] = getHeight(aPositionData[i + 12] + offsetX, aPositionData[i + 14] + offsetY)

        aPositionData[i+15] = x+xScale
        aPositionData[i+17] = y+yScale
        aPositionData[i+16] = getHeight(aPositionData[i + 15] + offsetX, aPositionData[i + 17] + offsetY)

        var tirangleHeight2 = (aPositionData[i+10] + aPositionData[i+13] + aPositionData[i+16]) / 3;

        aTriangleHeightData[triangleHeightDataPos + 0] = triangleHeight1;
        aTriangleHeightData[triangleHeightDataPos + 1] = triangleHeight1;
        aTriangleHeightData[triangleHeightDataPos + 2] = triangleHeight1;
        aTriangleHeightData[triangleHeightDataPos + 3] = tirangleHeight2;
        aTriangleHeightData[triangleHeightDataPos + 4] = tirangleHeight2;
        aTriangleHeightData[triangleHeightDataPos + 5] = tirangleHeight2;
        triangleHeightDataPos += 6;

        //calc the second normal
        var normal2 = math.cross([
            aPositionData[i + 12] - aPositionData[i +  9],
            aPositionData[i + 13] - aPositionData[i + 10],
            aPositionData[i + 14] - aPositionData[i + 11]
        ],[
            aPositionData[i + 15] - aPositionData[i + 12],
            aPositionData[i + 16] - aPositionData[i + 13],
            aPositionData[i + 17] - aPositionData[i + 14]
        ]);

        // //fill the normal data-array with the 2 normals
        for (var ii = 0; ii < totalSquareSize; ii += 3) {
            if ( ii < 9 ) {
                aNormalData[ii + i + 0] = normal1[0];
                aNormalData[ii + i + 1] = normal1[1];
                aNormalData[ii + i + 2] = normal1[2];
            }
            else {
                aNormalData[ii + i + 0] = normal2[0];
                aNormalData[ii + i + 1] = normal2[1];
                aNormalData[ii + i + 2] = normal2[2];
            }
        }
    }

    var returnData = {
        aPositionData: aPositionData,
        aNormalData: aNormalData,
        aTriangleHeightData: aTriangleHeightData,

        nVertices: nVertices
    };
    return returnData;
}


var simplexNoise = require('../js/simplexNoiseModified.js');
var simplex = new simplexNoise();

function getHeight(x ,y)
{
    var f = 0.125 / (128 * 1.0) ;
    var s = 2.0 * 16 / 0.9;
    var height = s * simplex.noise2D(1.16*f*x,1.0*f*y); //a

    var d = math.sqrt(x*x + y*y);
    var b = 50*16;

    if(d > b ){
        var dd = 1.0 + (d-b)*0.01;
        height /= math.min(dd, 8); //
    }

    s = s/2;
    f = f*2;
    height += s * simplex.noise2D(f*x, f*y);

    height =  height > 0.0 ? height * (math.pow(height, 0.5)) : height *0.8;

    for (var i = 0; i < 2; i++) {
        s = s/2;
        f = f*2;
        height += s * simplex.noise2D(f*x, f*y);
    }

    //boost hills to mountains
    var hl = 80.0;
    if(height > hl)
        height += 0.3*(height - hl)

    //add depth to and variation/islands/cpaes to water
    var wl = 6.0;
    if(height < -wl)
        height += 3*(height + wl)

    for (var i = 0; i < 3; i++) {
        s = s/1.25;
        f = f*2;
        height += s * simplex.noise2D(f*x, f*y);
    }

    return height;
}
