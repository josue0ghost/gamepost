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
                                class="my-3 col-6 custom-input-2 font-general "
                                name="Name"
                                :rules="{required: true, email: true}"
                                :invalid-feedback="invalidFeedback"
                                prepend-icon="ni ni-email-83"
                                placeholder="name"
                                v-model="model.email"
                                style="margin-right: 5px; margin-left: 10px;">
                            </b-form-input>
                            <b-form-input alternative
                                class="my-3 col-6 custom-input-2 font-general "
                                name="Lastname"
                                :rules="{required: true, min: 6}"
                                prepend-icon="ni ni-lock-circle-open"
                                placeholder="last name"
                                v-model="model.password"
                                style="margin-right: 10px; margin-left: 5px;">
                            </b-form-input>
                            
                            <b-form-input alternative
                                class="mb-3 custom-input font-general"
                                name="Email"
                                :rules="{required: true, min: 6}"
                                prepend-icon="ni ni-lock-circle-open"
                                placeholder="email"
                                v-model="model.password">
                            </b-form-input>
                            <b-form-input alternative
                                class="mb-3 custom-input font-general"
                                name="Password"
                                :rules="{required: true, min: 6}"
                                prepend-icon="ni ni-lock-circle-open"
                                type="password"
                                placeholder="password"
                                v-model="model.password">
                            </b-form-input>
                            <b-form-input
                                class="mb-3 custom-input font-general"
                                type="date">

                            </b-form-input>

                            <b-form-checkbox class="my-2" v-model="model.rememberMe">Accept our terms and conditions</b-form-checkbox>

                            <b-button class="font-general " block variant="primary">Sign In</b-button>
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