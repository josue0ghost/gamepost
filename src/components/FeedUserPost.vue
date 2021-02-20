<template>
    <div class="posting container text-center row">
        <div class="col-1">
            <div class="user"></div>
        </div>
        <div class="col-11 posting">
            <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                <b-form-textarea alternative
                    class="mt-3 post-input"
                    name="Post"
                    placeholder="What are you creating?"
                    rows="5"
                    max-rows="5"
                    no-resize
                    v-model="model.textContent">
                </b-form-textarea>
                <button class="post-icon" style="border: none; float: left;">
                    <span class="iconify" data-inline="false" data-icon="pixelarticons:gamepad" style="font-size: 39px;"></span>
                </button>
                <button class="post-icon" style="border: none; float: right;">
                    <span class="iconify" data-inline="false" data-icon="pixelarticons:arrow-right" style="font-size: 37px;"></span>
                </button>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: {
                    textContent: ''
                }
            }
        },
        methods: {
            onSubmit() {
            // this will be called only after form is valid. You can do api call here to login
            }
        }
    }
</script>
