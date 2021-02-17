const findMean = (num1, num2, num3) => {
    if (typeof num1 != 'number'){
        throw new Error('This is wrong!')
    }
    if (typeof num2 != 'number'){
        throw new Error('This is wrong!')
    }
    if (typeof num3 != 'number'){
        throw new Error('This is wrong!')
    }
    const avg = (num1+num2+num3)/3;

    if(avg >=90 && avg <=100 ){
        return "A";
    }else if(avg >=80 && avg <90 ){
        return  "B";
    }else if(avg >=70 && avg <80){
        return "C";
    }else if(avg >=60 && avg <70){
        return "D";
    }else if(avg >0 && avg <60){
        return "F";
    }
}

const summation = (param) => {
    if (typeof param != 'number'){
        throw new Error('This is wrong!')
    }
    return (param * (param+1))/2;
}

const evenOdd = (param) => {
    if (typeof param != 'number'){
        throw new Error('This is wrong!')
    }
    if(param % 2 === 0 ){
        return 'even';
    }else if(param % 2 === 1 ){
        return 'odd';
    }
}

const repeatValue = (param, count) => {
    if (typeof count != 'number'){
        throw new Error('This is wrong!')
    }
   return param.repeat(count) ;
}


