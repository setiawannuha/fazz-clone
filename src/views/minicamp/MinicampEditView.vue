<script lang="ts" setup>
    import logo from "@/assets/logo.png";
  import type { IMinicamp } from "@/store/minicamp/interface";
  import {onMounted, reactive, ref, type Ref} from 'vue'
  import { useMinicampStore } from "@/store/minicamp";
  import Input from "@/components/molecules/Input.vue";
  import { useRouter, useRoute } from "vue-router";

  const router = useRouter()
  const id = useRoute().params.id.toString()
  const minicampStore = useMinicampStore()
  const isLoading: Ref<boolean> = ref(false)
  const isError: Ref<boolean> = ref(false)

  onMounted(async() => {
    try {
      isLoading.value = true
      await minicampStore.getDetail(id)
      console.log('ini ',minicampStore.detail.data)
    } catch (error) {
      isError.value = true
    } finally {
      isLoading.value = false
    }
  })

  const payload: IMinicamp = reactive({
    title: minicampStore.detail.data?.title || "",
    description: minicampStore.detail.data?.description || "",
    trainerName: minicampStore.detail.data?.trainerName || "",
    trainerTitle: minicampStore.detail.data?.trainerTitle || "",
    trainerPicture: minicampStore.detail.data?.trainerPicture || "",
    batch: minicampStore.detail.data?.batch || "",
    location: minicampStore.detail.data?.location || "",
    startDate: minicampStore.detail.data?.startDate || "",
    endDate: minicampStore.detail.data?.endDate || "",
    isWork: minicampStore.detail.data?.isWork || true,
    price: minicampStore.detail.data?.price || 0
  })

  const handleSubmit = async() => {
    try {
      const finalID = id
      const response = await minicampStore.update(finalID, payload)
      console.log(response)
    } catch (error) {
      isError.value = true
    } finally {
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
      <div v-if="isLoading" class="w-full flex flex-col justify-center items-center gap-4">
        Please wait ..
      </div>
      <form v-else class="w-full flex flex-col gap-4" @submit.prevent="handleSubmit">
        <div class="flex justify-between items-start gap-4">
          <div class="flex-1 flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Masukkan judul..."
              label="Judul"
              :default-value="minicampStore.detail.data?.title || ''"
              @passing-value="(value) => (payload.title = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan deskripsi..."
              label="Deskripsi"
              :default-value="minicampStore.detail.data?.description || ''"
              @passing-value="(value) => (payload.description = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Trainer Name..."
              label="Trainer Name"
              :default-value="minicampStore.detail.data?.trainerName || ''"
              @passing-value="(value) => (payload.trainerName = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Trainer Title..."
              label="Trainer Title"
              :default-value="minicampStore.detail.data?.trainerTitle || ''"
              @passing-value="(value) => (payload.trainerTitle = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Link Trainer Picture..."
              label="Trainer Picture"
              :default-value="minicampStore.detail.data?.trainerPicture || ''"
              @passing-value="(value) => (payload.trainerPicture = String(value))"
            />
          </div>
          <div class="flex-1 flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Masukkan Batch..."
              label="Batch"
              :default-value="minicampStore.detail.data?.batch || ''"
              @passing-value="(value) => (payload.batch = String(value))"
            />
            <Input
              type="text"
              placeholder="Masukkan Location..."
              label="Location"
              :default-value="minicampStore.detail.data?.location || ''"
              @passing-value="(value) => (payload.location = String(value))"
            />
            <Input
              type="date"
              placeholder="Masukkan Start Date..."
              label="Start Date"
              :default-value="minicampStore.detail.data?.startDate || ''"
              @passing-value="(value) => (payload.startDate = String(value))"
            />
            <Input
              type="date"
              placeholder="Masukkan End Date..."
              label="End Date"
              :default-value="minicampStore.detail.data?.endDate || ''"
              @passing-value="(value) => (payload.endDate = String(value))"
            />
            <Input
              type="number"
              placeholder="Masukkan harga..."
              label="Harga"
              :default-value="minicampStore.detail.data?.price || ''"
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