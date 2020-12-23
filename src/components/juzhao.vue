<template>
   <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import "swiper/swiper-bundle.min.css";
export default {
 mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween:100
    });
  }
    
}
</script>