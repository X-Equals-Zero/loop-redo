<script lang="ts">
    let cellSize: number = 1;

    const generateGeometryDataForCell = ( cellX: number, cellY: number, cellZ: number ) => {

        const startX: number = cellX * cellSize;
        const startY: number = cellY * cellSize;
        const startZ: number = cellZ * cellSize;
        for (let y = 0; y < cellSize; ++y)
            for (let z = 0; z < cellSize; ++z){
                for (let x = 0; x < cellSize; ++x){
                    const voxelX = startX + x;
                    const voxel = this.getVoxel(voxelX, voxelY, voxelZ);
                    if (voxel) {
                        for (const {dir} of VoxelWorld.faces) {
                        const neighbor = getVoxel(
                            voxelX + dir[0],
                            voxelY + dir[1],
                            voxelZ + dir[2]);
                        if (!neighbor) {
                            // this voxel has no neighbor in this direction so we need a face
                            // here.
                        }
                        }
                }
            }
        }
    }
    const faces = [
  { // left
    dir: [ -1,  0,  0, ],
  },
  { // right
    dir: [  1,  0,  0, ],
  },
  { // bottom
    dir: [  0, -1,  0, ],
  },
  { // top
    dir: [  0,  1,  0, ],
  },
  { // back
    dir: [  0,  0, -1, ],
  },
  { // front
    dir: [  0,  0,  1, ],
  },
];

</script>