// Question - 1

is_array=(obj)=>{
    return Array.isArray(obj);
};
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// Question - 2

array_Clone=(arr)=>{
    var d=[];
    for(idx in arr)
        d.push(arr[idx]);
    return d;
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// Question - 3

first = (arr,n=1)=>{
    var ans=[]
    for(let i=0;i<n;i++)
        ans.push(arr[i]);
    return ans;
        
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// Question - 4

combine = (arr)=>{
    console.log(arr.join(','));
    console.log(arr.join(','));
    console.log(arr.join('+'));
}
myColor = ["Red", "Green", "White", "Black"];
combine(myColor);

// Question - 5

most_freq =(arr)=>{
    var mMap={};
    if(arr.length==0)
        return;
    
        var max_ele;
        var count=0;
    for(var i=0;i<arr.length;i++)
    {
        if(mMap[arr[i]]==null)
            mMap[arr[i]]=1;
        else
            mMap[arr[i]]++;
        if(mMap[arr[i]]>count)
        {
            max_ele=arr[i];
            count=mMap[arr[i]];
        }       
    }
    // for(let [key,val] of mMap)
    //     {
    //         if(count<val)
    //             {
    //                 count=val;
    //                 max_ele=key;
    //             }
    //     }
    console.log(max_ele + '( '+count+' times )');
}

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
most_freq(arr1);
