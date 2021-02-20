<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="navigation">
        <b-navbar-brand href="#">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <circle cx="30" cy="30" r="30" fill="#E5E5E5"/>
            <rect width="60" height="60" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0" transform="scale(0.004)"/>
            </pattern>
            <image id="image0" width="250" height="250" xlink:href="data:image/png;base64,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"/>
            </defs>
            </svg>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <input type="search" size="sm" class="mr-sm-2 searchbox" placeholder="Search...">
                        <a class="nav-icon" href="#"><span class="iconify" data-inline="false" data-icon="pixelarticons:search" style="color: #ffffff; font-size: 36px;"></span></a>
                        <a class="nav-icon" href="#"><span class="iconify" data-inline="false" data-icon="pixelarticons:home" style="color: #ffffff; font-size: 36px;"></span></a>
                        <a class="nav-icon" href="#"><span class="iconify" data-inline="false" data-icon="pixelarticons:notification" style="color: #ffffff; font-size: 36px;"></span></a>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>


</style>