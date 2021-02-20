<template>
    <div class="posting container text-center row">
        <div class="row col-12 my-3">
            <div class="col-1">
                <div class="friend"></div>
            </div>
            <div class="col-11">
                <b-link class="my-2" style="float: left;">{{model.name}}</b-link>
                <button class="post-icon" style="border: none; float: right;">
                    <span class="iconify" data-inline="false" data-icon="pixelarticons:more-horizontal" style="font-size: 39px;"></span>
                </button>
            </div>
        </div>
        <div class="container">
            <b-img :src="getImageUrl()"></b-img>
        </div>
        <div class="container my-3">
            <img src="../assets/Group 5.png"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: {
                    name: 'Arlene McCoy',
                    imgsrc: 'https://esports.as.com/2020/04/21/bonus/Minecraft-puede-manera-gratuita-navegador_1348085179_378891_660x371.jpg'
                }
            }
        },
        methods: {
            getImageUrl(){
                const {imgsrc} = this.model
                return `${imgsrc}`
            }
        }
    }
</script>
