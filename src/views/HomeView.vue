<script setup lang="ts">
import Footer from "@/components/organisms/Footer.vue";
import { state } from "@/store/user/user.store";
</script>

<template>
  <main>
    <section class="w-full flex flex-col justify-center items-center gap-11 pt-24 pb-28">
      <div class="max-w-[1080px] flex flex-col justify-center items-center gap-9">
        <div class="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-11 pb-7">
          <div class="flex flex-col gap-11 w-full lg:w-[70%]">
            <div>
              <div class="text-5xl font-bold text-secondary pb-2 text-center lg:text-left">
                Ubah Hidupmu
              </div>
              <div class="text-5xl font-bold text-black text-center lg:text-left">
                Sekarang Juga
              </div>
            </div>
            <div class="text-black text-xl w-full lg:w-[70%] text-center lg:text-left px-11 md:px-0">
              Belajar menjadi software engineer secara online/remote selama 3
              - 6 bulan sampai diterima kerja, tanpa bayar di depan (Income
              Share Agreement).
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
          <div class="w-full lg:w-[30%] flex justify-center">
            <div class="card w-72 bg-base-100 shadow-xl">
              <figure class="rounded-xl overflow-hidden">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_448x531/img/bootcamps/big-frame-7.jpg"
                  alt="Shoes"
                  class="w-full"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="w-full grid grid-cols-2 xl:grid-cols-4 gap-5">
          <div class="flex justify-center items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center">
              <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
              
            </div>
            <div class="text-black text-lg font-semibold">
              Supportive Trainer
            </div>
          </div>
          <div class="flex justify-center items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center">
              <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
            </div>
            <div class="text-black text-lg font-semibold">
              Supportive Trainer
            </div>
          </div>
          <div class="flex justify-center items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center">
              <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
            </div>
            <div class="text-black text-lg font-semibold">
              Supportive Trainer
            </div>
          </div>
          <div class="flex justify-center items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center">
              <font-awesome-icon icon="fa-solid fa-chalkboard-user" />
            </div>
            <div class="text-black text-lg font-semibold">
              Supportive Trainer
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col justify-center items-center gap-11 bg-slate-100">
      <div class="w-full max-w-[1080px] text-black flex flex-col gap-3">
        <div class="w-full flex flex-col justify-center items-center gap-11 py-11 px-7 lg:px-0">
          <div class="w-full flex flex-col justify-center items-center gap-4">
            <div class="text-black text-2xl font-bold text-center">
              500+ lulusan bekerja di perusahaan ini
            </div>
            <div class="text-slate-500 text-xl font-semibold text-center">
              Fazztrack menjamin lulusan mendapat kesempatan membagun karir di
              perusahaan impian.
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
    <section class="w-full flex flex-col justify-center items-center gap-11 py-11">
      <div class="w-full max-w-[1080px] text-black flex flex-col gap-3 px-7 md:px-0">
        <div class="w-full flex flex-col justify-center items-center gap-2 py-11">
          <div class="text-black text-2xl font-bold text-center">
            Pilihan Bootcamp Fazztrack
          </div>
          <div class="text-slate-500 text-xl font-semibold text-center">
            Bootcamp dilaksanakan berdasarkan kurikulum yang telah disusun
            untuk kamu siap bekerja.
          </div>
        </div>
        <div class="w-full flex flex-col md:flex-row justify-between items-start gap-5 ">
          <div class="card flex-1 bg-base-100">
            <figure class="rounded-2xl">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_423x240/img/bootcamps/fullstack-mobile.jpg"
                alt="Shoes"
                class="w-full"
              />
            </figure>
            <div class="pt-5 flex flex-col gap-3">
              <h2 class="card-title">Fullstack Mobile</h2>
              <div>
                Mempelajari bagaimana membangun aplikasi mobile dengan
                Javascript dari tahap perancangan selama 3 bulan pembelajaran
                secara online.
              </div>
              <RouterLink
                to='/'
                class="text-primary font-semibold flex items-center gap-2"
              >
                Lihat Kurikulum <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </RouterLink>
            </div>
          </div>
          <div class="card flex-1 bg-base-100">
            <figure class="rounded-2xl">
              <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_423x240/img/bootcamps/fullstack-mobile.jpg"
                alt="Shoes"
                class="w-full"
              />
            </figure>
            <div class="pt-5 flex flex-col gap-3">
              <h2 class="card-title">Fullstack Website dan Golang</h2>
              <div>
                Bootcamp intensif selama 17 minggu (8 jam / hari) oleh trainer
                supportif untuk mempersiapkan kamu berkarir sebagai Fullstack
                Web Developer dan Backend Engineer.
              </div>
              <RouterLink
                to='/'
                class="text-primary font-semibold flex items-center gap-2"
              >
                Lihat Kurikulum <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col justify-center items-center gap-11 md:py-16">
      <div class="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-5 bg-slate-200 max-w-[1080px] p-14 md:rounded-3xl">
        <div class="max-w-[700px] flex flex-col gap-7">
          <div class="text-black text-3xl font-semibold text-center md:text-left">
            Tidak memiliki banyak waktu?
          </div>
          <div class="text-black text-2xl text-center md:text-left">
            Coba program Fazztrack Mini Bootcamp! Belajar dengan menyesuaikan
            waktumu dan bisa langsung disalurkan kerja.
          </div>
          <div class="w-full flex justify-center md:justify-start items-center">
            <RouterLink
              to='/'
              class="btn btn-primary w-48 text-white capitalize font-semibold rounded"
            >
              Lihat Mini Bootcamp
            </RouterLink>
          </div>
        </div>
        <div>
          <img src="https://www.fazztrack.com/_ipx/f_webp&q_100&s_450x360/img/minicamp-illustration.png" alt="" />
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col justify-center items-center gap-11 py-11 bg-primary">
      <div class="w-full max-w-[1080px] text-black flex flex-col gap-3 pb-16">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 px-7 lg:px-0">
          <div class="bg-primary w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
            <div class="text-white text-2xl font-semibold">
              Keunggulan Fazztrack
            </div>
            <div class="text-white text-base tracking-wide">
              Bootcamp Fazztrack akan membimbing kamu menjadi Software
              Engineer profesional sampai di salurkan kerja.
            </div>
          </div>
          <div class="bg-white w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
            <div class="text-black text-2xl font-semibold flex justify-start items-center gap-3">
              <div class="w-20 h-16">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_60x60/img/bootcamps/bootcamp-benefits-01.jpg"
                  alt=""
                  class="rounded-lg w-20 h-full"
                />
              </div>
              <div>Dapat Kerja Lebih Cepat</div>
            </div>
            <div class="text-black text-base tracking-wide">
              Selain menjamin lulus bootcamp, Fazztrack menjamin lulusan
              disalurkan kerja dengan dibekali pelatihan hard skill dan soft
              skill serta konsultasi karir untuk mendukung kesuksesan karir.
            </div>
            <RouterLink
              to='/'
              class="text-primary font-semibold flex items-center gap-2"
            >
              Pelajari Lebih Lanjut <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </RouterLink>
          </div>
          <div class="bg-white w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
            <div class="text-black text-2xl font-semibold flex justify-start items-center gap-3">
              <div class="w-20 h-16">
                <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_60x60/img/bootcamps/bootcamp-benefits-01.jpg"
                  alt=""
                  class="rounded-lg w-20 h-full"
                />
              </div>
              <div>Dapat Kerja Lebih Cepat</div>
            </div>
            <div class="text-black text-base tracking-wide">
              Selain menjamin lulus bootcamp, Fazztrack menjamin lulusan
              disalurkan kerja dengan dibekali pelatihan hard skill dan soft
              skill serta konsultasi karir untuk mendukung kesuksesan karir.
            </div>
            <RouterLink
              to='/'
              class="text-primary font-semibold flex items-center gap-2"
            >
              Pelajari Lebih Lanjut <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </RouterLink>
          </div>
          <div class="bg-white w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
            <div class="text-black text-2xl font-semibold flex justify-start items-center gap-3">
              <div class="w-20 h-16">
                <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_60x60/img/bootcamps/bootcamp-benefits-01.jpg"
                  alt=""
                  class="rounded-lg w-20 h-full"
                />
              </div>
              <div>Dapat Kerja Lebih Cepat</div>
            </div>
            <div class="text-black text-base tracking-wide">
              Selain menjamin lulus bootcamp, Fazztrack menjamin lulusan
              disalurkan kerja dengan dibekali pelatihan hard skill dan soft
              skill serta konsultasi karir untuk mendukung kesuksesan karir.
            </div>
            <RouterLink
              to='/'
              class="text-primary font-semibold flex items-center gap-2"
            >
              Pelajari Lebih Lanjut <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </RouterLink>
          </div>
          <div class="bg-white w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
            <div class="text-black text-2xl font-semibold flex justify-start items-center gap-3">
              <div class="w-20 h-16">
                <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_60x60/img/bootcamps/bootcamp-benefits-01.jpg"
                  alt=""
                  class="rounded-lg w-20 h-full"
                />
              </div>
              <div>Dapat Kerja Lebih Cepat</div>
            </div>
            <div class="text-black text-base tracking-wide">
              Selain menjamin lulus bootcamp, Fazztrack menjamin lulusan
              disalurkan kerja dengan dibekali pelatihan hard skill dan soft
              skill serta konsultasi karir untuk mendukung kesuksesan karir.
            </div>
            <RouterLink
              to='/'
              class="text-primary font-semibold flex items-center gap-2"
            >
              Pelajari Lebih Lanjut <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </RouterLink>
          </div>
          <div class="bg-white w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
            <div class="text-black text-2xl font-semibold flex justify-start items-center gap-3">
              <div class="w-20 h-16">
                <img
                src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_60x60/img/bootcamps/bootcamp-benefits-01.jpg"
                  alt=""
                  class="rounded-lg w-20 h-full"
                />
              </div>
              <div>Dapat Kerja Lebih Cepat</div>
            </div>
            <div class="text-black text-base tracking-wide">
              Selain menjamin lulus bootcamp, Fazztrack menjamin lulusan
              disalurkan kerja dengan dibekali pelatihan hard skill dan soft
              skill serta konsultasi karir untuk mendukung kesuksesan karir.
            </div>
            <RouterLink
              to='/'
              class="text-primary font-semibold flex items-center gap-2"
            >
              Pelajari Lebih Lanjut <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col justify-center items-center gap-11 py-11 bg-primary/10">
      <div class="w-full max-w-[1080px] text-black flex flex-col gap-3 pb-16 px-4 md:px-0">
        <div class="w-full flex justify-between items-center my-9">
          <div class="flex flex-col gap-2">
            <div class="text-black text-2xl font-bold flex justify-start items-center gap-1">
              Alumni
              <span>
                <AiFillHeart class="text-primary" />
              </span>
              Fazztrack
            </div>
            <div class="text-slate-500 text-xl font-semibold">
              Testimoni alumni Fazztrack tentang bootcamp dan penyaluran kerja
              yang sudah mereka ikuti.
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center lg:justify-between items-center gap-5 flex-wrap">
          <div class="bg-white w-[520px] rounded-xl p-5 flex flex-col gap-4">
            <div>
              Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan
              banyak manfaat. Dari skill teknikal dan juga soft skill, disana
              juga mendapatkan pengalaman yang sangat banyak, dari pengalaman
              project tim, hingga mengerjakan suatu project dengan jangka
              waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan
              ini mendapatkan relasi baru dan tentunya ilmu yang sangat
              bermanfaat.
            </div>
            <div class="flex justify-start items-center gap-3">
              <div class="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="" />
              </div>
              <div>
                <div class="text-black text-sm font-semibold">
                  Irfan Junaidi
                </div>
                <div class="text-black text-sm">
                  Software Engineer di PT. Anak Muda Digital
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white w-[520px] rounded-xl p-5 flex flex-col gap-4">
            <div>
              Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan
              banyak manfaat. Dari skill teknikal dan juga soft skill, disana
              juga mendapatkan pengalaman yang sangat banyak, dari pengalaman
              project tim, hingga mengerjakan suatu project dengan jangka
              waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan
              ini mendapatkan relasi baru dan tentunya ilmu yang sangat
              bermanfaat.
            </div>
            <div class="flex justify-start items-center gap-3">
              <div class="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="" />
              </div>
              <div>
                <div class="text-black text-sm font-semibold">
                  Irfan Junaidi
                </div>
                <div class="text-black text-sm">
                  Software Engineer di PT. Anak Muda Digital
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white w-[520px] rounded-xl p-5 flex flex-col gap-4">
            <div>
              Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan
              banyak manfaat. Dari skill teknikal dan juga soft skill, disana
              juga mendapatkan pengalaman yang sangat banyak, dari pengalaman
              project tim, hingga mengerjakan suatu project dengan jangka
              waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan
              ini mendapatkan relasi baru dan tentunya ilmu yang sangat
              bermanfaat.
            </div>
            <div class="flex justify-start items-center gap-3">
              <div class="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="" />
              </div>
              <div>
                <div class="text-black text-sm font-semibold">
                  Irfan Junaidi
                </div>
                <div class="text-black text-sm">
                  Software Engineer di PT. Anak Muda Digital
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white w-[520px] rounded-xl p-5 flex flex-col gap-4">
            <div>
              Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan
              banyak manfaat. Dari skill teknikal dan juga soft skill, disana
              juga mendapatkan pengalaman yang sangat banyak, dari pengalaman
              project tim, hingga mengerjakan suatu project dengan jangka
              waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan
              ini mendapatkan relasi baru dan tentunya ilmu yang sangat
              bermanfaat.
            </div>
            <div class="flex justify-start items-center gap-3">
              <div class="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="" />
              </div>
              <div>
                <div class="text-black text-sm font-semibold">
                  Irfan Junaidi
                </div>
                <div class="text-black text-sm">
                  Software Engineer di PT. Anak Muda Digital
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col justify-center items-center gap-11 py-7">
      <div class="w-full max-w-[1080px] text-black flex flex-col gap-3">
        <div class="w-full flex justify-between items-center my-9">
          <div class="px-3 md:px-0 flex flex-col gap-2">
            <div class="text-black text-2xl font-bold">
              Cerita Alumni Bootcamp
            </div>
            <div class=" text-slate-500 text-xl md:font-semibold">
              Cerita perjalanan heroik alumni bootcamp
            </div>
          </div>
          <div class="hidden lg:block ">
            <RouterLink
              to='/'
              class="btn btn-neutral rounded bg-slate-50 border-slate-200 hover:bg-slate-200 hover:border-slate-200 capitalize text-black font-semibold text-lg"
            >
              Lihat cerita lainnya
            </RouterLink>
          </div>
        </div>
        <div class="w-full overflow-scroll py-7">
          <div class="w-[1080px] flex justify-between items-center gap-5">
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_586x328/img/alumni-story/alumni-story-1.png"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Lulusan Pesantren juga Bisa jadi DevOps Engineer
                </h2>
                <div>
                  Menjadi seorang santri sekaligus pelajar, bukanlah hal yang
                  mudah. Menjalani dua kegiatan secara bersamaan membuat saya
                  merasa kurang waktu belajar pemrograman disekolah. Banyak
                  tantangan yang harus dihadapi. Mulai dari bagaimana membagi
                  waktu antara mengaji, belajar akademik dan upgrade skills
                  programming.
                </div>
              </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_586x328/img/alumni-story/alumni-story-1.png"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Lulusan Pesantren juga Bisa jadi DevOps Engineer
                </h2>
                <div>
                  Menjadi seorang santri sekaligus pelajar, bukanlah hal yang
                  mudah. Menjalani dua kegiatan secara bersamaan membuat saya
                  merasa kurang waktu belajar pemrograman disekolah. Banyak
                  tantangan yang harus dihadapi. Mulai dari bagaimana membagi
                  waktu antara mengaji, belajar akademik dan upgrade skills
                  programming.
                </div>
              </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_586x328/img/alumni-story/alumni-story-1.png"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Lulusan Pesantren juga Bisa jadi DevOps Engineer
                </h2>
                <div>
                  Menjadi seorang santri sekaligus pelajar, bukanlah hal yang
                  mudah. Menjalani dua kegiatan secara bersamaan membuat saya
                  merasa kurang waktu belajar pemrograman disekolah. Banyak
                  tantangan yang harus dihadapi. Mulai dari bagaimana membagi
                  waktu antara mengaji, belajar akademik dan upgrade skills
                  programming.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:hidden w-full flex justify-center">
          <RouterLink
            to='/'
            class="btn btn-neutral rounded bg-slate-50 border-slate-200 hover:bg-slate-200 hover:border-slate-200 capitalize text-black font-semibold text-lg"
          >
            Lihat cerita lainnya
          </RouterLink>
        </div>
      </div>
    </section>
    <section class="w-full flex flex-col justify-center items-center gap-11 py-11">
      <div class="w-full max-w-[1080px] text-black flex flex-col gap-3 px-3 md:px-0">
        <div class="w-full flex flex-col justify-center items-center gap-5 py-3">
          <div class="text-black text-xl md:text-2xl capitalize font-bold text-center">
            Pertanyaan yang sering ditanyakan
          </div>
          <div class="text-lg md:text-xl text-slate-500 text-center">
            Bootcamp dilaksanakan berdasarkan kurikulum yang telah disusun
            untuk kamu siap bekerja.
          </div>
        </div>
        <div class="collapse collapse-arrow border-2 rounded-lg">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Syarat untuk mengikuti program pelatihan Fazztrack apa saja kak?
          </div>
          <div class="collapse-content">
            Syarat untuk mengikuti program pelatihan Fazztrack apa saja kak? -
            Tidak terikat kontrak dengan perusahan manapun, - Tidak dalam masa
            kuliah ataupun sekolah (kecuali semester 8), - Siap bekerja di
            perusahaan rekanan Fazztrack.
          </div>
        </div>
        <div class="collapse collapse-arrow border-2 rounded-lg">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Bagaimana tahapan program pelatihan ini?
          </div>
          <div class="collapse-content">
            <p>
              Pendaftaran > Tes dan Interview secara online > Proses
              Pelatihan
              > Tes dan Interview kerja > Bekerja.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow border-2 rounded-lg">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Sistem tesnya bagaimana kak?
          </div>
          <div class="collapse-content">
            <p>
              Nantinya akan dilaksanakan tes secara online di domisili
              masing-masing. Soal akan dikirim di grup discord jam 09.00 pada
              hari Senin, sesuai jadwal tes yang tertera di
              fazztrack.com/bootcamp
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow border-2 rounded-lg">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Bagaimana proses penyaluran kerja di Fazztrack?
          </div>
          <div class="collapse-content">
            <p>
              Pada pekan akhir pelatihan, kamu akan diberi tugas untuk membuat
              CV. Kemudian CV tersebut akan disalurkan oleh Fazztrack ke
              perusahaan rekanan kami. Jika CV kamu terpilih, kami akan
              menjadwalkan tes maupun interview dengan perusahaan tersebut.
              Jangan khawatir jika kamu belum terpanggil interview karena
              Fazztrack akan selalu membantu kamu untuk disalurkan kerja ke
              perusahaan yang lain.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow border-2 rounded-lg">
          <input type="radio" name="my-accordion-2" />
          <div class="collapse-title text-xl font-medium">
            Bagaimana proses pelatihan saat pandemi COVID-19?
          </div>
          <div class="collapse-content">
            <p>Pelatihan diadakan secara online saat pandemi COVID-19.</p>
          </div>
        </div>
        <div class="w-full flex justify-center items-center py-7">
          <RouterLink
            to="/"
            class="btn btn-neutral rounded bg-slate-50 border-slate-200 hover:bg-slate-200 hover:border-slate-300 capitalize text-black font-semibold text-lg"
          >
            Pelajari Selengkapnya
          </RouterLink>
        </div>
      </div>
    </section>
    <section class="w-full h-72 bg-primary/10 flex flex-col justify-center items-center gap-11">
        <div class="text-2xl md:text-3xl font-semibold text-black text-center">
            Tunggu Apa Lagi? GabungBersama Kami!
        </div>
        <RouterLink to="/" class="btn btn-secondary text-white capitalize font-semibold text-lg">
            Daftar Sekarang
        </RouterLink>
    </section>
    <Footer/>
  </main>
</template>
