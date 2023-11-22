<script lang="ts">
export default {
  name: "NavbarComponent",
  inheritAttrs: false,
  customOptions: {},
};
</script>
<script lang="ts" setup>
import { RouterLink } from "vue-router";
import logo from "@/assets/logo.png";
</script>
<template>
  <div class="px-3 shadow md:px-10 lg:px-20 navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu font-semibold dropdown-content mt-2 z-[1] p-2 shadow border bg-white rounded-lg w-screen -ml-3"
        >
          <li tabindex="0">
            <details>
              <summary>Kelas</summary>
              <ul class="w-64 p-2">
                <li>
                  <RouterLink to="/minicamp">Minicamp</RouterLink>
                </li>
                <li>
                  <RouterLink to="/online-course">Online Course</RouterLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Dukungan</summary>
              <ul class="w-64 p-2">
                <li>
                  <RouterLink to="/">Cicilan Kerja Setelah ISA</RouterLink>
                </li>
                <li>
                  <RouterLink to="/">Career Ready</RouterLink>
                </li>
                <li>
                  <RouterLink to="/">FAQ</RouterLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Tentang</summary>
              <ul class="w-64 p-2">
                <li>
                  <RouterLink to="/">Cerita Alumni</RouterLink>
                </li>
                <li>
                  <RouterLink to="/about">Sekilas Fazztrack</RouterLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <RouterLink to="/" class=""
        ><img :src="logo" class="w-28" alt=""
      /></RouterLink>
    </div>
    <div class="hidden navbar-center lg:flex">
      <ul class="px-1 space-x-3 font-semibold menu menu-horizontal">
        <li tabindex="0">
          <details>
            <summary>Kelas</summary>
            <ul class="w-40 p-2 border rounded-lg">
              <li>
                <RouterLink to="/minicamp">Minicamp</RouterLink>
              </li>
              <li>
                <RouterLink to="/online-course">Online Course</RouterLink>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Dukungan</summary>
            <ul class="w-40 p-2 border rounded-lg">
              <li>
                <RouterLink to="/">Cicilan Kerja Setelah ISA</RouterLink>
              </li>
              <li>
                <RouterLink to="/">Career Ready</RouterLink>
              </li>
              <li>
                <RouterLink to="/">FAQ</RouterLink>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Tentang</summary>
            <ul class="w-40 p-2 border rounded-lg">
              <li>
                <RouterLink to="/">Cerita Alumni</RouterLink>
              </li>
              <li>
                <RouterLink to="/about">Sekilas Fazztrack</RouterLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div class="space-x-2 md:space-x-3 navbar-end">
      <RouterLink to="/login" class="btn btn-md btn-primary btn-outline"
        >Masuk</RouterLink
      >
      <RouterLink to="/register" class="btn btn-md btn-primary"
        >Daftar</RouterLink
      >
    </div>
  </div>
</template>
