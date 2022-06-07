import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const _mockAdapter = new MockAdapter(axios);
_mockAdapter
    .onGet('/tasks')
    .reply(200, {
        tasks: [
            { id: 1, state: false, title: 'Create the best todo app' },
            { id: 2, state: false, title: 'Get the job interview' },
            { id: 3, state: false, title: 'Get hired :)' }
        ]
    });

const TasksService = {

    get: async () => {
        return axios
            .get('/tasks')
            .then((response) => {
                return response.data.tasks;
            });
    }

};

export default TasksService;