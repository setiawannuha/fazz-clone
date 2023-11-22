<script lang="ts">
interface IForm {
  fullname: string;
  email: string;
  handphone: string;
  password: string;
  repeatPassword: string;
  term: boolean;
}
</script>

<script setup lang="ts">
import logo from "@/assets/logo.png";
import Input from "@/components/molecules/Input.vue";
import { reactive } from "vue";
import { registerAction } from "@/store/post/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const formRegister = reactive<IForm>({
  fullname: "",
  password: "",
  email: "",
  handphone: "",
  repeatPassword: "",
  term: false,
});

const handleSubmit = () => {
  if (formRegister.password !== formRegister.repeatPassword) {
    window.alert("Password tidak sama");
  } else {
    registerAction({
      email: formRegister.email,
      password: formRegister.password,
    });
    router.push("/login");
  }
};
</script>

<template>
  <div class="w-full flex justify-center py-12">
    <div
      class="flex flex-col justify-center items-center max-w-2xl w-full border px-16 py-12"
    >
      <RouterLink to="/" class="mb-5"
        ><img :src="logo" class="w-24" alt=""
      /></RouterLink>
      <div class="text-center mb-10">
        <h3 class="text-xl font-semibold mb-2">Daftar & Mulai Belajar</h3>
        <p>
          Sudah punya akun Fazztrack?
          <span class="text-[#f16d1b]"> Masuk disini </span>
        </p>
      </div>
      <form class="w-full flex flex-col gap-4" @submit.prevent="handleSubmit">
        <Input
          type="text"
          placeholder="Masukkan nama lengkap..."
          label="Nama Lengkap"
          default-value=""
          @passing-value="(value) => (formRegister.fullname = value)"
        />
        <Input
          type="text"
          placeholder="Masukkan nama e-mail..."
          label="Email"
          default-value=""
          @passing-value="(value) => (formRegister.email = value)"
        />
        <Input
          type="text"
          placeholder="Masukkan no. handphone..."
          label="No. Handphone"
          default-value=""
          @passing-value="(value) => (formRegister.handphone = value)"
        />
        <Input
          type="password"
          placeholder="Masukkan kata sandi..."
          label="Kata Sandi"
          default-value=""
          @passing-value="(value) => (formRegister.password = value)"
        />
        <Input
          type="password"
          placeholder="Masukkan ulang kata sandi..."
          label="Konfirmasi Kata Sandi"
          default-value=""
          @passing-value="(value) => (formRegister.repeatPassword = value)"
        />
        <div class="flex items-center gap-2 mt-2">
          <input type="checkbox" class="mr-2" v-model="formRegister.term" />
          Saya menyetujui
          <span class="text-[#2557a7] font-semibold">Syarat dan Ketentuan</span>
        </div>
        <button
          class="btn btn-md bg-[#f16d1b] text-white font-semibold"
          :disabled="formRegister.term === false"
        >
          Daftar Fazztrack
        </button>
      </form>
    </div>
  </div>
</template>
