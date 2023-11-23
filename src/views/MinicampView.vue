<script lang="ts" setup>
import Footer from '@/components/organisms/Footer.vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

    const categories = ["Disalurkan", "Engineering", "Design", "Product", "Marketing"];
    const { category } = useRoute().query;
    const filter = ref(category);
    const router = useRouter()

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
        <nav class="bg-white text-center py-3 flex justify-center">
            <div class="w-full max-w-[1080px] flex flex-col justify-center items-start gap-11    py-12">
                <div class="text-4xl text-black font-bold">Part-time bootcamp bersama expert terkemuka</div>
                <div class="w-full flex justify-between items-center text-xl font-bold text-slate-600">
                    <div>Top Trainer dari Perusahaan</div>
                    <div>Proyek Level Industri</div>
                    <div>Live Class</div>
                </div>
            </div>
        </nav>
        <nav class="sticky top-16 z-10 bg-white px-5 lg:px-20 py-3 flex justify-center">
            <div class="w-full max-w-[1080px] flex justify-start items-center gap-7 py-5 font-bold text-slate-500">
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
        </nav>
        <section class="w-full flex flex-col justify-center items-center gap-11 py-7 mb-24">
            <div class="w-full max-w-[1080px] text-black flex flex-col gap-3">
                <div class="w-full">
                    <div class="w-[1080px] flex justify-between items-center gap-5">
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img
                                src="https://minibootcamp.s3.ap-southeast-1.amazonaws.com/banner/file-1693204506289"
                                alt="Shoes"
                                />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    Kelas Persiapan Bootcamp Fullstack Web
                                </h2>
                                <p class="text-base text-slate-500">
                                    21 Oktober 2023 - 29 November 2023
                                </p>
                                <p class="text-base text-slate-500">
                                    Femilia Putri Mayranti
                                </p>
                                <div class="py-2">
                                    Pelajari Fullstack Website selama 5 Minggu dibimbing trainer berpengalaman 2+ tahun
                                </div>
                                <hr />
                                <div class="w-full flex justify-between items-center py-3">
                                    <p>Harga :</p>
                                    <p class="text-end text-black font-bold">Rp. 500.000</p>
                                </div>
                                <hr />
                                <div class="w-full flex justify-center items-center text-primary font-bold text-lg pt-3">
                                    <div>Daftar Waitlist</div>
                                </div>
                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img
                                src="https://minibootcamp.s3.ap-southeast-1.amazonaws.com/banner/file-1693204506289"
                                alt="Shoes"
                                />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    Kelas Persiapan Bootcamp Fullstack Web
                                </h2>
                                <p class="text-base text-slate-500">
                                    21 Oktober 2023 - 29 November 2023
                                </p>
                                <p class="text-base text-slate-500">
                                    Femilia Putri Mayranti
                                </p>
                                <div class="py-2">
                                    Pelajari Fullstack Website selama 5 Minggu dibimbing trainer berpengalaman 2+ tahun
                                </div>
                                <hr />
                                <div class="w-full flex justify-between items-center py-3">
                                    <p>Harga :</p>
                                    <p class="text-end text-black font-bold">Rp. 500.000</p>
                                </div>
                                <hr />
                                <div class="w-full flex justify-center items-center text-primary font-bold text-lg pt-3">
                                    <div>Daftar Waitlist</div>
                                </div>
                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img
                                src="https://minibootcamp.s3.ap-southeast-1.amazonaws.com/banner/file-1693204506289"
                                alt="Shoes"
                                />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    Kelas Persiapan Bootcamp Fullstack Web
                                </h2>
                                <p class="text-base text-slate-500">
                                    21 Oktober 2023 - 29 November 2023
                                </p>
                                <p class="text-base text-slate-500">
                                    Femilia Putri Mayranti
                                </p>
                                <div class="py-2">
                                    Pelajari Fullstack Website selama 5 Minggu dibimbing trainer berpengalaman 2+ tahun
                                </div>
                                <hr />
                                <div class="w-full flex justify-between items-center py-3">
                                    <p>Harga :</p>
                                    <p class="text-end text-black font-bold">Rp. 500.000</p>
                                </div>
                                <hr />
                                <div class="w-full flex justify-center items-center text-primary font-bold text-lg pt-3">
                                    <div>Daftar Waitlist</div>
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