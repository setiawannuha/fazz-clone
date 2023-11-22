<script lang="ts">
interface IForm {
  email: string;
  password: string;
}
</script>

<script setup lang="ts">
import logo from "@/assets/logo.png";
import Input from "@/components/molecules/Input.vue";
import { reactive } from "vue";
import { loginAction } from "@/store/post/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const formRegister = reactive<IForm>({
  password: "",
  email: "",
});

const handleSubmit = () => {
  loginAction(
    {
      email: formRegister.email,
      password: formRegister.password,
    },
    () => {
      router.push("/");
    }
  );
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
          placeholder="Masukkan nama e-mail..."
          label="Email"
          default-value=""
          @passing-value="(value) => (formRegister.email = value)"
        />
        <Input
          type="password"
          placeholder="Masukkan kata sandi..."
          label="Kata Sandi"
          default-value=""
          @passing-value="(value) => (formRegister.password = value)"
        />
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center gap-1">
            <input type="checkbox" class="mr-2" />
            Ingat Akun Saya
          </div>
          <span class="text-[#2557a7] font-semibold">Lupa Password?</span>
        </div>
        <button class="btn btn-md bg-[#f16d1b] text-white font-semibold">
          Masuk
        </button>

        <span class="text-center my-3">Atau masuk menggunakan</span>

        <button class="btn btn-md bg-transparent font-semibold">
          <img src="@/assets/google.svg" alt="google icon" class="w-5" />
          Google
        </button>
      </form>
    </div>
  </div>
</template>
