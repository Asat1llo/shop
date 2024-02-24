
export function reduser(state,action){

    const defaultValue = 2.927
         

    switch (action.type) {
        case 'INC':
            return (state += defaultValue );
            
        case 'DEC':
            return (state === defaultValue ? state = defaultValue : state -= defaultValue);
    
        default: return state;
    }
}

