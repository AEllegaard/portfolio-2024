<script>
export default {

        props: ['link', 'video',]

}
</script>

<template>
  <RouterLink :to="link">
  <video v-draggable autoplay loop muted>
        <source :src="video" type="video/mp4">
      </video>
  </RouterLink>
</template>