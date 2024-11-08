<script setup>
import { useLayout } from '@/layout/composables/layout';
import AppConfigurator from './AppConfigurator.vue';
import AppLogout from './AppLogout.vue';

const { onMenuToggle, toggleDarkMode, isDarkTheme } = useLayout();

</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" @click="onMenuToggle">
                <i class="pi pi-bars"></i>
            </button>
            <router-link to="/" class="layout-topbar-logo">
                <!-- Substitua o SVG abaixo pelo seu SVG -->
                
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="1080.000000pt" height="1080.000000pt" viewBox="0 0 1080.000000 1080.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                        <path d="M3956 7483 c-8 -27 -76 -288 -156 -591 -39 -151 -69 -276 -66 -279 3
                        -3 39 66 81 153 86 179 117 232 189 323 102 127 241 220 422 280 137 46 277
                        61 559 61 l245 0 0 -445 0 -446 -47 27 c-92 52 -119 68 -203 123 -109 71 -247
                        170 -331 238 -36 29 -70 53 -74 53 -13 0 2 -412 20 -545 59 -450 199 -795 421
                        -1034 31 -34 75 -76 98 -94 22 -17 3 7 -44 54 -298 300 -440 753 -422 1357 1
                        45 5 82 10 82 4 0 63 -41 132 -90 254 -182 541 -338 924 -502 334 -143 420
                        -191 508 -285 144 -155 183 -429 89 -628 -64 -137 -201 -253 -393 -335 -103
                        -44 -196 -65 -438 -99 -119 -17 -256 -42 -304 -56 -293 -85 -485 -251 -560
                        -482 -18 -54 -35 -210 -30 -278 1 -22 3 -88 5 -147 1 -60 5 -108 7 -108 3 0
                        39 33 81 73 148 142 297 214 514 252 l38 6 -3 -283 c-3 -264 -4 -286 -24 -329
                        -37 -78 -102 -115 -244 -138 -114 -19 -219 -41 -259 -56 -30 -12 89 -14 784
                        -14 l820 0 -55 20 c-30 11 -98 26 -150 34 -194 31 -245 49 -298 109 -17 20
                        -36 52 -41 73 -7 23 -11 166 -11 359 l0 321 59 36 c63 39 204 182 234 238 l19
                        34 -28 -35 c-108 -133 -213 -213 -337 -258 -123 -44 -156 -48 -197 -20 -48 32
                        -70 80 -70 153 0 33 4 65 8 71 4 6 27 14 51 18 104 16 214 96 260 188 35 69
                        38 103 15 137 -20 29 -14 34 67 55 36 9 104 34 151 55 240 107 399 277 453
                        486 22 85 20 244 -5 339 -63 248 -204 377 -585 537 l-90 38 -3 571 -2 572 287
                        -4 c315 -5 384 -14 541 -70 149 -52 246 -113 348 -220 83 -86 136 -171 233
                        -372 45 -93 83 -167 86 -165 2 3 -11 61 -29 129 -19 69 -71 270 -117 447 l-84
                        323 -1527 0 c-1445 0 -1527 -1 -1532 -17z m1551 -2744 c-170 -146 -213 -412
                        -85 -529 l32 -30 -99 -1 c-55 0 -109 -2 -120 -4 -11 -1 -51 -6 -90 -9 -131
                        -13 -283 -66 -399 -140 -32 -20 -61 -34 -65 -31 -11 12 -2 204 14 272 46 199
                        213 356 465 437 58 19 150 41 205 50 55 8 111 17 125 19 64 10 66 8 17 -34z
                        m226 27 c40 -40 -21 -163 -110 -223 -50 -34 -122 -63 -155 -63 -15 0 -18 5
                        -13 23 28 90 140 233 207 262 42 18 53 18 71 1z"/>
                        <path d="M5194 5251 c7 -11 46 -35 46 -28 0 3 -12 12 -26 22 -15 9 -23 12 -20
                        6z"/>
                        <path d="M5250 5215 c0 -7 81 -47 86 -43 2 3 -17 14 -41 26 -25 12 -45 20 -45
                        17z"/>
                    </g>
                </svg>
           
                <span>ESTETICISTA TUANE</span>
            </router-link>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" @click="toggleDarkMode">
                    <i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"></i>
                </button>
                
                <div class="relative">
                    <button
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                        type="button"
                        class="layout-topbar-action layout-topbar-action-highlight"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <AppConfigurator />
                </div>
            </div>

            <button
                class="layout-topbar-menu-button layout-topbar-action"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
            >
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <!-- <button type="button" class="layout-topbar-action">
                        <i class="pi pi-calendar"></i>
                        <span>Calendar</span>
                    </button> -->
                    <!-- <button type="button" class="layout-topbar-action">
                        <i class="pi pi-inbox"></i>
                        <span>Messages</span>
                    </button> -->
                    <div class="relative">
                    <button v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                        type="button"
                        class="layout-topbar-action "
                    >
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                    <AppLogout />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>

.layout-topbar .layout-topbar-logo-container {
    width: 21rem;
}
</style>