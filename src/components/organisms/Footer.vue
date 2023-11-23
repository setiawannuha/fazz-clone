<script lang="ts">
  export default {
    name: 'FooterComponent',
    inheritAttrs: false,
    customOptions: {}
  }
</script>

<script setup lang="ts">
import logo from "@/assets/logo.png";
import instagram from "@/assets/instagram.svg";
import facebook from "@/assets/facebook.svg";
import youtube from "@/assets/youtube.svg";
import Phone from "@/components/icons/IconPhone.vue";
import Mail from "@/components/icons/IconMail.vue";
</script>

<template>
  <div class="px-5 lg:px-20">
    <div class="grid grid-cols-6 gap-5">
      <div class="col-span-6 lg:col-span-2">
        <img :src="logo" alt="fazztrack logo" class="w-36 mb-5" />
        <p class="text-neutral">
          Fazztrack adalah program pelatihan yang berkomitmen untuk mencetak
          developer yang profesional dan memberikan kesempatan untuk berkarir di
          perusahaan ternama.
        </p>
      </div>

      <div class="col-span-3 lg:col-span-1">
        <h4 class="text-xl font-semibold mb-6">Kelas</h4>
        <div class="flex flex-col gap-5 text-neutral">
          <span>Fullstack Mobile</span>
          <span>Fullstack Website Dan Golang</span>
          <span>Mini Bootcamp</span>
          <span>Online Course</span>
        </div>
      </div>

      <div class="col-span-3 lg:col-span-1">
        <h4 class="text-xl font-semibold mb-6">Dukungan</h4>
        <div class="flex flex-col gap-5 text-neutral">
          <span>Cicilan Setelah Kerja (ISA)</span>
          <span>FAQ</span>
          <span>Corporate Training</span>
          <span>Hire Our Graduates</span>
        </div>
      </div>

      <div class="col-span-3 lg:col-span-1">
        <h4 class="text-xl font-semibold mb-6">Tentang</h4>
        <div class="flex flex-col gap-5 text-neutral">
          <span>Cerita Alumni</span>
          <span>Sekilas Fazztrack</span>
        </div>
      </div>

      <div class="col-span-3 lg:col-span-1">
        <h4 class="text-xl font-semibold mb-6">Social Media</h4>
        <div class="flex flex-col gap-5 text-neutral">
          <span class="flex gap-2 items-center"
            ><img :src="instagram" alt="instagram logo" /> Instagram</span
          >
          <span class="flex gap-2 items-center"
            ><img :src="facebook" alt="facebook logo" />Facebook</span
          >
          <span class="flex gap-2 items-center"
            ><img :src="youtube" alt="youtube logo" />Youtube</span
          >
        </div>
      </div>
    </div>

    <hr class="my-7" />

    <div class="flex justify-between mb-5 text-neutral">
      <p>
        © <span class="font-semibold">2020 - 2023 Fazztrack.</span> All Rights
        Reserved
      </p>
      <div class="flex gap-3">
        <span class="flex gap-2 items-center"><Phone /> +6281132010888</span>
        <span class="flex gap-2 items-center"><Mail /> hello@fazztrack</span>
      </div>
    </div>
  </div>
</template>
