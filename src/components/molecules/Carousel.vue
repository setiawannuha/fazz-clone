<script setup lang="ts">
import { reactive, ref } from "vue";

const data = reactive({
  slides: [
    {
      image:
        "https://minibootcamp.s3.ap-southeast-1.amazonaws.com/banner/file-1694678297269",
    },
    {
      image:
        "https://minibootcamp.s3.ap-southeast-1.amazonaws.com/banner/file-1694678309396",
    },
    {
      image:
        "https://minibootcamp.s3.ap-southeast-1.amazonaws.com/banner/file-1694678324082",
    },
    {
      image:
        "https://minibootcamp.s3.ap-southeast-1.amazonaws.com/banner/file-1694678342982",
    },
  ],
  currentIndex: ref(0),
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
  <div class="relative overflow-hidden">
    <div class="slider-container">
      <div
        v-for="(slide, index) in [...data.slides, ...data.slides.slice(0, 2)]"
        :key="index"
        :style="{ transform: `translateX(-${data.currentIndex * 100}%)` }"
        class="slider-item transition-transform duration-500 ease-in-out"
      >
        <img :src="slide.image" class="w-[500px]" />
      </div>
    </div>

    <div
      class="absolute flex justify-between items-center w-full h-full top-0 left-0"
    >
      <a href="#" @click.prevent="prevSlide" class="btn btn-circle left-5">❮</a>
      <a href="#" @click.prevent="nextSlide" class="btn btn-circle right-5"
        >❯</a
      >
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  display: flex;
  gap: 30px;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: max-content;
}

.slider-item {
  box-sizing: border-box;
  width: 300px;
}

.btn-circle {
  /* Add your button styles here */
}
</style>
