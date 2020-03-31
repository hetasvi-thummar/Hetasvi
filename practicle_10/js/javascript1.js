


// variable var
    var variable
    var x=10, y=20;
    var z=y-x;
    alert(z);
    alert(-x);
  
// variable const
    const name="ram";
    alert(name);

    // variable let
    let a=10,b="10";
    let c=a+b;
    alert (c);

    //example of  and   operand
    let subject="1234", marks=1234;
    alert(subject==marks);
    alert(subject===marks);

    // example of typeof
    let value=1/0;
    alert(typeof value);

    //  examaple of type convertion
   let num = Number(b);
   alert(typeof num);

   //  example of confirm box
   let cancle = confirm("want to cancle?");
   alert(cancle);


    // example of prompt box
    let salary = prompt(' your salary', 20000);
    alert(`Your salary ${salary} per month`);
    alert(`Your early income is  ${12*salary}`);

    

    // example of ternary operator
    let marks=60;
    let MARKS = age > 35 ? true : false;
    alert(MARKS);

    // example of Logical Operator
    let subject="hindi", marks =60;
    if(subject="hindi" || marks>35)
    {
        alert("you are passed");
    }
    else
    {
        alert('You aree fail');
    }


    //  example offunction

    function sum(value1,value2)
    {
        totalSum=value1+value2;
        alert(totalSum);
    }
    let result=sum(100,100);
    alert(result);

    // example of switch case

    let n= 4;

    switch (n) {
        case 1:
            alert('gujarati');
        case 2:
            alert('hindi');
        case 3:
            alert('maths');
        case 4:
            alert('computer');
        default:
            alert( "enter number between 1 to 4" );
    }

    // example of for loop

    for(let i=1;i<=5;i++)
    {
        alert(i*i);
    }

    


