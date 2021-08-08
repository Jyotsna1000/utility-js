const tail= (list)  =>{
    if(list.length==1)
    return list[0];
    else if(list.length > 1)
    return list.slice(1,list.length);
    else
    return [];
   }
 
 module.exports = tail;