import { createSlice } from '@reduxjs/toolkit';

const TasksSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [ ]
    },
    reducers: {
        fetchTasksSuccess: (state, action) => {
            state.tasks = action.payload;
        },
        fetchTasksFailure: (state, action) => {
            console.error(`getTasksFailure: ${action.payload}`);
        }
    }
});

export default TasksSlice.reducer;
export const { fetchTasksSuccess, fetchTasksFailure } = TasksSlice.actions;