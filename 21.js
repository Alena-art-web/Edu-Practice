function switcheroo(x){
    let arr = x.split('');
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'a'){
        arr[i] = 'b';
      }else if(arr[i] === 'b'){
        arr[i] = 'a';
      }
    }
    
    let result = arr.join('');
    return result; 
}

switcheroo('aabacbaa'); 

