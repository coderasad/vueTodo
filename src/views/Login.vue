<template>
    <div id="login-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-4 mt-5 p-5 shadow-lg position-relative overflow-hidden">
                    <span class="text-white d-block fw-bold mb-3 py-1 text-center text-uppercase color-gradient">Login</span>
                    <span class="caret-section p-2 position-absolute text-white">
                    </span>
                    <form @submit.prevent="logUser(formData)">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input v-model="formData.email" type="text" class="form-control" id="email" required>
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
    name: "Login",
    data: () => ({
        users         : [],
        formData      : {
            email   : '',
            password: '',
        },
        loginUserStatus:{}
    }),
    methods: {
        logUser() {
            this.users = localStorage.usersData ? JSON.parse(localStorage.getItem('usersData')) : [];
            this.users.forEach(data => {
                if(data.email === this.formData.email && data.password === this.formData.password ){
                    this.loginUserStatus= {
                        email : this.formData.email
                    };
                    localStorage.setItem('loginUserStatus',JSON.stringify(this.loginUserStatus))
                    this.$router.push({name: 'home'}).catch(()=>{});
                }
            })
        }
    },
}
</script>

<style scoped>
.caret-section {
    transform : rotate(45deg);
    top       : -50px;
    right     : -50px;
    width     : 100px;
    height    : 100px;
    box-shadow: 0 0px 10px rgb(0 0 0 / 90%);
    background : #cab815fa;
}
.caret-text{
    transform: rotate(
        -45deg);
    bottom: -16px;
    left: 8px;
    padding: 2px 10px;
    font-weight: 600;
    text-transform: uppercase;
    background-image: linear-gradient(to right top, #a59825, #fde400);
}
button{
    background-image: linear-gradient(to right top, #a59825, #fde400);
}
</style>