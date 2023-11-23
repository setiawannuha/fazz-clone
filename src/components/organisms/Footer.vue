<script lang="ts">
  export default {
    name: 'FooterComponent',
    inheritAttrs: false,
    customOptions: {}
  }
</script>
<script setup lang="ts">
    import imgLogo from '../../assets/logo.png'
</script>

<template>
    <section class="w-full flex justify-center items-center px-2 md:px-0">
       <div class="w-full max-w-[1080px] flex flex-col justify-center items-center">
         <div class="w-full flex flex-col lg:flex-row justify-between items-start gap-11 py-11 border-b-2">
           <div class="w-full lg:w-96 flex flex-col gap-7">
             <div>
               <img :src="imgLogo" class="w-36" alt="" />
             </div>
             <div class="text-black">
               Fazztrack adalah program pelatihan yang berkomitmen untuk mencetak
               developer yang profesional dan memberikan kesempatan untuk
               berkarir di perusahaan ternama.
             </div>
           </div>
           <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
             <div class="w-40 text-black flex flex-col justify-start items-start gap-2">
               <div class="font-semibold text-xl mb-3">Kelas</div>
               <div>Flullstack Mobile</div>
               <div>Fullstack Website dan Golang</div>
               <div>Mini Bootcamp</div>
               <div>Online Course</div>
             </div>
             <div class="w-40 text-black flex flex-col justify-start items-start gap-2">
               <div class="font-semibold text-xl mb-3">Dukungan</div>
               <div>Cicilan Setelah Kerja (ISA)</div>
               <div>FAQ</div>
               <div>Corporate Training</div>
               <div>Hire Our Graduates</div>
             </div>
             <div class="w-40 text-black flex flex-col justify-start items-start gap-2">
               <div class="font-semibold text-xl mb-3">Tentang</div>
               <div>Cerita Alumni</div>
               <div>Sekilas Fazztrack</div>
             </div>
             <div class="w-40 text-black flex flex-col justify-start items-start gap-2">
               <div class="font-semibold text-xl mb-3">Social Media</div>
               <div>Instagram</div>
               <div>Facebook</div>
               <div>Youtube</div>
             </div>
           </div>
         </div>
         <div class="py-8 w-full flex flex-col-reverse lg:flex-row justify-between items-center">
           <div class="text-black w-full flex justify-start items-center">
             <div class="font-semibold">© 2020 - 2023 Fazztrack.</div>
             <div>All Rights Reserved</div>
           </div>
           <div class="flex flex-col md:flex-row justify-end items-start text-black lg:gap-5 w-full pb-2 md:pb-0">
             <div>+6281132010888</div>
             <div>hello@fazztrack.com</div>
           </div>
         </div>
       </div>
     </section>
 </template>