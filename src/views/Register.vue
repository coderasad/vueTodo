<template>
    <div id="login-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-4 mt-5 p-5 shadow-lg position-relative overflow-hidden">
                    <span class="text-white d-block fw-bold mb-3 py-1 text-center text-uppercase color-gradient">Register</span>
                    <span class="caret-section p-2 position-absolute text-white">
                    </span>
                    <form @submit.prevent="saveUser(formData)">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input v-model="formData.email" type="text" class="form-control" id="email" required>
                            <!--                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>-->
                        </div>
                        <div class="mb-3">
                            <label for="pass" class="form-label">Password</label>
                            <input v-model="formData.password" type="password" class="form-control" id="pass" required>
                        </div>
                        <button type="submit" class="color-gradient btn border-0 text-white">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
export default {
    name: "Register",
    data: () => ({
        users         : [],
        formData      : {
            email   : '',
            password: '',
        },
        formDataBackup: {},
    }),
    mounted() {
        this.users = localStorage.usersData ? JSON.parse(localStorage.getItem('usersData')) : [];
        this.formDataBackup = Object.assign({}, this.formData);
    },
    methods: {
        saveUser(formData) {
            this.users.push(formData);
            localStorage.setItem('usersData', JSON.stringify(this.users))
            this.resetUser();
        },

        resetUser() {
            this.formData = Object.assign({}, this.formDataBackup);
        },
    },

}
</script>

<style scoped>

.caret-section {
    transform  : rotate(45deg);
    top        : -50px;
    right      : -50px;
    width      : 100px;
    height     : 100px;
    box-shadow : 0 0 10px rgb(0 0 0 / 90%);
    background : #cab815fa;
}

</style>