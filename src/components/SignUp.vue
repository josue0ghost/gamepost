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
                class="my-3 col-6 custom-input-2 font-general "
                name="Name"
                :rules="{ required: true }"
                prepend-icon="ni ni-email-83"
                placeholder="name"
                v-model="user.name"
                style="margin-right: 5px; margin-left: 10px;"
              >
              </b-form-input>

              <b-form-input
                alternative
                class="my-3 col-6 custom-input-2 font-general "
                name="Lastname"
                :rules="{ required: true }"
                prepend-icon="ni ni-lock-circle-open"
                placeholder="last name"
                v-model="user.lastName"
                style="margin-right: 10px; margin-left: 5px;"
              >
              </b-form-input>

              <b-form-input
                alternative
                class="mb-3 custom-input font-general"
                name="Email"
                :rules="{ required: true, email: true }"
                :state="invalidEmailFeedback"
                prepend-icon="ni ni-lock-circle-open"
                placeholder="email"
                v-model="user.email"
              >
              </b-form-input>

              <b-form-input
                alternative
                class="mb-3 custom-input font-general"
                name="Password"
                :rules="{ required: true }"
                :state="invalidPasswordFeedback"
                prepend-icon="ni ni-lock-circle-open"
                type="password"
                placeholder="password"
                v-model="user.password"
              >
              </b-form-input>

              <b-form-input
                class="mb-3 custom-input font-general"
                name="BirthDate"
                type="date"
                v-model="user.birthDate"
              >
              </b-form-input>

              <b-form-checkbox
                class="my-2"
                v-model="user.acceptTermsAndConditions"
              >
                Accept our terms and conditions
              </b-form-checkbox>
              <b-button
                type="submit"
                class="font-general"
                block
                variant="primary"
              >
                Sign Up
              </b-button>
              <b-alert
                v-model="signuperror"
                variant="warning"
                dismissible
                style="position: fixed; top: 1em; right: 1em;"
              >
                {{ errormsg }}
              </b-alert>
            </b-form>
          </b-card-body>
        </b-col>
      </div>
    </b-container>
  </div>
</template>

<script>
import auth from "@/store/apiroutes.js";
export default {
  computed: {
    invalidEmailFeedback() {
      return this.invalidEmail();
    },
    invalidPasswordFeedback() {
      return this.invalidPassword();
    }
  },
  data() {
    return {
      user: {
        name: "",
        lastName: "",
        email: "",
        password: "",
        birthDate: "",
        acceptTermsAndConditions: false
      },
      signuperror: false,
      errormsg: ""
    };
  },
  methods: {
    invalidEmail() {
      return this.user.email.includes("@");
    },
    invalidPassword() {
      return this.user.password.length >= 8;
    },
    async onSubmit() {
      // this will be called only after form is valid. You can do api call here to login
      if (!this.invalidPassword() || !this.invalidEmail()) {
        this.errormsg = "Fields must be valid";
        this.signuperror = true;
        return;
      }

      if (this.user.name == "" || this.user.lastName == "") {
        this.errormsg = "Must enter name and last name";
        this.signuperror = true;
        return;
      }

      const now = new Date();
      now.setDate(now.getDate() - 18 * 365);
      const datesplitted = this.user.birthDate.split("-");
      const vBirthdate = new Date(
        datesplitted[0],
        datesplitted[1],
        datesplitted[2]
      );

      if (vBirthdate - now <= 0 && this.user.acceptTermsAndConditions == true) {
        try {
          await auth.signup(this.user).then(response => {
            if (response.status == 200) {
              this.signuperror = false;
              this.$router.push("/");
            }
          });
        } catch (err) {
          if (err.response.status == 409) {
            this.errormsg = "Email already registered";
          } else {
            this.errormsg = "Unexpected error, please try later";
          }
          this.signuperror = true;
        }
      } else {
        if (!this.user.acceptTermsAndConditions) {
          this.errormsg = "You must accept our terms and conditions";
        } else {
          this.errormsg = "You must be 18 or older";
        }
        this.signuperror = true;
      }
    }
  }
};
</script>
