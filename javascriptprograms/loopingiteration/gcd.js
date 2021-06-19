var a=14;
var b=63

function gcd(a,b){
    if(!b){
        return a;

    }
    return gcd(b, a%b)
}