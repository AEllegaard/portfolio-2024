<script>
//bliver ikke brugt, men er en p5 sketch der var på forsiden. 
export default {
    data() {
      return {
        img: null // Variable to hold the image
      };
    },
    mounted() {
      // Dynamically load p5.js script
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js';
      script.onload = this.initP5;
      document.head.appendChild(script);
    },
    beforeUnmount () {
      this.p5Instance.remove()
    },
    methods: {
      initP5() {
        // Create a new p5 instance
        this.p5Instance = new p5(this.sketch, this.$refs.p5Container);
      },
      // Define your p5 sketch function
      sketch(p) {
        p.preload = () => {
          // Load the image
          this.img = p.loadImage('https://images.unsplash.com/photo-1593283590172-adfce2adf213?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        };

        p.setup = () => {
          this.canvasWidth = p.windowWidth / 2;
          this.canvasHeight = window.innerHeight / 2;
          p.createCanvas(this.canvasWidth, this.canvasWidth);
        };
  
        p.draw = () => {
            p.background('#202020');
          let translatedMouseX = p.mouseX - p.width / 2;
          let translatedMouseY = p.mouseY - p.height / 2;
          let moveY = translatedMouseY * 0.2;
          let moveX = translatedMouseX * 0.2;
          let padding = 10;
          let radius = 20;
        

          //p.rect(padding, padding, p.width / 2 - padding * 1.5 + moveX, p.height / 2 - padding + moveY, 0, 0, 0, radius);
          p.image(this.img, padding, padding, p.width / 2 - padding * 1.5 + moveX, p.height - padding*2);
          p.rect(p.width / 2 + padding / 2 + moveX, padding + p.height / 2 + moveY, p.width / 2 - padding * 1.5 - moveX, p.height / 2 - padding * 2 - moveY, 0, radius, 0, 0);
        };
      }
    }
  };

</script>

<template>
  <div ref="p5Container"></div>
  <h1 class="headertemplate"></h1>
</template>

