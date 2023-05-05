import { ActionType, CounterType, optionType } from "./counterRedux";


export const getStore =()=>{
    return (state: CounterType)=>state.count;
}

export const getHandelAction= (userType: optionType, payload : any) : ActionType =>{
    return {
        type: userType,
        payload : payload? payload: null,
    }
}

