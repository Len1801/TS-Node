
export const printObject = ( argument: any ) => {
    console.log( argument )
}

export function genericFuncion<T>( argument: T):T {
    return argument;
}

export const genericFunctionArrow = <T>( argument: T ) => argument;
