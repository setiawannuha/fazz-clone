<script setup lang="ts">
  import Footer from '../components/organisms/Footer.vue'
  import mapExample from '../assets/map-example.png'
</script>
<template>
  <div class="about">
    <section class="w-full flex flex-col justify-center items-center gap-11 pt-24 pb-28">
      <div class="w-full max-w-[1080px] flex flex-col justify-center items-center gap-11">
        <div class="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 pb-7">
          <div class="flex flex-col gap-11 w-full">
            <div>
              <div class="text-5xl font-bold text-black pb-5 text-center lg:text-left">
                Our Mission Is To
              </div>
              <div class="text-5xl font-bold text-secondary text-center lg:text-left">
                Build Life-Changing Education
              </div>
            </div>
            <div class="w-full flex md:justify-start justify-center">
              <RouterLink
                to='/'
                class="btn btn-secondary w-48 text-white capitalize font-semibold rounded"
              >
                Daftar Sekarang
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-between items-center gap-5">
          <div class="basis-1/3 flex flex-col justify-start items-start gap-3">
            <div class="text-black text-2xl font-bold">
              The New Career Hacks
            </div>
            <div class="text-xl text-slate-500">
              Di Fazztrack kami percaya ada cara yang lebih baik untuk sukses:
            </div>
          </div>
          <div class="basis-2/3 flex justify-center items-center gap-3">
            <ul class="flex flex-col gap-3">
              <li class="flex gap-4 justify-start items-start">
                <font-awesome-icon class="text-secondary" icon="fa-solid fa-check" />
                <div>
                  Menggunakan skema Income Share Agreement (ISA) sehingga tidak ada biaya pendidikan di depan.
                </div>
              </li>
              <li class="flex gap-4 justify-start items-center">
                <font-awesome-icon class="text-secondary" icon="fa-solid fa-check" />
                <div>
                  Memberikan skill yang dibutuhkan sesuai standar industri.
                </div>
              </li>
              <li class="flex gap-4 justify-start items-center">
                <font-awesome-icon class="text-secondary" icon="fa-solid fa-check" />
                <div>
                  Menyalurkan lulusan Fazztrack ke perusahaan rekanan Fazztrack.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col justify-center items-center gap-11 bg-slate-100">
      <div class="w-full max-w-[1080px] text-black flex flex-col gap-3">
        <div class="w-full flex flex-col justify-center items-center gap-11 py-11 px-7 lg:px-0">
          <div class="w-full flex flex-col justify-center items-center gap-4">
            <div class="text-black text-2xl font-bold text-center">
              From Startup to Enterprise
            </div>
            <div class="text-slate-500 text-xl font-semibold text-center">
              Kami membantu ratusan perusahaan untuk mengembangkan bisnisnya melalui lulusan Fazztrack
            </div>
          </div>
          <div class="w-full max-w-[1080px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 justify-items-center xl:gap-4">
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-1.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-2.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-3.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-4.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-5.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-6.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-7.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-8.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-9.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-10.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-11.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-12.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-13.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-14.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-15.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-16.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-17.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-18.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-19.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-20.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-21.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-22.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-23.png"
                alt=""
                class="w-24"
              />
            </div>
            <div class="w-28 h-20 flex justify-center items-cstart">
              <div class="text-3xl text-black font-bold">600+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col justify-center items-center gap-11 bg-white">
      <div class="max-w-[1080px] flex justify-between items-center gap-11 py-16">
        <div>
          <img :src="mapExample" alt="">
        </div>
        <div class="flex flex-col justify-start items-start gap-7 max-w-[60%]">
          <div class="text-black text-3xl font-bold">Hubungi Fazztrack</div>
          <div>
            <div class="text-secondary text-2xl font-bold pb-2">Fazztrack Head Office</div>
            <div class="text-xl text-slate-500">CIBIS Park, Jl. TB Simatupang No.2, RT.13/RW.5, Cilandak Tim., Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560</div>
          </div>
          <div class="text-xl text-slate-500">
            Senin - Jumat (08.00 - 18.00)
          </div>
          <div>
            <div class="pb-2 text-secondary text-2xl font-bold">Kontak Kami</div>
            <div class="text-xl text-slate-500">+6282261564148</div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full h-72 bg-secondary/10 flex flex-col justify-center items-center gap-11">
        <div class="text-2xl md:text-3xl font-semibold text-black text-center">
            Tunggu Apa Lagi? GabungBersama Kami!
        </div>
        <RouterLink to="/" class="btn btn-secondary text-white capitalize font-semibold text-lg rounded">
            Daftar Sekarang
        </RouterLink>
    </section>
  </div>
  <Footer/>
</template>
