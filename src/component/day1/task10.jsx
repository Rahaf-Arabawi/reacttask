export default function student() {
    const students = ['Student 1','Student 2','Student 3','Student 4']
  
    const listItems = students.map((student) =>
      <li key={student.toString()}
      style={{backgroundColor:"orange",width:"100px",margin:"10px"}}
      >{student}</li>
    )
    return (
        <div>
            <h1>Task10</h1>
           <ul>{listItems}</ul>
        </div>
    )
  }
  