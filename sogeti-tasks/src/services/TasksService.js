import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const TASKS_API_PATH = '/tasks';

const _mockAdapter = new MockAdapter(axios);
_mockAdapter
    .onGet(TASKS_API_PATH)
    .reply(200, {
        tasks: [
            { id: 1, state: false, title: 'Create the best todo app' },
            { id: 2, state: false, title: 'Get the job interview' },
            { id: 3, state: false, title: 'Get hired :)' }
        ]
    });
_mockAdapter
    .onPut(TASKS_API_PATH)
    .reply(200, (config) => {
        return { success: true };
    });

const TasksService = {

    getAll: async () => {
        return axios
            .get(TASKS_API_PATH)
            .then((response) => {
                return response.data.tasks;
            });
    },

    upsert: async (task) => {
        return axios
            .put(TASKS_API_PATH, { task })
            .then((response) => {
                return response.data;
            });
    }

};

export default TasksService;