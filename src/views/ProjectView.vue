<script>
import projectsData from '@/data/projects.json'

export default {
    data () {
        return {
            //router project/slug
            project: projectsData.find(project => project.id === this.$route.params.slug)
        }
    },
    beforeRouteEnter(to, from, next) {
        // Scroll to the top of the page when the route changes and component is about to be entered
        window.scrollTo(0, 0);
        next();
    }
}
</script>   
<template>
    <div class="grid grid-cols-4 grid-rows-2 mx-4 gap-4 relative text-sort bg-back rounded-t-lg">
        
            <!--  conditional rendering, hvis "objectet" indeholder video vil det blive vidst og omvendt med billede  -->
        <img v-if="project.titleImage" class="col-start-1 col-span-2 row-span-2 rounded-tl-lg aspect-square" :src="project.titleImage" alt="">
        <video v-else :src="project.video" class="col-start-1 col-span-2 row-span-2 aspect-square rounded-tl-lg scale-x-105" autoplay muted loop></video>

        <div class="col-start-3 grid grid-row-2">
            <div class="row-start-1 mt-4">

                <!--  disse "{{ project.tag }}" henter objecetet tag fra projects.json objectet med det rette ID  -->
         <p class="text-sort font-thin text-xs">{{ project.tag }}</p>
         <p class="text-sort font-thin text-xs">{{ project.tag2 }}</p>
         <p class="text-sort font-thin text-xs">{{ project.tag3 }}</p>
        </div>
        </div>

        <div class="col-start-3 col-span-2 row-start-2 pr-8 self-end">
            <p class="font-thin absolute -mt-2" >{{ project.projectType }}</p>
            <h1 class="text-5xl mb-5 self-end leading-relaxed">{{ project.title }}</h1>
            <p class="text-justify tracking-widest leading-relaxed">{{ project.topText }}</p>
        </div>

    </div>

    <div class="grid grid-cols-4 mx-4 gap-4 relative text-sort bg-back">
            <img class="col-start-4 mt-8 aspect-square" :src="project.smallImage" alt="">
            <p class="tracking-widest leading-relaxed -mt-20 pl-4">{{ project.smallText }}</p>
            <div class="mt-40 col-start-3">
                <img class="aspect-square w-1/2 " :src="project.tinyImage" alt="">

            </div>
        </div>
</template>