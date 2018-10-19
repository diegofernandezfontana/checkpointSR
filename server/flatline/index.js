export const groupBy = (collection, iterator) => {
    var debajoOExactamente13 = [];
    var sobre13 = [];

    for(var i = 0; i < collection.length; i++){
        if(collection[i].age > 13){
            sobre13.push(collection[i])
        }else{
            debajoOExactamente13.push(collection[i])
        }
    }
    return {
        debajoOExactamente13,
        sobre13

    }
};




export const flowRight = (add1,add2) => {
    
};