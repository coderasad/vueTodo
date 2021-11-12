<template>
    <div id="todo-section">
        <div class="mx-auto px-5 py-4 my-4 bg-color rounded-3">
            <h3 class="text-center text-uppercase fw-bold  text-dark text-decoration-underline">Task List</h3>
            <form @submit.prevent="saveData()">
                <div class="input-group mt-5">
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-align-left"></i></span>
                    <input required v-model="inputData" type="text" class="form-control" placeholder="Add a task...">
                </div>
            </form>
            <div class="todo-lists mt-3 text-white">
                <div class="pin-top">
                    <div class="list mb-3" v-for="(list, index) in pinnedItems" :key="index">
                        <list :list="list" :index=index :inputData=inputData ></list>
                    </div>
                </div>

                <div class="all-task">
                    <div class="list mb-3" v-for="(list, index) in generalItems" :key="index">
                        <list :list="list" :index=index :inputData=inputData ></list>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import List from "../components/List";
export default {
    name    : "TodoList",
    components: {List},
    data    : () => ({
        lists    : [],
        inputData: '',
        editIndex: '',

    }),
    computed: {
        pinnedItems() {
            return this.lists.filter(task => task.isPinned === true)
        },
        generalItems() {
            return this.lists.filter(task => task.isPinned === false)
        }
    },
    methods : {
        saveData() {
            if (this.editIndex !== '') {
                this.lists[this.editIndex].title = this.inputData
            } else {
                this.lists.push({
                    title   : this.inputData,
                    isDone  : false,
                    isPinned: false,
                })
            }
            this.inputData = '';
            this.editIndex = '';
        },

    }
}
</script>

<style lang="scss" scoped>

</style>