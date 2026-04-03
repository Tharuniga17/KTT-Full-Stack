//RECURSION 
//it is the function that is calling itself to solve a smaller version of the same problem 
function pow(x,n){
    if(n == 1){
        return x;
    }
    return x * pow(x,n-1);
}
console.log(pow(2,3));
//we use in laptop folders where files are inside folders,used in calculators, searching algorithms,trees
//recursion is also used in reddit and instagram comments 


//STACK - it is a data structure which shows last item we put will come first LIFO
//basic operations - push(),pop(),peek(),isempty()
stack = []
stack.push("A");
stack.push("B");
stack.push("C")
console.log(stack)
stack.pop();
console.log(stack);
console.log(stack[stack.length - 1]);


function sumall(...args){
    console.log(args);
}
sumall(1,2,3,4);

sumall =[1,2,3,4,5]
console.log(...sumall)