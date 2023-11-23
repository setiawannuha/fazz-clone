<script lang="ts" setup>
import Footer from '@/components/organisms/Footer.vue';
import { state } from "@/store/user/user.store";
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const loggedIn = state.data.token
const router =  useRouter()

onMounted(() => {
    if(!loggedIn){
        router.push('/')
    }
})
</script>

<template>
    <div>
        <section class="w-full flex justify-center items-start py-16">
            <div class="w-full max-w-[1080px] flex justify-between items-start gap-5">
                <div class="w-96 flex flex-col gap-5">
                    <div class="w-full flex flex-col justify-center items-center gap-7 pt-11 border">
                        <div class="w-36 rounded-full overflow-hidden">
                            <img src="https://i.pravatar.cc/300" alt="" class="object-cover">
                        </div>
                        <div v-if="loggedIn" class="text-center w-full text-black text-xl font-semibold px-5 capitalize">
                            {{ state.data.email.split('@')[0] }}
                        </div>
                        <div v-else class="text-center w-full text-black text-xl font-semibold px-5 capitalize">
                            User
                        </div>
                        <div class="w-full text-center bg-yellow-200 py-5 text-xl text-black">
                            Student ID <span class="font-semibold">FAZFW127</span>
                        </div>
                    </div>
                    <div class="w-full">
                        <button class="btn btn-primary w-full rounded">Edit Profile</button>
                    </div>
                    <div class="w-full border p-5">
                        I am a Full Stack Developer who has a passion for the IT field. I have experience in PHP and JavaScript to develop web and mobile applications, especially for the Android Platform. I have several programming skills, such as Codeigniter, Laravel, React Native, React.js, and Node.js. I am a fast learner, adaptable, and collaborative in a team
                        <br />
                        <p v-if="loggedIn" class="pt-2">{{ state.data.email }}</p>
                        <p v-else class="pt-2">user@gmail.com</p>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-9">
                    <div class="w-full flex justify-between items-center">
                        <nav class="">
                            <div class="w-full flex justify-start items-center gap-7 py-5 font-bold text-slate-500 ">
                                <RouterLink :to="`/profile`">
                                    <span
                                    class="border-secondary border-b-4 font-semibold py-3 cursor-pointer"
                                    >Tentang</span
                                    >
                                </RouterLink>
                                <RouterLink :to="`/profile`">
                                    <span
                                    class="border-b-4 font-semibold py-3 cursor-pointer"
                                    >Portofolio</span
                                    >
                                </RouterLink>
                                
                            </div>
                        </nav>
                        <div>
                            <button class="btn btn-secondary text-white rounded">Lihat CV</button>
                        </div>
                    </div>
                    <div class="w-full border p-5">
                        <div class="w-full flex justify-between pb-5">
                            <div class="text-2xl text-black font-semibold">Riwayat Pendidikan</div>
                            <div>Edit</div>
                        </div>
                        <hr />

                        <div class="w-full pt-5 flex justify-start items-center gap-7">
                            <div class="bg-slate-200 w-16 h-16 flex justify-center items-center rounded-md">
                                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-2xl text-slate-500"/>
                            </div>
                            <div class="text-slate-500">
                                <div class="text-2xl text-black font-semibold">Fazztrack</div>
                                <div>Fullstack Web Developer</div>
                                <div>Februari 2023 - Agustus 2023</div>
                            </div>
                        </div>
                        <div class="w-full pt-5 flex justify-start items-center gap-7">
                            <div class="bg-slate-200 w-16 h-16 flex justify-center items-center rounded-md">
                                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-2xl text-slate-500"/>
                            </div>
                            <div class="text-slate-500">
                                <div class="text-2xl text-black font-semibold">Fazztrack</div>
                                <div>Fullstack Web Developer</div>
                                <div>Februari 2023 - Agustus 2023</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full border p-5">
                        <div class="w-full flex justify-between pb-5">
                            <div class="text-2xl text-black font-semibold">
                                <div>Kemampuan</div>
                                <div class="pt-2 text-base text-slate-500 font-normal">Kemampuan diambil dari repositori kamu dan nantinya akan tampil di PDF CV kamu.</div>
                            </div>
                            <div>Edit</div>
                        </div>
                        <hr />

                        <div class="w-full pt-5 flex justify-start items-center gap-7">
                            <div class="bg-slate-200 w-16 h-16 flex justify-center items-center rounded-md">
                                <font-awesome-icon icon="fa-solid fa-star" class="text-2xl text-slate-500"/>
                            </div>
                            <div class="text-slate-500 bg-slate-200 px-2 rounded-md font-semibold">
                                Codeigniter
                            </div>
                            <div class="text-slate-500 bg-slate-200 px-2 rounded-md font-semibold">
                                Codeigniter
                            </div>
                            <div class="text-slate-500 bg-slate-200 px-2 rounded-md font-semibold">
                                Codeigniter
                            </div>
                            <div class="text-slate-500 bg-slate-200 px-2 rounded-md font-semibold">
                                Codeigniter
                            </div>
                            <div class="text-slate-500 bg-slate-200 px-2 rounded-md font-semibold">
                                Codeigniter
                            </div>
                        </div>
                        
                    </div>
                    <div class="w-full border p-5">
                        <div class="w-full flex justify-between pb-5">
                            <div class="text-2xl text-black font-semibold">Prestasi</div>
                            <div>Edit</div>
                        </div>
                        <hr />

                        <div class="w-full pt-5 flex justify-start items-center gap-7">
                            <div class="bg-slate-200 w-16 h-16 flex justify-center items-center rounded-md">
                                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-2xl text-slate-500"/>
                            </div>
                            <div class="text-slate-500">
                                <div class="text-2xl text-black font-semibold">Fazztrack</div>
                                <div>Fullstack Web Developer</div>
                                <div>Februari 2023 - Agustus 2023</div>
                            </div>
                        </div>
                        <div class="w-full pt-5 flex justify-start items-center gap-7">
                            <div class="bg-slate-200 w-16 h-16 flex justify-center items-center rounded-md">
                                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-2xl text-slate-500"/>
                            </div>
                            <div class="text-slate-500">
                                <div class="text-2xl text-black font-semibold">Fazztrack</div>
                                <div>Fullstack Web Developer</div>
                                <div>Februari 2023 - Agustus 2023</div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full border p-5">
                        <div class="w-full flex justify-between pb-5">
                            <div class="text-2xl text-black font-semibold">Organisasi</div>
                            <div>Edit</div>
                        </div>
                        <hr />

                        <div class="w-full pt-5 flex justify-start items-center gap-7">
                            <div class="bg-slate-200 w-16 h-16 flex justify-center items-center rounded-md">
                                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-2xl text-slate-500"/>
                            </div>
                            <div class="text-slate-500">
                                <div class="text-2xl text-black font-semibold">Fazztrack</div>
                                <div>Fullstack Web Developer</div>
                                <div>Februari 2023 - Agustus 2023</div>
                            </div>
                        </div>
                        <div class="w-full pt-5 flex justify-start items-center gap-7">
                            <div class="bg-slate-200 w-16 h-16 flex justify-center items-center rounded-md">
                                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-2xl text-slate-500"/>
                            </div>
                            <div class="text-slate-500">
                                <div class="text-2xl text-black font-semibold">Fazztrack</div>
                                <div>Fullstack Web Developer</div>
                                <div>Februari 2023 - Agustus 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
</template>