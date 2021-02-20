<template>
    <div>
        <b-container class="empty">
        </b-container>
        <b-container>
            <div class="row align-items-center">
                <b-col class="col-md-6 col-12 text-center">
                    <img alt="GamePost logo" width="100%" height="100%" src="../assets/logo.png" />
                </b-col>
                <b-col class="col-md-6 col-12 text-center">
                    <b-card-body class="square-card">                    
                        <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                            <b-form-input alternative
                                class="custom-input mb-3 font-general"
                                name="Email"
                                :rules="{required: true, email: true}"
                                :invalid-feedback="invalidFeedback"
                                prepend-icon="ni ni-email-83"
                                placeholder="email"
                                v-model="model.email">
                            </b-form-input>

                            <b-form-input alternative
                                class="custom-input mb-3 font-general"
                                name="Password"
                                :rules="{required: true, min: 6}"
                                prepend-icon="ni ni-lock-circle-open"
                                type="password"
                                placeholder="password"
                                v-model="model.password">
                            </b-form-input>

                            <b-form-checkbox class="my-3" v-model="model.rememberMe">Remember me</b-form-checkbox>

                            <router-link to="/feed">
                                <b-button class="font-general my-3" block variant="primary">Log In</b-button>
                            </router-link>
                        </b-form>
                        <a href="#" class="my-2">forgot password?</a>
                        <br>
                        <router-link to="/signup">not signed up? join now</router-link>
                    </b-card-body>
                </b-col>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        computed: {
            state() {
                return this.model.email.length >= 4
            },
            invalidFeedback() {
                if (this.model.email.length > 0) {
                    return 'Enter at least 4 characters.'
                }
                return 'T'
            }
        },
        data() {
            return {
                model: {
                    email: '',
                    password: '',
                    rememberMe: false
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