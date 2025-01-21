export default function num(){
    var number =[1,2,3,4,5]
    const doubledNumbers = number.map((number) =>({
   original:number,
   doubled:number*2

}))
    return(
        <div>
            <h1>Task11</h1>
            <ul>
            {doubledNumbers.map((num, index) => (
          <li key={index}>
            <span style={{backgroundColor:"yellow"}}>Doubled</span> Numbers{num.original} is {num.doubled}
          </li>
        ))}
            </ul>
        </div>
    )
}  