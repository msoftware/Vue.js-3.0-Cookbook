<template>
    <div class="cardbox">
        <div class="container tasker">
            <strong>My Task is: {{ task }}</strong>
            <input
                type="text"
                v-model="task"
                class="taskInput"/>
            <button v-on:click="task = 'Test Task'">Test Task</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaskInput',
    data: () => ({
        task: '',
    }),
};
</script>

<style scoped>
.tasker {
    margin: 20px;
}

.tasker .taskInput {
    font-size: 14px;
    margin: 0 10px;
    border: 0;
    border-bottom: 1px solid rgba (0,0,0,0.75);
}
.tasker button {
    border: 1px solid rgba (0,0,0,0.75);
    border-radius: 3px;
    box-shadow: 0 1px 2px 0 rgba (0,0,0,0.2);
}
</style>