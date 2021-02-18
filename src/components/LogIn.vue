<template>
    <div>
        <b-container>
            <div class="row justify-content-center align-items-center">
                <b-col class="col-md-6 col-12">
                    <img alt="GamePost logo" width="100%" height="100%" src="../assets/logo.png" />
                </b-col>
                <b-col class="col-md-6 col-12">
                    <b-card-body>                    
                        <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                            <b-form-input alternative
                                class="mb-3"
                                name="Email"
                                :rules="{required: true, email: true}"
                                :invalid-feedback="invalidFeedback"
                                prepend-icon="ni ni-email-83"
                                placeholder="email"
                                v-model="model.email">
                            </b-form-input>

                            <b-form-input alternative
                                class="mb-3"
                                name="Password"
                                :rules="{required: true, min: 6}"
                                prepend-icon="ni ni-lock-circle-open"
                                type="password"
                                placeholder="password"
                                v-model="model.password">
                            </b-form-input>

                            <b-form-checkbox v-model="model.rememberMe">Remember me</b-form-checkbox>

                            <b-button block variant="primary">Log In</b-button>
                        </b-form>
                        
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