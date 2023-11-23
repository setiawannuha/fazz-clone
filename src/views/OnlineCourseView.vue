<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import router from "@/router";
import bookmark from "@/assets/bookmark.svg";
import IconRating from "@/components/icons/IconRating.vue";
import { getVideo } from "@/store/get/video";
import { state } from "@/store/video/video.store";
import FooterVue from "@/components/organisms/Footer.vue";

const categories = ["Engineering", "Design", "Product", "Marketing"];
const { category } = useRoute().query;
const filter = ref(category);

onMounted(() => getVideo());

const handleCategory = (item: string) => {
  router.push({
    name: "online course",
    params: {
      category: item.toLocaleLowerCase(),
    },
  });
  filter.value = item.toLocaleLowerCase();
};
</script>

<template>
  <div>
    <nav class="sticky top-16 bg-[#f6c9a9] text-center py-3">
      Belum siap ikut test?
      <span class="text-[#f16d1b] font-semibold underline"
        >Ikut Kelas Persiapan Bootcamp</span
      >
    </nav>
    <div>
      <div class="px-5 lg:px-20 py-6">
        <div
          class="bg-[#fef3ec] w-full flex px-16 py-7 gap-8 rounded-md mb-7 flex-col lg:flex-row"
        >
          <div class="bg-white w-2/5"></div>
          <div class="flex flex-col gap-3 items-start">
            <h3 class="text-2xl font-bold text-[#505358]">
              Ubah Hidupmu Sekarang Juga
            </h3>
            <p class="text-[#505358]">
              Bootcamp Software Engineer online selama 3-6 bulan dan disalurkan
              kerja, tanpa bayar di depan (Cicil Setelah Kerja).
            </p>
            <button class="btn text-white bg-[#f16d1b] hover:bg-[#f16d1be7]">
              Daftar Bootcamp
            </button>
          </div>
        </div>
        <div class="w-full bg-slate-100 h-52"></div>
      </div>
    </div>

    <nav class="sticky top-16 bg-white px-5 lg:px-20 py-3 flex gap-5">
      <RouterLink :to="`/online-course`">
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
        :to="`/online-course?category=${item.toLocaleLowerCase()}`"
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
    </nav>
    <div>
      <div class="bg-[#fbdfcb] px-5 lg:px-20 py-10">
        <h3 class="text-2xl font-semibold mb-3">Learning Playlist</h3>
        <span class="text-neutral"
          >Playlist dengan kumpulan online course pilihan agar belajar mandiri
          kamu lebih terstruktur</span
        >
        <div class="grid grid-cols-4 mt-8">
          <div class="col-span-2 lg:col-span-1 bg-white p-5 rounded-lg">
            <img
              src="https://production-fazztrack.sgp1.digitaloceanspaces.com/course-playlist/thumbnail-image/1691225434089"
              alt="playlist ui/ux"
            />
            <h5 class="font-semibold mb-3">UI/UX Designer</h5>
            <p class="text-sub md:text-p text-neutral-11 line-clamp-2">
              UI/UX designer with 4+tahun pengalaman pada Industry tech,
              Pelajari kunci sukses untuk lolos interview dan pelajari cara
              membuat portfolio yang sempurna. Manfaatkan strategi yang telah
              diuji dalam Industri secara langsung!
            </p>

            <span class="flex text-neutral items-center gap-2 mt-2"
              ><img :src="bookmark" alt="bookmark icon" /> 2 Online Course</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white px-5 lg:px-20 py-10">
      <h3 class="text-2xl mb-5 font-semibold">Semua Online Course</h3>
      <div class="grid grid-cols-3 gap-5">
        <select
          name="category"
          id=""
          class="col-span-1 border-2 px-3 py-2 rounded-md"
        >
          <option disabled selected>Urutkan</option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
        <input
          type="text"
          placeholder="Cari kelas untuk pekerjaan impianmu.."
          class="col-span-2 border-2 px-3 py-2 rounded-md"
        />
      </div>

      <div class="grid grid-cols-4 mt-7 gap-3">
        <div
          v-for="(item, index) in state"
          :key="index"
          class="col-span-2 lg:col-span-1 border-2 rounded-lg"
        >
          <img :src="item.cover" alt="thumbnail course" class="rounded-t-lg" />
          <div class="p-5">
            <h3 class="text-lg font-bold text-neutral mb-3">
              {{ item.title }}
            </h3>
            <div>
              <div
                class="flex flex-col-reverse lg:flex-row justify-between items-start gap-3 lg:items-center"
              >
                <span class="flex"
                  ><IconRating /><IconRating /><IconRating /><IconRating /><IconRating /></span
                ><span class="text-neutral">{{ item.level }}</span>
              </div>
              <hr class="my-3" />
              <div class="flex justify-between">
                <span class="text-neutral">Harga :</span>
                <span class="text-md font-bold text-[#f16d1b]">{{
                  item.price
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterVue />
  </div>
</template>
