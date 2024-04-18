<script>
import HomeCanvasLeft from '../components/HomeCanvasLeft.vue'
import HomeCanvasRight from '../components/HomeCanvasRight.vue'
import WorkExample from '../components/WorkExample.vue'
import VideoExample from '../components/VideoExample.vue'

  export default {
    components:{
        HomeCanvasLeft,
        HomeCanvasRight,
        WorkExample,
        VideoExample,
    },
    data() {
      return {
        canvasWidth: 0,
        canvasHeight: 0,
        
      }
    },
    directives: {
      //drag and drop!!
    draggable: {
      mounted(el) {
    let isDragging = false;
    let offsetX, offsetY;

    el.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX;
        offsetY = e.clientY;

        offsetX -= parseInt(window.getComputedStyle(el).left);
        offsetY -= parseInt(window.getComputedStyle(el).top);

        el.classList.add('dragging'); // tilføjer 'dragging' class til elemterne så cursoren indikere at man kan grabbe
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        // udregner den nye position for elemetnerne
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        // Updaterer positionen
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        el.classList.remove('dragging'); // fjerner class så cursor ændre sig igen
    });
}

    }
  }
};

  </script>

<template>
    <div class="grid grid-cols-4 mx-4 gap-4 relative">
      <video class="bg-grå col-start-4 w-1/2 mt-1 justify-self-end transition drop-shadow-3xl relative drag" v-draggable autoplay muted loop>
        <source src="/media/mirrorfade.mp4" type="video/mp4">
      </video>
      <div class="text">
        <p class="text-hvid font-thin text-sm text-end -mt-36">Your friendly neighborhood code wizard! 🧙‍♂️ When I'm not busy summoning pixels and wrangling code, you can find me brewing up some seriously funky designs and interactive experiences. I'm on a mission to turn lines of code into works of art! So, buckle up and let's embark on a wild ride together! 🚀✨</p>
      </div>
      <video class="bg-grå col-start-3 -mt-28 w-3/4 justify-self-end  drop-shadow-3xl relative drag" v-draggable autoplay muted loop>
        <source src="/media/face.mp4" type="video/mp4">
      </video>
      <video class="bg-grå col-start-2 -mt-40  drop-shadow-3xl relative drag" v-draggable autoplay muted loop>
        <source src="/media/pixelart.mp4" type="video/mp4">
      </video>
      <video class="bg-grå col-start-4 w-3/4 mt-16  drop-shadow-3xl relative drag" v-draggable autoplay muted loop>
        <source src="/media/kebab.mp4" type="video/mp4">
      </video>
      <video class="bg-grå col-start-1 w-1/2 -mt-48 drop-shadow-3xl relative drag" v-draggable autoplay muted loop>
        <source src="/media/sound.mp4" type="video/mp4">
      </video>

    </div>

    <!-- <HomeCanvasLeft></HomeCanvasLeft> -->



    <!--
      <div class="grid grid-cols-2 w-full">
        <HomeCanvasLeft/>
        <HomeCanvasRight/>
    </div>
    -->
</template>
  
<style>


</style>
  
  
