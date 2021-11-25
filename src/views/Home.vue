<template>
    <div class="home">
        <h1 class="text-center my-4 fw-bolder text-info">Mediusware Jobs</h1>
        <div class="container">
            <carousel :items="3" :margin="30" :dots="false" :autoplay="true" :loop="true" :nav="true" class="position-relative pt-5 slider-one">
                <div><img src="@/assets/footer.png"></div>
                <div><img src="@/assets/footer.png"></div>
                <div><img src="@/assets/footer.png"></div>
                <div><img src="@/assets/footer.png"></div>
                <div><img src="@/assets/footer.png"></div>
                <div><img src="@/assets/logo.svg"></div>
            </carousel>

            <div class="row mt-5">
                <div class="d-none gap-3">
                    <div @click="activeBtn = 1" class="btn" :class="activeBtn === 1 ? 'btn-success' : 'btn-warning'">Btn
                        1
                    </div>
                    <div @click="activeBtn = 2" class="btn" :class="activeBtn === 2 ? 'btn-success' : 'btn-warning'">Btn
                        2
                    </div>
                    <div @click="activeBtn = 3" class="btn" :class="activeBtn === 3 ? 'btn-success' : 'btn-warning'">Btn
                        3
                    </div>
                </div>
                <div class="d-flex gap-3">
                    <div v-for="(btn, index) in btnList"
                         @click="activeBtn = index + 1"
                         class="btn"
                         :class="activeBtn === index + 1 ? activeBtnClass : defaultBtnClass">
                        {{ btn.name }}
                    </div>
                </div>
                <div class="col-4" v-for="(job, index) in jobs">
                    <div class="card">
                        <div class="card-header">
                            {{ job.title }}
                        </div>
                        <div class="card-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    name: 'Home',
    data() {
        return {
            jobs           : [],
            activeBtn      : 1,
            btnList        : [
                {
                    name: "Btn 1",
                },
                {
                    name: "Btn 2",
                },
                {
                    name: "Btn 3",
                },
            ],
            defaultBtnClass: "btn-warning",
            activeBtnClass : "btn-success",
        }
    },
    components: {carousel},
    methods   : {
        getJobs() {
         /*   axios.get('https://hr.mediusware.xyz/api/jobs/').then(res => {
                this.jobs = res.data;
            })*/
        }
    },
    mounted() {
        this.getJobs();
        this.$root.newLoginStatus = JSON.parse(localStorage.getItem('loginUserStatus'));
    }
}
</script>
