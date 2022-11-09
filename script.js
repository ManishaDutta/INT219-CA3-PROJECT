/ /////////////////

var subarraysDivByK = function(nums, k) {
    
    const remIndexes=new Map();//rem-> indexes
    remIndexes[0]=[0,-1];
    let sum=0;
    

    for(let i=0;i<nums.length;i++){
        const num=nums[i];
            sum+=num;
            let rem=sum%k;
            if(rem<0)
                rem+=k;

            if(!remIndexes[rem]){
                remIndexes[rem]=[i+1,-1];
            }else{
                remIndexes[rem][1]=i+1;
            }

        }
        let idxes=[0,-1];
        for(const pair of Object.entries(remIndexes)){
            if(pair[1][1]!=-1 && (pair[1][1]-pair[1][0])>(idxes[1]-idxes[0])){
                idxes=pair[1];
            }
        }
        let  res=[]
        for(let i=idxes[0];i<=idxes[1]-1;i++)
            res.push(nums[i]);
        return res;
}

const submitBtn=document.getElementById('sbBtn')
submitBtn.addEventListener('click',()=>{
   
    const arr=document.getElementById('a').value.split(',').map(el=>Number.parseInt(el));
    
	const k=Number.parseInt(document.getElementById('kvalField').value);
	if(Number.isNaN(k) || !validateArr(arr) ){
        alert('Error:Invalid Inputs. Please recheck values for "array" or "k"')
    }
	const res=subarraysDivByK(arr,k);
	// const res=subarraysDivByK([4,5,0,-2,-3,1],7).join(' ');
	document.getElementById('res').innerHTML='['+res+']'
})
function validateArr(arr){
    for(const num of arr){
        if(Number.isNaN(num))
            return false;
    }
    return true;
}
// Driver program to test above
// var arr = [2, 7, 6, 1, 4, 5];
// var n = arr.length;
// var k = 3;

// document.write( "Length = "
// 	+ longestSubarrWthSumDivByK(arr, n, k));
	