//Q#1
function arrayOfObj(){
    const arr=[];

    //create obj
    const car1={
        namee: "audi",
        colour:"red",
        price:12

    };


    const car2={
        namee:"hounda",
        colour:"black",
        price:3

    };

    const car3={
        namee:"civic",
        colour:"white",
        price:2
    };

    //add objs to the array
    arr.push(car1);
    arr.push(car2);
    arr.push(car3);

    //return
    return arr;

}
//call
const result=arrayOfObj();
//console
console.log(result);


