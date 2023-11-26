<script lang="ts" setup>
  import logo from "@/assets/logo.png";
  import type { IMinicamp } from "@/store/minicamp/interface";
  import {reactive, ref, type Ref} from 'vue'
  import { useMinicampStore } from "@/store/minicamp";
  import Input from "@/components/molecules/Input.vue";
  import { useRouter } from "vue-router";


  const minicampStore = useMinicampStore()
  const router = useRouter()
  const isLoading: Ref<boolean> = ref(false)
  const isError: Ref<boolean> = ref(false)

  const payload: IMinicamp = reactive({
    title: "",
    description: "",
    trainerName: "",
    trainerTitle: "",
    trainerPicture: "",
    batch: "",
    location: "",
    startDate: "",
    endDate: "",
    isWork: true,
    price: 0
  })
  
  const handleSubmit = async() => {
    try {
      isLoading.value = true
      await minicampStore.create(payload)
    } catch (error) {
      isError.value = true
    } finally {
      isLoading.value = false
      router.push('/minicamp')
    }
  }

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
        <h3 class="text-xl font-semibold mb-2">
          Create Minicamp
        </h3>
      </div>
      <form class="w-full flex flex-col gap-4" @submit.prevent="handleSubmit">
        <div class="flex justify-between items-start gap-4">
          <div class="flex-1 flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Masukkan judul..."
              label="Judul"
              default-value=""
              @passing-value="(value) => (payload.title = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan deskripsi..."
              label="Deskripsi"
              default-value=""
              @passing-value="(value) => (payload.description = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Trainer Name..."
              label="Trainer Name"
              default-value=""
              @passing-value="(value) => (payload.trainerName = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Trainer Title..."
              label="Trainer Title"
              default-value=""
              @passing-value="(value) => (payload.trainerTitle = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Link Trainer Picture..."
              label="Trainer Picture"
              default-value=""
              @passing-value="(value) => (payload.trainerPicture = String(value))"
            />
          </div>
          <div class="flex-1 flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Masukkan Batch..."
              label="Batch"
              default-value=""
              @passing-value="(value) => (payload.batch = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Location..."
              label="Location"
              default-value=""
              @passing-value="(value) => (payload.location = String(value))"
            />
            <Input
              type="date"
              placeholder="Masukkan Start Date..."
              label="Start Date"
              default-value=""
              @passing-value="(value) => (payload.startDate = String(value))"
            />
            <Input
              type="date"
              placeholder="Masukkan End Date..."
              label="End Date"
              default-value=""
              @passing-value="(value) => (payload.endDate = String(value))"
            />
            <Input
              type="number"
              placeholder="Masukkan harga..."
              label="Harga"
              default-value=""
              @passing-value="(value) => (payload.price = Number(value))"
            />
          </div>
        </div>

        <div v-if="isLoading" class="btn btn-md bg-[#f16d1b] text-white font-semibold">
          Loading ...
        </div>
        <button v-if="!isLoading" type="submit" class="btn btn-md bg-[#f16d1b] text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>