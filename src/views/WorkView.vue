<script>
import WorkExample from '../components/WorkExample.vue'
import WorkExampleVideo from '../components/WorkExampleVideo.vue'
import ProjectComponent from '../components/ProjectComponent.vue'

export default {
    components:{
        WorkExample,
        WorkExampleVideo,
        ProjectComponent,
    }
  }
</script>

<template>
<!-- 
  <nav class="grid grid-cols-2 my-16 justify-items-center">
        <RouterLink class="fira font-light text-hvid text-3xl" to="/">Projects</RouterLink>
        <RouterLink class="fira font-light text-hvid text-3xl" to="/work">Creative Code</RouterLink>
</nav>
-->

  <div class="grid grid-cols-4 mx-4 gap-4 z-10 relative pb-20 mt-20">

    <div class="container col-start-1 mt-20 drop-shadow-3xl aspect-square bg-grå w-1/2">
  <WorkExample link="/project/studentid" image="../src/components/media/CD-studiekort.png" class=""></WorkExample>
  <div class="overlay flex justify-center items-center" style="pointer-events: none;">
    <p class="text-hvid opacity-100">Student ID</p>
  </div>
</div>

    <div class="container bg-grå col-start-2 -mt-10 drop-shadow-3xl aspect-square">
      <WorkExampleVideo link="/project/pi" video="/media/sound.mp4"></WorkExampleVideo>
      <div class="overlay flex justify-center items-center" style="pointer-events: none;">
        <p class="text-hvid opacity-100">Pi Poster</p></div>
    </div>

    <div class="container bg-grå col-start-4 w-2/3 aspect-square drop-shadow-3xl grayscale">
      <WorkExampleVideo link="/project/circlesmoving" video="src/components/media/Circlesmoving.mov"></WorkExampleVideo>
      <div class="overlay flex justify-center items-center" style="pointer-events: none;">
        <p class="text-hvid opacity-100">Moving Circles</p></div>
    </div>

    <div class="container bg-grå col-start-3 mt-10 ml-4 w-2/3 drop-shadow-3xl aspect-square">
      <WorkExampleVideo link="/project/flowfields" video="src/components/media/flowfield.mov" class=""></WorkExampleVideo>
      <div class="overlay flex justify-center items-center" style="pointer-events: none;">
        <p class="text-hvid opacity-100">Flowfield</p></div>
    </div>

    <div class="container bg-grå col-start-1 mt-4 w-2/3 drop-shadow-3xl aspect-square grayscale">
      <WorkExample link="/project/blender" image="src/components/media/Finalcloseup1ørender-kopi.png" class=""></WorkExample>
      <div class="overlay flex justify-center items-center" style="pointer-events: none;">
        <p class="text-hvid opacity-100">Blender</p></div>
    </div>

    <div class="container bg-grå col-start-2 mt-32 w-1/2 justify-self-end drop-shadow-3xl aspect-square grayscale">
      <WorkExampleVideo link="/project/pixelart" video="/media/pixelart.mp4" class=""></WorkExampleVideo>
      <div class="overlay flex justify-center items-center" style="pointer-events: none;">
        <p class="text-hvid opacity-100">Pixelart</p></div>
    </div>

    <div class="container bg-grå col-start-4 mt-32  drop-shadow-3xl aspect-square grayscale">
      <WorkExampleVideo link="/project/imagesampling" video="src/components/media/sample.mov" class=""></WorkExampleVideo>
      <div class="overlay flex justify-center items-center" style="pointer-events: none;">
        <p class="text-hvid opacity-100">Image Sampling</p></div>
    </div>

    <div class="container grayscale bg-grå col-start-2 w-3/4 aspect-square drop-shadow-3xl justify-self-end">
      <WorkExample link="/project/kontrastfisk" image="src/components/media/kontrastfisk.png" class=""></WorkExample>
      <div class="overlay flex justify-center items-center" style="pointer-events: none;">
        <p class="text-hvid opacity-100">Fish Poster</p></div>
    </div>
    
    <div class="container grayscale bg-grå col-start-4 mt-44 w-2/3 aspect-square drop-shadow-3xl">
      <WorkExample link="/project/albumcover" image="src/components/media/teyeger.png" class=""></WorkExample>
      <div class="overlay flex justify-center items-center" style="pointer-events: none;">
        <p class="text-hvid opacity-100">Album cover</p></div>
    </div>

    <div class="container grayscale bg-grå col-start-1 drop-shadow-3xl">
      <WorkExampleVideo link="/project/karsten" video="src/components/media/karstendesk-kopi.mov" class=""></WorkExampleVideo>
      <div class="overlay flex justify-center items-center" style="pointer-events: none;">
        <p class="text-hvid opacity-100">Desktop</p></div>
    </div>

    
  </div>



  <RouterView/>
</template>

