import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./Action.types";

export const add=(payload)=> {
    return {
        type: ADD_TASK ,
        payload 
    }
};
export const complete=(id)=> {
    return {
        type: COMPLETE_TASK ,
        payload :id
    }
};
export const edit=(id,value)=> {
    return {
        type:EDIT_TASK ,
        payload :{id,value}
    }
};
export const remove=(id)=> {
    return {
        type: DELETE_TASK ,
        payload : id
    }
}
