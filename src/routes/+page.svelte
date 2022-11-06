<script lang="ts">
    import Canvas2d from '$lib/Canvas2d.svelte';
	import Rectangles from '$lib/Rectangles.svelte';
//start 3d stuff
import { CircleGeometry, MeshStandardMaterial, BoxGeometry, DoubleSide } from 'three'
    import { DEG2RAD } from 'three/src/math/MathUtils'
    import {
        AmbientLight,
        Canvas,
        DirectionalLight,
        Group,
        HemisphereLight,
        Mesh,
        OrbitControls,
        PerspectiveCamera
    } from '@threlte/core'
    import { spring } from 'svelte/motion'

  const scale = spring(1)
  // end 3d stuff
</script>



<h1>Welcome to SvelteKit</h1>
<div id="canvas">
    <Canvas2d>
        <Rectangles />
    </Canvas2d>


    <div id="canvas3d">
        <Canvas>
          <PerspectiveCamera position={{ x: 10, y: 10, z: 10 }} fov={24}>
            <OrbitControls
              maxPolarAngle={DEG2RAD * 80}
              autoRotate={false}
              enableZoom={false}
              target={{ y: 0.5 }}
            />
          </PerspectiveCamera>
      
          <DirectionalLight shadow position={{ x: 3, y: 10, z: 10 }} />
          <DirectionalLight position={{ x: -3, y: 10, z: -10 }} intensity={0.2} />
          <AmbientLight intensity={0.2} />
      
          <!-- Cube -->
          <Group scale={$scale}>
            <Mesh
              interactive
              on:pointerenter={() => ($scale = 2)}
              on:pointerleave={() => ($scale = 1)}
              position={{ y: 0.5 }}
              castShadow
              geometry={new BoxGeometry(1, 1, 1)}
              material={new MeshStandardMaterial({ color: '#333333' })}
            />
          </Group>
      
          <!-- Floor -->
          <Mesh
            receiveShadow
            rotation={{ x: -90 * (Math.PI / 180) }}
            geometry={new CircleGeometry(3, 72)}
            material={new MeshStandardMaterial({ side: DoubleSide, color: 'white' })}
          />
        </Canvas>
      </div>
</div>

<style>
    #canvas {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    #canvas3d {
        position: absolute;
        display: block;
        top: 0;
    }
</style>