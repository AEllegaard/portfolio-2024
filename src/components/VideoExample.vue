<script>
export default {

        props: ['video',]

}
</script>

<template>
  <video autoplay muted>
        <source :src="video" type="video/mp4">
      </video>

</template>