import { lists } from './data';

export const load = async () => {
    // console.log(JSON.stringify(lists, null, 2));
    return {
        a: lists
    };
};