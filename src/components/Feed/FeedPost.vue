<template>
    <div class="posting text-center">
        <div class="container row">
            <div class="col-md-2 col-sm-12 my-3">
                <div class="friend"></div>
            </div>
            <div class="col-md-9 col-sm-6 my-3">
                <b-link class="my-2" style="float: left;">{{model.name}}</b-link>
            </div>
            <div class="col-md-1 col-sm-6 my-3">
                <button class="post-icon" style="border: none;">
                    <span class="iconify" data-inline="false" data-icon="pixelarticons:more-horizontal" style="font-size: 39px;"></span>
                </button>
            </div>
        </div>
        <div class="container">
            <b-img :src="getImageUrl()" style="width:100%"></b-img>
        </div>
        <div class="container my-3">
            <img src="../../assets/Group 5.png"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: {
                    name: 'Arlene McGregor',
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
