<template>

  <div class="background">
   <NavBar/>
    <h1 class="heading">About Me</h1>
    <div class="bg-container d-flex">
      <div class="card my-auto" style="width: 60rem; height: 35rem">
        <div class="card-body">
          <CarouselVue>
            <div class="carousel-item active">
                <img src="/img/1667550652724.jpg" class="d-block w-100" alt="" width="100%" height="100%">
                <div class="carousel-caption d-none d-md-block">
                    <h5>
                        I have always been interested in computers because I was
                        surrounded with friends whom built their own PC's. I started
                        gaming when I was younger and introduced myself to anime.
                    </h5>
                </div>
            </div>
            <div class="carousel-item">
                <img src="" class="d-block w-100" alt="" width="100%" height="100%">
                <div class="carousel-caption d-none d-md-block">
                    <h5>
                        I am an artist, surfer and kickboxer. I started digital art
                        at the beginning of 2022 after years of being an artist and
                        started to teach myself to animate on blender and bring
                        those drawings and painitngs to life
                    </h5>
                </div>
            </div>
            <div class="carousel-item">
                <img src="" class="d-block w-100" alt="" width="100%" height="100%">
                <div class="carousel-caption d-none d-md-block">
                    <h5>
                        Presently I am interested in creating and developing safe
                        servers and platforms for people via cyber security. As well
                        as teaching myself artificial intelligence and robotics
                    </h5>
                </div>
            </div>
          </CarouselVue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import CarouselVue from '@/components/Carousel.vue'
export default{
  components: {
    NavBar,
    CarouselVue
  }
}
</script>

<style>
/* .background {
  background-image: url(../assets/backgroundimg.jpg);
  background-size: cover ;
  width: 100%;
  height: 100%;
} */


.carousel-item {
    height: 32rem;
    color: pink;


  } 

</style>
