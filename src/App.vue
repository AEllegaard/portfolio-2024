<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <header class="mx-4 sticky top-0 z-50">
      <nav class="grid grid-cols-4 gap-4 text-2xl tracking-widest">
        <RouterLink class="text-hvid font-light text-lg" to="/">Anna Ellegaard</RouterLink>
        <RouterLink class="font-light text-lg text-hvid self-center justify-self-end col-start-3" to="/work">Work</RouterLink>
        <RouterLink class="font-light text-lg text-hvid self-center justify-self-end" to="/about">About</RouterLink>
      </nav>    
    </header>
    
    <RouterView class="-z-1 relative"/>
    
    <footer class="fixed bottom-0 left-0 z-10 right-0">
      <nav class="grid grid-cols-4 gap-4 font-thin tracking-widest  text-lg text-hvid px-4">
        <h1 class="opacity-50 hover:opacity-100 font-light justify-self-start">Anna Ellegaard</h1>
        <a href="https://www.instagram.com/anna.cdesign/" target="_blank" class="opacity-50 hover:opacity-100 justify-self-end">Instagram</a>
        <a href="https://www.behance.net/annaskytte" target="_blank" class="opacity-50 hover:opacity-100 justify-self-end">Behance</a>
        <a href="https://www.linkedin.com/in/anna-ellegaard/" target="_blank" class="opacity-50 hover:opacity-100 justify-self-end">LinkedIn</a>
      </nav>
    </footer>
  </div>
</template>

<style>
</style>
