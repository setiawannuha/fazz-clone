<script setup lang="ts">
import { reactive } from "vue";

const data = reactive({
  slides: [
    {
      image:
        "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
    },
    {
      image:
        "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
    },
    {
      image:
        "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
    },
    {
      image:
        "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
    },
  ],
  currentIndex: 0,
});

const prevSlide = () => {
  data.currentIndex =
    (data.currentIndex - 1 + data.slides.length) % data.slides.length;
};

const nextSlide = () => {
  data.currentIndex = (data.currentIndex + 1) % data.slides.length;
};
</script>

<template>
  <div class="relative">
    <div class="carousel w-full z-[-1]">
      <div
        v-for="(slide, index) in data.slides"
        :key="index"
        :id="`slide${index + 1}`"
        class="carousel-item relative w-full"
        :class="{ hidden: data.currentIndex !== index }"
      >
        <img :src="slide.image" class="w-full" />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#" @click.prevent="prevSlide" class="btn btn-circle">❮</a>
          <a href="#" @click.prevent="nextSlide" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>
</template>
