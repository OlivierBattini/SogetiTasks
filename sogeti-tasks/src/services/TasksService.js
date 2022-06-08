import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import arrayUpsert from '../utils/arrayUpsert';

const TASKS_API_PATH = '/tasks';

let state = {
    tasks: [
        { id: 1, state: false, title: 'Create the best todo app', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 2, state: false, title: 'Get the job interview', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 3, state: false, title: 'Get hired :)', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' }
    ]};

const _mockAdapter = new MockAdapter(axios);
_mockAdapter
    .onGet(TASKS_API_PATH)
    .reply(200, { tasks: state.tasks })
    .onPut(TASKS_API_PATH)
    .reply((config) => {
        let task = JSON.parse(config.data).task;
        state.tasks = arrayUpsert([ ...state.tasks ], task);
        return [ 200, { success: true } ];
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