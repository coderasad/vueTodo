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
                    <div class="list d-flex mb-3" v-for="(list, index) in pinnedItems" :key="index">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="list.isDone" value="" :id="`item-list-pinned-${index}`">
                            <label :class="{'text-decoration-line-through' : list.isDone}" class="form-check-label text-data"
                                   :for="`item-list-pinned-${index}`">
                                {{ list.title }}
                            </label>
                        </div>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                ...
                            </button>
                            <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuButton1">
                                <li><a @click.prevent="list.isPinned = false" class="dropdown-item" href="#"><i class="me-3 fas fa-thumbtack"></i> Unpin on the
                                    Bottom</a></li>
                                <li><a class="delete dropdown-item" @click.prevent="deleteTask(index)" href="#"> <i
                                    class="me-3 fa fa-trash"></i>Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="all-task">
                    <div class="list d-flex mb-3" v-for="(list, index) in generalItems" :key="index">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="list.isDone" value="" :id="`item-list-${index}`">
                            <label @dblclick="editData(index)" :class="{'text-decoration-line-through' : list.isDone}" class="form-check-label text-data"
                                   :for="`item-list-${index}`">
                                {{ list.title }}
                            </label>
                        </div>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" id=""
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                ...
                            </button>
                            <ul class="dropdown-menu shadow" aria-labelledby="">
                                <li><a @click.prevent="list.isPinned = true" class="dropdown-item" href="#"><i class="me-3 fas fa-thumbtack"></i> Pin on the
                                    top</a></li>
                                <li><a class="delete dropdown-item" @click.prevent="deleteTask(index)" href="#"> <i
                                    class="me-3 fa fa-trash"></i>Delete</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name   : "TodoList",
    data   : () => ({
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
    methods: {
        saveData() {
            if(this.editIndex !== ''){
                this.lists[this.editIndex].title = this.inputData
            }else {
                this.lists.push({
                    title : this.inputData,
                    isDone: false,
                    isPinned: false,
                })
            }
            this.inputData = '';
            this.editIndex = '';
        },
        deleteTask(index) {
            this.lists.splice(index, 1)
        },
        editData(index){
            this.editIndex = index
            this.inputData = this.lists[index].title
        }

    }
}
</script>

<style lang="scss" scoped>

</style>