<template>
    <div class="blob2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F59E0B"
                d="M33.1,-24.9C47.1,-8.8,65.7,5.2,67.3,22.2C68.9,39.2,53.5,59.2,36.5,62.3C19.4,65.4,0.6,51.5,-18.2,41.2C-37.1,30.8,-56,24,-62.4,10.2C-68.8,-3.6,-62.7,-24.4,-50.2,-40.1C-37.7,-55.9,-18.8,-66.7,-4.7,-63C9.5,-59.3,19,-41,33.1,-24.9Z"
                transform="translate(100 100)" />
        </svg>
    </div>
</template>

<style>
.blob2 {
    position: absolute;
    top: 50%;
    left: 0;
    height: auto;
    width: 1000px;
    transform: translate(-10%, -50%);
    filter: blur(55px);
    opacity: 0.25;
    z-index: 0;
}
</style>