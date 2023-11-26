<script lang="ts" setup>
import Footer from '@/components/organisms/Footer.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { useMinicampStore } from '@/store/minicamp';

import axios from 'axios';

const token = localStorage.getItem("token")

    const categories = ["Disalurkan", "Engineering", "Design", "Product", "Marketing"];
    const { category } = useRoute().query;
    const filter = ref(category);
    const router = useRouter()
    const minicampStore = useMinicampStore()
    onMounted(() => {
      minicampStore.getAll()
    })

    const handleCategory = (item: string) => {
    router.push({
        name: "online course",
        params: {
        category: item.toLocaleLowerCase(),
        },
    });
    filter.value = item.toLocaleLowerCase();
    };

    const handleDelete = async(id: number) => {
        try {
            const {data} = await axios.delete("https://fazz-track-sample-api.vercel.app/minicamp/"+id,
                {
                headers: {
                    Authorization: token
                },
                })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

  const handleEdit = async (id: string) => {
  // await getDetailMinicamp(id);
  router.push({
    name: "ManageMinicamp",
    query: {
      id: id,
    },
  });
};

const handleDetail = (id: string) => {
  router.push({
    name: "MinicampDetail",
    params: {id}
  })
}
</script>
<template>
    <div class="w-full">
        <div class="w-full py-3 flex flex-col justify-center items-center">
            <div class="w-full px-5 lg:px-0 max-w-[1080px] flex flex-col justify-center items-start gap-11 py-12">
                <div class="w-full text-4xl text-black font-bold">Part-time bootcamp bersama expert terkemuka</div>
                <div class="w-full flex justify-between items-center text-xl font-bold text-slate-600">
                    <div>Top Trainer dari Perusahaan</div>
                    <div>Proyek Level Industri</div>
                    <div>Live Class</div>
                </div>
            </div>
        </div>
        <nav class="sticky top-16 z-10 w-full bg-white px-5 lg:px-20 py-3 flex justify-center items-center">
          <div class="w-full max-w-[1080px] flex flex-col lg:flex-row justify-between items-center gap-3">
            <div class="w-full overflow-scroll flex justify-start items-center gap-7 py-5 font-bold text-slate-500">
                <RouterLink :to="`/minicamp`">
                    <span
                    :class="`${
                        !filter ? 'border-[#f16d1b] border-b-4 font-semibold' : ''
                    } py-3 cursor-pointer`"
                    @click="handleCategory('')"
                    >Semua</span
                    >
                </RouterLink>
                <RouterLink
                    v-for="(item, index) in categories"
                    :key="index"
                    :to="`/minicamp?category=${item.toLocaleLowerCase()}`"
                >
                    <span
                    :class="`${
                        filter === item.toLocaleLowerCase()
                        ? 'border-[#f16d1b] border-b-4 font-semibold'
                        : ''
                    } py-3 cursor-pointer`"
                    @click="handleCategory(item)"
                    >{{ item }}</span
                    >
                </RouterLink>
            </div>
            <div class="w-full md:w-36">
              <RouterLink to="/manage-minicamp" class="w-full btn btn-primary text-white">Buat Minicamp</RouterLink>
            </div>
          </div>
        </nav>
        <section class="w-full flex flex-col justify-center items-center gap-11 py-7 mb-24">
            <div class="w-full max-w-[1080px] text-black flex flex-col gap-3">
                <div class="w-full">
                  <div v-if="minicampStore.list.isLoading" class="w-full text-center text-slate-500 font-bold text-2xl">
                    Please wait ..
                  </div>
                  <div v-else-if="minicampStore.list.isError" class="text-slate-500 font-bold text-2xl">
                    Oppss Error ..
                  </div>
                    <div v-else class="px-5 md:px-0 max-w-[1080px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
                        <div v-for="(item, index) in minicampStore.list.data" :key="index" class="card bg-base-100 shadow-xl w-full relative">
                            <div class="absolute top-1 right-1 flex gap-2">
                                <button @click="handleEdit(item?.id)" class="bg-primary p-1 rounded text-sm text-white font-semibold">Edit</button>
                                <button @click="handleDelete(item?.id)" class="bg-red-500 p-1 rounded text-sm font-semibold">Delete</button>
                            </div>
                            <figure>
                                <img
                                :src="item?.trainerPicture"
                                alt="Shoes"
                                />
                            </figure>
                            <div class="card-body">
                                <button @click="handleDetail(`${item?.id}`)" class="card-title">
                                    {{ item?.title }}
                                </button>
                                <p class="text-base text-slate-500">
                                    {{ item?.startDate }} - {{ item?.endDate }}
                                </p>
                                <p class="text-base text-slate-500">
                                    {{ item?.trainerName }}
                                </p>
                                <div class="py-2">
                                    {{ item?.description.length <= 50 ? item?.description : item?.description.slice(1,50) + ' ...' }}
                                </div>
                                <hr />
                                <div class="w-full flex justify-between items-center py-3">
                                    <p>Harga :</p>
                                    <p class="text-end text-black font-bold">Rp. {{ item?.price }}</p>
                                </div>
                                <hr />
                                <div class="w-full flex justify-center items-center text-primary font-bold text-lg pt-3">
                                    <div>{{ item?.isWork ? 'Daftar Sekarang' : 'Daftar Waitlist' }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <Footer/>
    </div>
</template>