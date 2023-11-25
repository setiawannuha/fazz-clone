<script lang="ts">
interface IForm {
  title: string;
  description: string;
  trainerName: string;
  trainerTitle: string;
  trainerPicture: string;
  batch: string;
  location: string;
  startDate: string;
  endDate: string;
  isWork: boolean;
  price: number;
}
</script>

<script setup lang="ts">
import logo from "@/assets/logo.png";
import Input from "@/components/molecules/Input.vue";
import { reactive } from "vue";
import { createMinicamp } from "@/store/post/minicamp";
import { useRouter, useRoute } from "vue-router";
import { state } from "@/store/minicamp/minicamps.store";
import { editMinicamp } from "@/store/put/minicamp";

const router = useRouter();
const route = useRoute();
const { id } = route.query;

const formMinicamp = reactive<IForm>({
  title: id ? state.detail.title : "",
  description: id ? state.detail.description : "",
  trainerName: id ? state.detail.trainerName : "",
  trainerTitle: id ? state.detail.trainerTitle : "",
  trainerPicture: id ? state.detail.trainerPicture : "",
  batch: id ? state.detail.batch : "",
  location: id ? state.detail.location : "",
  startDate: id ? state.detail.startDate : "",
  endDate: id ? state.detail.endDate : "",
  isWork: id ? state.detail.isWork : true,
  price: id ? state.detail.price : 0,
});

const handleSubmit = () => {
  if (id) {
    const finalID = id.toLocaleString();
    editMinicamp(
      parseInt(finalID),
      {
        title: formMinicamp.title,
        description: formMinicamp.description,
        trainerName: formMinicamp.trainerName,
        trainerTitle: formMinicamp.trainerTitle,
        trainerPicture: formMinicamp.trainerPicture,
        batch: formMinicamp.batch,
        location: formMinicamp.location,
        startDate: formMinicamp.startDate,
        endDate: formMinicamp.endDate,
        isWork: formMinicamp.isWork,
        price: formMinicamp.price,
        
      },
      () => {
        router.push("/minicamp");
      }
    );
  } else {
    createMinicamp(
      {
        title: formMinicamp.title,
        description: formMinicamp.description,
        trainerName: formMinicamp.trainerName,
        trainerTitle: formMinicamp.trainerTitle,
        trainerPicture: formMinicamp.trainerPicture,
        batch: formMinicamp.batch,
        location: formMinicamp.location,
        startDate: formMinicamp.startDate,
        endDate: formMinicamp.endDate,
        isWork: formMinicamp.isWork,
        price: formMinicamp.price,
      },
      () => {
        router.push("/minicamp");
      }
    );
  }
};
</script>

<template>
  <div class="w-full flex justify-center px-5 py-12">
    <div
      class="flex flex-col justify-center items-center max-w-3xl w-full border px-5 lg:px-16 py-12"
    >
      <RouterLink to="/" class="mb-5"
        ><img :src="logo" class="w-24" alt=""
      /></RouterLink>
      <div class="text-center mb-10">
        <h3 v-if="id" class="text-xl font-semibold mb-2">
          Edit Minicamp {{ state.detail.title }}
        </h3>
        <h3 v-else class="text-xl font-semibold mb-2">Buat Minicamp</h3>
      </div>
      <form class="w-full flex flex-col gap-4" @submit.prevent="handleSubmit">
        <div class="flex justify-between items-start gap-4">
          <div class="flex-1 flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Masukkan judul..."
              label="Judul"
              :default-value="id ? state.detail.title : ''"
              @passing-value="(value) => (formMinicamp.title = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan deskripsi..."
              label="Deskripsi"
              :default-value="id ? state.detail.description : ''"
              @passing-value="(value) => (formMinicamp.description = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Trainer Name..."
              label="Trainer Name"
              :default-value="id ? state.detail.trainerName : ''"
              @passing-value="(value) => (formMinicamp.trainerName = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Trainer Title..."
              label="Trainer Title"
              :default-value="id ? state.detail.trainerTitle : ''"
              @passing-value="(value) => (formMinicamp.trainerTitle = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Link Trainer Picture..."
              label="Trainer Picture"
              :default-value="id ? state.detail.trainerPicture : ''"
              @passing-value="(value) => (formMinicamp.trainerPicture = String(value))"
            />
          </div>
          <div class="flex-1 flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Masukkan Batch..."
              label="Batch"
              :default-value="id ? state.detail.batch : ''"
              @passing-value="(value) => (formMinicamp.batch = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Location..."
              label="Location"
              :default-value="id ? state.detail.location : ''"
              @passing-value="(value) => (formMinicamp.location = String(value))"
            />
            <Input
              type="date"
              placeholder="Masukkan Start Date..."
              label="Start Date"
              :default-value="id ? state.detail.startDate : ''"
              @passing-value="(value) => (formMinicamp.startDate = String(value))"
            />
            <Input
              type="date"
              placeholder="Masukkan End Date..."
              label="End Date"
              :default-value="id ? state.detail.endDate : ''"
              @passing-value="(value) => (formMinicamp.endDate = String(value))"
            />
            <Input
              type="number"
              placeholder="Masukkan harga..."
              label="Harga"
              :default-value="id ? state.detail.price : ''"
              @passing-value="(value) => (formMinicamp.price = Number(value))"
            />
          </div>
        </div>

        <button class="btn btn-md bg-[#f16d1b] text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
