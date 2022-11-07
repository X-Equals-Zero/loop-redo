<script lang="ts">
	import { AmbientLight, DirectionalLight, Group, Instance, InstancedMesh, Mesh, Object3D, Object3DInstance, PerspectiveCamera, useLoader, useThrelte } from "@threlte/core";
	import { GLTF, useGltf, useGltfAnimations } from "@threlte/extras";
	import { onMount } from "svelte";
    import { canvasDims } from '$lib/stores/canvasStore';
	import { cubicOut } from "svelte/easing";
	import { spring, tweened } from "svelte/motion";
	import { AnimationMixer, AnimationObjectGroup, BoxGeometry, Color, MeshStandardMaterial } from "three";
	import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


    // const { gltf } = useGltfAnimations<'SphereAction'>(({ actions }) => {
	// 	actions.SphereAction?.play();
    //     console.log(actions);
	// })
    
    // const { gltf } = useGltfAnimations<'Take 001'>(({ actions, mixer }) => {
    //     mixer.timeScale = 0.5;
    //     actions['Take 001']?.play();
    // });

    const { gltf } = useGltf('src/models/willow_optimized.glb', {
    useDraco: true
  })

    useGltfAnimations<'Take 001'>(gltf, ({ actions, mixer }) => {
        mixer.timeScale = 0.5;
        actions['Take 001']?.play();
        console.log("COMPLETE");
    });

  const rotation = tweened(0, {
    duration: 500,
    easing: cubicOut
  })

  const scale = spring(1)
  const {scene} = useThrelte();
  const animGroup = new AnimationObjectGroup;
  let tempTree, tempTree2;
  let mixer = new AnimationMixer(animGroup);

  onMount(()=> {
    rotation.set(0.25);
  })

    
</script>
<PerspectiveCamera position={{ x: 0, y: 8, z: 25 }} fov={35}>

    <!-- <OrbitControls
    maxPolarAngle={DEG2RAD * 180}
    autoRotate={false}
    enableZoom={true}
    target={{ y: 0.5 }}
  /> -->
</PerspectiveCamera>
<DirectionalLight position={{ x: 3, y: 10, z: 10 }} />
<DirectionalLight position={{ x: -3, y: 10, z: -10 }} intensity={0.2} />
<AmbientLight intensity={0.2} />
{#if $gltf}
    {tempTree = $gltf.scene}
    {tempTree.position.set(8, 0, -15)}
    {animGroup.add(tempTree)}
    {scene.add(tempTree)}
    {tempTree2 = $gltf.scene}
    {tempTree2.position.set(-5, 0, -15)}
    {animGroup.add(tempTree2)}
    {scene.add(tempTree2)}
    {mixer.clipAction($gltf.animations[0], animGroup).play()}
    

    
    <!-- <Mesh geometry={$gltf.nodes['tree'].geometry} material={new MeshStandardMaterial()} /> -->
{/if}
    

<!-- <Group>
        <GLTF  bind:gltf={$gltf} url={'src/models/willow_optimized.glb'} useDraco={true} position={{x: $canvasDims.x / 200}} />
        <GLTF  bind:gltf={$gltf} url={'src/models/willow_optimized.glb'} useDraco={true} position={{x: $canvasDims.x / -200}} />

    
</Group> -->
<!-- {#if $gltf}
<Object3DInstance castShadow object={$gltf.scene} position={{x: $canvasDims.x / 200}} />

{/if} -->

<!-- {#if $gltf}
<InstancedMesh geometry={$gltf?.nodes['tree'].geometry} material={$gltf?.materials['Material.001']}>
    <Instance position={{x: $canvasDims.x / 200}} rotation={{y: $rotation * 5}} />
    <Instance position={{x: $canvasDims.x / -200}} rotation={{y: $rotation *  - 5}} />
    <Instance position={{x: $canvasDims.x / 350, y: 5, z: -10}} rotation={{y: $rotation * 5}} />
    <Instance position={{x: $canvasDims.x / -350, y: 5, z: -10}} rotation={{y: $rotation * -5}} />
</InstancedMesh>
<InstancedMesh geometry={$gltf?.nodes['Plane'].geometry} material={$gltf?.materials['Material.002']}>
    <Instance position={{x: $canvasDims.x / 200}} rotation={{y: $rotation * 5}} />
    <Instance position={{x: $canvasDims.x / -200}} rotation={{y: $rotation * -5}} />
    <Instance position={{x: $canvasDims.x / 350, y: 5, z: -10}} rotation={{y: $rotation * 5}} />
    <Instance position={{x: $canvasDims.x / -350, y: 5, z: -10}} rotation={{y: $rotation * -5}} />
</InstancedMesh> 

{/if}  -->