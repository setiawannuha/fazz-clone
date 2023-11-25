
<script lang="ts" setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {state, actions} from '@/store/minicamp/detailminicamp.store'

    const id = useRoute().params.id
    const token = localStorage.getItem("token")

    onMounted(async() => {
        try {
            const {data} = await axios.get(
                "https://fazz-track-sample-api.vercel.app/minicamp/"+id,
                {
                headers: {
                    Authorization: token
                },
                }
            )
            actions.detailMinicampFulfilled(data)
        } catch (error) {
            console.log(error)
        }
    })

</script>

<template>
        <div class="w-full">
        <div class="w-full py-3 flex flex-col justify-center items-center">
            <div class="w-full px-5 lg:px-0 max-w-[1080px] flex flex-col justify-center items-start gap-11 py-12">
                <div class="w-full text-4xl text-black font-bold">{{ state.detail?.data?.title}}</div>
                <div class="w-full flex justify-between items-center text-xl font-bold text-slate-600">
                   <div>Siap jadi DevOps Engineer dan pelajari skillnya bersama mentor profesional 2+ tahun sebagai DevOps Engineer di Paxel Indonesia dan Tribun Regional Newspaper.</div>
                </div>
            </div>
        </div>
        <section class="w-full flex justify-center items-start">
            <div class="w-full max-w-[1080px] flex justify-between items-start">
                <div class="flex flex-col gap-7 max-w-[50%]">
                    <div class="w-[300px]">
                        <img :src="state.detail?.data?.trainerPicture" alt="">
                    </div>
                    {{ state.detail?.data?.description }}
                </div>
                <div class="">
                    <div class="card bg-base-100 shadow-xl w-full">
                            
                            <div class="card-body border rounded-xl">
                                <div class="card-title">
                                    Batch {{ state.detail?.data?.batch }}
                                </div>
                                <p class="text-base text-slate-500">
                                    {{ state.detail?.data?.startDate }} - {{ state.detail?.data?.endDate }}
                                </p>
                                <p class="text-base text-slate-500">
                                    Lokasi {{ state.detail?.data?.location }}
                                </p>
                                <hr />
                                <div class="w-full flex justify-between items-center py-3">
                                    <p>Harga :</p>
                                    <p class="text-end text-black font-bold">Rp. {{ state.detail?.data?.price }}</p>
                                </div>
                                <div class="py-2">
                                    Ikuti waitlist untuk informasi pembukaan pendaftaran
                                </div>
                                <hr />
                                <div class="w-full flex justify-center items-center text-primary font-bold text-lg pt-3">
                                    <div>{{ state.detail?.data?.isWork ? 'Daftar Sekarang' : 'Daftar Waitlist' }}</div>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </section>
        
        <Footer/>
    </div>
</template>