let arr=[1,2,3,4,5,6,7,8,9,10]
arr_length=arr.length
for(i=0;i<=10;i++){
    let current_value=arr[i]
    let is_even=current_value%2===0
    if(is_even){
        console.log(current_value)
    }
}