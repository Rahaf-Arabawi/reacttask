export default function NumberList() {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
  
    const EvenNumber = numbers.map((number) =>{
        if(number %2 ===0){
            return  <li key={number}>{number}</li>
             }
    });

    const OddNumber = numbers.map((number) =>{
        if(number %2 !==0){
            return  <li key={number}>{number}</li>
             }
    });

    return (
        <div>
            <h1>Task12</h1>
            <h4>Even Number</h4>
         <ul>{EvenNumber}</ul>

         <h4>Odd Number</h4>
         <ul>{OddNumber}</ul>
        </div>
          
    )
  }
  
