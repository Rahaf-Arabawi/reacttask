export default function student() {
  const students = ['Student 1','Student 2','Student 3','Student 4']

  const listItems = students.map((student) =>
    <li key={student.toString()}>{student}</li>
  )
  return(
    <div>
      <h1>Task9</h1>
      <ul>{listItems}</ul>
    </div>
  ) 
}
