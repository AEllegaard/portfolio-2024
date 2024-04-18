<script>
export default {

        props: ['image', 'link', 'video',]

}
</script>

<template>
  <RouterLink :to="link">
  <img :src="image" alt="">
  </RouterLink>
</template>