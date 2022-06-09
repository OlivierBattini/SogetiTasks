import { createSlice } from '@reduxjs/toolkit';

import arrayUpsert from '../../utils/arrayUpsert';

const TasksSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [ ]
    },
    reducers: {

        // Fetch
        fetchTasksSuccess: (state, action) => {
            state.tasks = action.payload;
        },
        fetchTasksFailure: (state, action) => {
            console.error(`fetchTasksFailure: ${action}`);
        },

        // Upsert & switch (switch dispatches an upsert)
        upsertTaskSuccess: (state, action) => {
            state.tasks = arrayUpsert(state.tasks, action.payload);
        },
        upsertTaskFailure: (state, action) => {
            console.error(`upsertTaskFailure: ${action.payload}`);
        },

    }
});

export default TasksSlice.reducer;
export const { fetchTasksSuccess, fetchTasksFailure, upsertTaskSuccess, upsertTaskFailure } = TasksSlice.actions;