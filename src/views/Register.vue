<template>
  <div class="register">
      <div>
          <form @submit.prevent="submit">
            <div>
              <label for="username">Username:</label>
              <input type="text" name="username" v-model="form.username">
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" name="email" v-model="form.email">
            </div>
            <div>
              <label for="first_name">First Name:</label>
              <input type="text" name="first_name" v-model="form.first_name">
            </div>
             <div>
              <label for="last_name">Last Name:</label>
              <input type="text" name="last_name" v-model="form.last_name">
            </div>
            <div>
              <label for="phone_number">Phone Number:</label>
              <input type="text" name="phone_number" v-model="form.phone_number">
            </div>
            <div>
              <label for="user_type">User Type:</label>
              <input type="text" name="user_type" v-model="form.user_type">
            </div>
            <div>
              <label for="number">Number:</label>
              <input type="text" name="number" v-model="form.number">
            </div>
            <div>
              <label for="account_type">Account Type:</label>
              <input type="text" name="account_type" v-model="form.account_type">
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" name="password" v-model="form.password">
            </div>
            <div>
              <label for="confirm_password">Confirm Password:</label>
              <input type="password" name="confirm_password" v-model="form.confirm_password">
            </div>
            <button type="submit"> Submit</button>
          </form>
      </div>
      <p v-if="showError" id="error">Username already exists</p>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "RegisterPage",
  components: {},
  data() {
    return {
      form: {
        username: "",
        first_name: "",
        last_name:"",
        email:"",
        confirm_password:"",
        phone_number:"",
        user_type:"",
        number:"",
        account_type:"",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/posts");
        this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;
}
button[type=submit]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  padding:10px;
  border-radius:30px;
}
#error {
  color: red;
}
</style>
