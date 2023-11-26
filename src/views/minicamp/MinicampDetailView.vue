<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { useMinicampStore } from '@/store/minicamp';
  import { useRoute } from 'vue-router';

  const id = useRoute().params.id.toString()
  const minicampStore = useMinicampStore()

  onMounted(() => {
    minicampStore.getDetail(id)
  })

  
</script>

<template>
        <div class="w-full">
        <div class="w-full py-3 flex flex-col justify-center items-center">
            <div class="w-full px-5 lg:px-0 max-w-[1080px] flex flex-col justify-center items-start gap-11 py-12">
                <div class="w-full text-4xl text-black font-bold">{{ minicampStore.detail.data.title}}</div>
                <div class="w-full flex justify-between items-center text-xl font-bold text-slate-600">
                  <div>Siap jadi DevOps Engineer dan pelajari skillnya bersama mentor profesional 2+ tahun sebagai DevOps Engineer di Paxel Indonesia dan Tribun Regional Newspaper.</div>
                </div>
            </div>
        </div>
        <section class="w-full flex justify-center items-start">
            <div v-if="minicampStore.detail.isLoading" class="w-full max-w-[1080px] flex justify-center items-center">
              Please Wait ...
            </div>
            <div v-else-if="minicampStore.detail.isError" class="w-full max-w-[1080px] flex justify-center items-center">
              Opss Error ...
            </div>
            <div class="w-full max-w-[1080px] flex justify-between items-start">
              <div class="flex flex-col gap-7 max-w-[50%]">
                  <div class="w-[300px]">
                      <img :src="minicampStore.detail.data.trainerPicture" alt="">
                  </div>
                  {{ minicampStore.detail.data.description }}
              </div>
              <div class="">
                  <div class="card bg-base-100 shadow-xl w-full">
                          <div class="card-body border rounded-xl">
                              <div class="card-title">
                                  Batch {{ minicampStore.detail.data.batch }}
                              </div>
                              <p class="text-base text-slate-500">
                                  {{ minicampStore.detail.data.startDate }} - {{ minicampStore.detail.data.endDate }}
                              </p>
                              <p class="text-base text-slate-500">
                                  Lokasi {{ minicampStore.detail.data.location }}
                              </p>
                              <hr />
                              <div class="w-full flex justify-between items-center py-3">
                                  <p>Harga :</p>
                                  <p class="text-end text-black font-bold">Rp. {{ minicampStore.detail.data.price }}</p>
                              </div>
                              <div class="py-2">
                                  Ikuti waitlist untuk informasi pembukaan pendaftaran
                              </div>
                              <hr />
                              <div class="w-full flex justify-center items-center text-primary font-bold text-lg pt-3">
                                  <div>{{ minicampStore.detail.data.isWork ? 'Daftar Sekarang' : 'Daftar Waitlist' }}</div>
                              </div>
                          </div>
                      </div>
              </div>
            </div>
        </section>
        
        <Footer/>
    </div>
</template>