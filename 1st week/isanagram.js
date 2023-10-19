function isanagram(a,b){
    const mpa = new Map();
    const mpb = new Map();
    if(a.length != b.length)return false;
    else{
        for(var i=0;i<a.length;i++){
            mpa[a[i]]++;
            mpb[b[i]]++;
        }
    }
    for(const [key,val] of mpa){
        if(mpb[key] != val)return false;
    }
    return true;
}

var a = "abcbbb";
var b = "bcbb"

console.log(isanagram(a,b));