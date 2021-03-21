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
                        <b-form role="form" @submit.prevent="onSubmit(onSubmit)">
                            <b-form-input alternative
                                class="my-3 col-6 custom-input-2 font-general "
                                name="Name"
                                :rules="{required: true}"
                                :invalid-feedback="invalidFeedback"
                                prepend-icon="ni ni-email-83"
                                placeholder="name"
                                v-model="user.name"
                                style="margin-right: 5px; margin-left: 10px;">
                            </b-form-input>
                            <b-form-input alternative
                                class="my-3 col-6 custom-input-2 font-general "
                                name="Lastname"
                                :rules="{required: true}"
                                prepend-icon="ni ni-lock-circle-open"
                                placeholder="last name"
                                v-model="user.lastName"
                                style="margin-right: 10px; margin-left: 5px;">
                            </b-form-input>
                            
                            <b-form-input alternative
                                class="mb-3 custom-input font-general"
                                name="Email"
                                :rules="{required: true, email: true}"
                                prepend-icon="ni ni-lock-circle-open"
                                placeholder="email"
                                v-model="user.email">
                            </b-form-input>
                            <b-form-input alternative
                                class="mb-3 custom-input font-general"
                                name="Password"
                                :rules="{required: true, min: 6}"
                                prepend-icon="ni ni-lock-circle-open"
                                type="password"
                                placeholder="password"
                                v-model="user.password">
                            </b-form-input>
                            <b-form-input
                                class="mb-3 custom-input font-general"
                                name="BirthDate"
                                type="date"
                                v-model="user.birthDate">

                            </b-form-input>

                            <b-form-checkbox class="my-2" v-model="user.acceptTermsAndConditions">Accept our terms and conditions</b-form-checkbox>

                            <b-button type="submit" class="font-general " block variant="primary">Sign In</b-button>
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
                return this.user.email.length >= 4
            },
            invalidFeedback() {
                if (this.user.email.length > 0) {
                    return 'Enter at least 4 characters.'
                }
                return 'T'
            }
        },
        data() {
            return {
                user: {
                    name: '',
                    lastName: '',
                    email: '',
                    password: '',
                    birthDate: '',
                    acceptTermsAndConditions: false
                }
            }
        },
        methods: {
            onSubmit() {
                // this will be called only after form is valid. You can do api call here to login
                
                console.log(this.user.name);
                console.log(this.user.lastName);
                console.log(this.user.email);
                console.log(this.user.password);
                console.log(this.user.birthDate);
            }
        }
    }
</script>