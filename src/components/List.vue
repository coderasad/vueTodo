<template>
    <div class="d-flex">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="list.isDone" value=""
                   :id="`item-list-pinned-${list.id}`">
            <label @dblclick="editData(index)" :class="{'text-decoration-line-through' : list.isDone}"
                   class="form-check-label text-data"
                   :for="`item-list-pinned-${list.id}`">
                {{ list.title | capitalize }}
            </label>
        </div>
        <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                ...
            </button>
            <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuButton1">
                <li>
                    <a @click="pinTask(list)" v-if="list.isPinned === true" @click.prevent="list.isPinned = false" class="dropdown-item" href="#"><i
                        class="me-3 fas fa-thumbtack"></i>Unpin
                    </a>
                    <a @click="pinTask(list)" v-if="list.isPinned === false " @click.prevent="list.isPinned = true" class="dropdown-item" href="#"><i
                        class="me-3 fas fa-thumbtack"></i>Pin on the top
                    </a>
                </li>
                <li><a class="delete dropdown-item" @click.prevent="deleteTask(list)" href="#"> <i
                    class="me-3 fa fa-trash"></i>Delete</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : "List",
    props: ['list', 'index', 'inputData'],
    methods:{
        deleteTask(task) {
            this.$parent.lists = this.$parent.lists.filter((list) => {
                return list.id !== task.id;
            })

            this.$emit('updateLocalStorage');
        },
        editData(index) {
            this.$parent.editIndex = index
            this.$parent.inputData = this.list.title
            this.$parent.inputData = this.$parent.lists[index].title;
            this.$emit('updateLocalStorage');
        },
        pinTask(index) {
            index.isPinned = index.isPinned !== true;
            this.$emit('updateLocalStorage');
        }
    },

    filters:{
        uppercase: function(value) {
            return value.toUpperCase();
        },
        //  first word of an input string
        capitalize2: function(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        //  capitalize the first letter
        capitalize: function(value) {
            const arr = value.split(" ");

            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

            }
            return arr.join(" ");
        },
        trim: function(value) {
            return value.trim();
        }
    }

}
</script>

<style scoped>

</style>