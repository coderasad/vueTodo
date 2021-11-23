<template>
    <div id="todo-section">
        <div class="mx-auto px-5 py-4 my-4 bg-color rounded-3">
            <h3 class="text-center text-uppercase fw-bold  text-dark text-decoration-underline">Task List</h3>
            <form @submit.prevent="saveData()">
                <div class="input-group mt-5">
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-align-left"></i></span>
                    <input required v-model="inputData" type="text" class="form-control" placeholder="Add a task...">
                    <p class="errorMsg d-block w-100 "
                       :class="[{'text-success': errorMsg.success},{'text-danger': errorMsg.success===false}]"
                       v-if="errorMsg.msg">
                        {{ errorMsg.msg }}
                    </p>
                </div>
            </form>
            <div class="todo-lists mt-3 text-white">
                <div class="pin-top">
                    <div class="list mb-3" v-for="(list, index) in pinnedItems" :key="index">
                        <List @updateLocalStorage="updateLocalStorage" :list="list" :index=index :inputData=inputData></List>
                    </div>
                </div>

                <div class="all-task">
                    <div class="list mb-3" v-for="(list, index) in generalItems" :key="index">
                        <List @updateLocalStorage="updateLocalStorage" :list="list" :index=index :inputData=inputData></List>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import List from "../components/List";

export default {
    name      : "TodoList",
    components: {List},
    data      : () => ({
        lists    : [],
        inputData: '',
        editIndex: '',
        errorMsg : {
            msg    : '',
            success: false
        },
    }),
    computed  : {
        pinnedItems() {
            return this.lists.filter(task => task.isPinned === true);
        },
        generalItems() {
            return this.lists.filter(task => task.isPinned === false)
        }
    },
    mounted() {
        this.lists = localStorage.todoData ? JSON.parse(localStorage.getItem('todoData')) : [];
    },
    methods   : {
        updateLocalStorage() {
            localStorage.setItem('todoData',JSON.stringify(this.lists))
        },
        saveData() {
            if (this.editIndex !== '') {
                this.lists[this.editIndex].title = this.inputData
            } else {
                this.lists.push({
                    id: Math.random().toString(36).substring(5),
                    title   : this.inputData,
                    isDone  : false,
                    isPinned: false,
                })
            }

            this.updateLocalStorage();

            this.inputData = '';
            this.editIndex = '';
        },
    },
    watch     : {
        inputData(newValue, oldValue) {
            if (this.inputData.length < 3 && this.inputData.length > 0) {
                this.errorMsg.success = false;
                this.errorMsg.msg     = 'Task value must be at least 3 characters long 😠'
            } else {
                let thisMy              = this
                thisMy.errorMsg.success = true;
                thisMy.errorMsg.msg     = 'Great! Good Job watcher test 😄';
                setTimeout(function () {
                    thisMy.errorMsg.msg = null;
                }, 3000);
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>