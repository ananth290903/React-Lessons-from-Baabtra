const Red=(state=100,action)=>{
    if(action.type=="update"){
        state=action.value;
    }
    return state;

}
export default Red;
