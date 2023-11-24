<script lang="ts">
interface IForm {
  title: string;
  description: string;
  cover: string;
  rating: number;
  level: string;
  price: number;
}
</script>

<script setup lang="ts">
import logo from "@/assets/logo.png";
import Input from "@/components/molecules/Input.vue";
import { onMounted, reactive } from "vue";
import { createCourse } from "@/store/post/video";
import { useRouter, useRoute } from "vue-router";
import { getDetailVideo } from "@/store/get/video";
import { state } from "@/store/video/video.store";
import { editCourse } from "@/store/put/video";

const router = useRouter();
const route = useRoute();
const { id } = route.query;

const formVideo = reactive<IForm>({
  title: id ? state.detail.title : "",
  description: id ? state.detail.description : "",
  cover: id ? state.detail.cover : "",
  rating: id ? state.detail.rating : 0,
  level: id ? state.detail.level : "",
  price: id ? state.detail.price : 0,
});

const handleSubmit = () => {
  if (id) {
    const finalID = id.toLocaleString();
    editCourse(
      parseInt(finalID),
      {
        description: formVideo.description,
        cover: formVideo.cover,
        rating: formVideo.rating,
        level: formVideo.level,
        price: formVideo.price,
        title: formVideo.title,
      },
      () => {
        router.push("/online-course");
      }
    );
  } else {
    createCourse(
      {
        description: formVideo.description,
        cover: formVideo.cover,
        rating: formVideo.rating,
        level: formVideo.level,
        price: formVideo.price,
        title: formVideo.title,
      },
      () => {
        router.push("/online-course");
      }
    );
  }
};
</script>

<template>
  <div class="w-full flex justify-center px-5 py-12">
    <div
      class="flex flex-col justify-center items-center max-w-2xl w-full border px-5 lg:px-16 py-12"
    >
      <RouterLink to="/" class="mb-5"
        ><img :src="logo" class="w-24" alt=""
      /></RouterLink>
      <div class="text-center mb-10">
        <h3 v-if="id" class="text-xl font-semibold mb-2">
          Edit Course {{ state.detail.title }}
        </h3>
        <h3 v-else="id" class="text-xl font-semibold mb-2">Buat Course</h3>
      </div>
      <form class="w-full flex flex-col gap-4" @submit.prevent="handleSubmit">
        <Input
          type="text"
          placeholder="Masukkan judul..."
          label="Judul"
          :default-value="id ? state.detail.title : ''"
          @passing-value="(value) => (formVideo.title = String(value))"
        />
        <Input
          type="text"
          placeholder="Masukkan deskripsi..."
          label="Deskripsi"
          :default-value="id ? state.detail.description : ''"
          @passing-value="(value) => (formVideo.description = String(value))"
        />
        <Input
          type="text"
          placeholder="Masukkan url cover..."
          label="Url Cover"
          :default-value="id ? state.detail.cover : ''"
          @passing-value="(value) => (formVideo.cover = String(value))"
        />
        <Input
          type="number"
          placeholder="Masukkan Rating..."
          label="Rating"
          :default-value="id ? state.detail.rating : ''"
          @passing-value="(value) => (formVideo.rating = Number(value))"
        />
        <Input
          type="text"
          placeholder="Masukkan level..."
          label="Level"
          :default-value="id ? state.detail.level : ''"
          @passing-value="(value) => (formVideo.level = String(value))"
        />
        <Input
          type="number"
          placeholder="Masukkan harga..."
          label="Harga"
          :default-value="id ? state.detail.price : ''"
          @passing-value="(value) => (formVideo.price = Number(value))"
        />

        <button class="btn btn-md bg-[#f16d1b] text-white font-semibold">
          Submit Course
        </button>
      </form>
    </div>
  </div>
</template>
