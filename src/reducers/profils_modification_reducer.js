export function modification(etat, action){
    switch (action.type){
        case "OPEN" :
            return true;
        case "CLOSE" :
            return false;
        default :
            return false
    }
}