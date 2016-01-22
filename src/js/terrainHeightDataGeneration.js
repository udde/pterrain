var math = require('mathjs');

// module.exports = init;

function terrainGeometry() {
   
    var geometry = new THREE.BufferGeometry();
    
    var vertexData = generateTerrainData(100, 100);
    geometry.addAttribute( 'position', new THREE.BufferAttribute( vertexData.aPositionData, 3 ) );
    geometry.addAttribute( 'normal', new THREE.BufferAttribute( vertexData.aNormalData, 3 ) );
    
    
    var h = Float32Array.from(vertexData.aTriangleHeightData);
    h.sort();
    var hMax = h[h.length-1]; var hMin = h[0];
    vertexData.aTriangleHeightData.forEach(function(val, index, array){
        array[index] += math.abs(hMin);
        array[index] /= ( math.abs(hMin) + math.abs(hMax) );
    });
    
    // debugger;
    geometry.addAttribute( 'aTriangleHeight', new THREE.BufferAttribute( vertexData.aTriangleHeightData, 1 ) );
    
    
    return geometry;
}

function generateTerrainData(resX, resY) {
    
    var gridResX = resX, gridResY = resY;
    gridResX = 100, gridResY = 100;
    var xScale = 16, yScale = 16;
    var offsetX = 0, offsetY = 0;
    var totalSquareSize = 18;
    var totalDataSize = totalSquareSize * gridResX * gridResY;
    console.log(totalDataSize)
    var nVertices = totalSquareSize * gridResX * gridResY / 3;
    var aPositionData = new Float32Array(totalDataSize);
    var aNormalData = new Float32Array(totalDataSize);
    var aTriangleHeightData = new Float32Array(nVertices);
    var triangleHeightDataPos = 0;
    var maxHeight = getHeight(1,1,1);
    // console.log(maxHeight);
    var i = 0;

    // var xh = (gridResX % 2 == 0) ? gridResX / 2 : (gridResX - 1) / 2 ;
    // var yh = (gridResY % 2 == 0) ? gridResY / 2 : (gridResY - 1) / 2 ;
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
        // console.log((triangleHeight1+1)/2);

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

        // console.log(((tirangleHeight2/11.875) + 1)/2);
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


var simplexNoise = require('../js/simplexNoiseImproved.js');
var simplex = new simplexNoise();

function getHeight(x ,y, getMax)
{
    // var height = 1.0 * simplex.noise2D(0.00116*0.4*x, 0.00116*0.9*y);
    var d = math.sqrt( x * x  +  y * y );
    // height = 5*el;

    var f = 0.125 / (128 * 1.0) ;
    var s = 2.0 * 16 / 1.0;
    var height = s * simplex.noise2D(f*x,f*y);
    var max = s;
    s = s/2;
    f = f*2;
    height += s * simplex.noise2D(f*x, f*y);
    max += s;
    // if(height)
    // height *= (0.5*height);
    height =  height > 0.0 ? height * (math.pow(height, 0.5)) : height *0.8;
    max = max * math.pow(max, 0.5);
    
    for (var i = 0; i < 2; i++) {
        s = s/2;
        f = f*2;
        max += s;
        height += s * simplex.noise2D(f*x, f*y);
    }

    // if(height > 0.0)
    //     height *= 1.3;
    // else
    //     height *= 1.0;
    // max *= 1.3;
    

    var hl = 80.0;
    if(height > hl)
        height += 0.6*(height - hl)
    
    // hl = 2000.0;
    // if(height > hl)
        // height += 0.8*(height - hl)
        
    var wl = 6.0;
    if(height < -wl)
        height += 4*(height + wl)
    // if(height > 6.0)
    for (var i = 0; i < 3; i++) {
        s = s/1.25;
        f = f*2;
        max += s;
        height += s * simplex.noise2D(f*x, f*y);
    }
    // else
    // for (var i = 0; i < 4; i++) {
    //     s = s/2;
    //     f = f*2;
    //     max += s;
    //     height += s * simplex.noise2D(f*x, f*y);
    // }
    
    if(getMax)
        return max;
    return height;
    // var waterNoise = 0.25 * simplex.noise2D(2.0*x,2.0*y);
    // waterNoise += 0.125 * simplex.noise2D(4.0*x,4.0*y);
    // waterNoise += 0.0625 * simplex.noise2D(8.0*x,8.0*y);
    // waterNoise *= 1.0;
    // waterNoise = math.min(waterNoise, 0.0);
    // //
    // var mountainNoise = 1.0 ; //* snoise(0.002*vec2(0.4*p.x, 0.9*p.y));
    // // var snow = 0;
    // //
    // mountainNoise = height;
    // height = math.max(-0.3,height);
    // height = math.min(height, 0.5);
    // // vh = height;
    // height = height < 0.5 ? height  :  mountainNoise;// + 0.0 + mountainNoise;
    // height = height > -0.3 ? height : -1.0 + waterNoise;
    // mountainNoise = height;
    // height = math.min(height, 2.0);
    // // snow = height;
    // height = height < 2.0 ? height  : mountainNoise;
    // height *= 1.0;
    // max*=1;
    // console.log(max); //11.875
    // console.log(max);
    
}
