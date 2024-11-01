import { useEffect, useState } from "react"

export default function Students(){
    let [students, setStudent] = useState([])
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setStudent(json))
    }, [])
    return (
        <>
            {
                students.map(student => (
                    <Student name={student.name} username={student.username} email={student.email}></Student>
                ))
            }
        </>
    )
}


function Student({name, username, email}){
    return <li>name: {name}, username: {username}, email: {email}</li>
}