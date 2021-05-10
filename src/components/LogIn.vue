<template>
  <div>
    <b-container class="empty"></b-container>
    <b-container>
      <div class="row align-items-center">
        <b-col class="col-md-6 col-12 text-center">
          <img
            alt="GamePost logo"
            width="100%"
            height="100%"
            src="../assets/logo.png"
          />
        </b-col>
        <b-col class="col-md-6 col-12 text-center">
          <b-card-body class="square-card">
            <b-form role="form" @submit.prevent="onSubmit(onSubmit)">
              <b-form-input
                alternative
                class="custom-input mb-3 font-general"
                name="Email"
                :rules="{ required: true, email: true }"
                prepend-icon="ni ni-email-83"
                placeholder="email"
                v-model="user.email"
              >
              </b-form-input>

              <b-form-input
                alternative
                class="custom-input mb-3 font-general"
                name="Password"
                :rules="{ required: true, min: 6 }"
                prepend-icon="ni ni-lock-circle-open"
                type="password"
                placeholder="password"
                v-model="user.password"
              >
              </b-form-input>

              <b-form-checkbox class="my-3" v-model="user.rememberMe">
                Remember me
              </b-form-checkbox>
              <b-alert
                v-model="loginerror"
                variant="danger"
                dismissible
                style="position: fixed; top: 1em; right: 1em;"
              >
                email or password incorrect
              </b-alert>
              <b-button
                type="submit"
                class="font-general my-3"
                block
                variant="primary"
              >
                Log In
              </b-button>
            </b-form>

            <a href="#" class="my-2">forgot password?</a>
            <br />
            <router-link to="/signup">not signed up? join now</router-link>
          </b-card-body>
        </b-col>
      </div>
    </b-container>
  </div>
</template>

<script>
import auth from "@/store/apiroutes.js";

export default {
  data() {
    return {
      loginerror: false,
      user: {
        email: "",
        password: "",
        rememberMe: false
      }
    };
  },
  methods: {
    async onSubmit() {
      // this will be called only after form is valid. You can do api call here to login
      try {
        await auth.login(this.user).then(response => {
          if (response.status == 200) {
            this.loginerror = false;
            sessionStorage.userid = response.data.userid;
            sessionStorage.name = response.data.userName + ' ' + response.data.lastName;
            this.$router.push("/feed");
          } else {
            this.loginerror = true;
          }
        });
      } catch (err) {
        console.error(err);
        this.loginerror = true;
      }
    }
  }
};
</script>
