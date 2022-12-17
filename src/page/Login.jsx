import { useState } from "react"
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleUsername = (event) => {
        event.preventDefault()
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username)
        console.log(password)

        const data = {
            username,
            password,
        };

        fetch("https://kobarsept.com/api/login", {
            method: "POST", // HTTP method menggunakan PUT
            headers: {
                // HTTP headers
                "Content-type": "application/json", // type data yang dikirim
            },
            body: JSON.stringify(data), // data yang dikirim
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                const token = json.token
                localStorage.setItem("mypokemonToken", token)
            });

    }


    return (<form onSubmit={handleSubmit} >
        <label htmlFor="fname">User Name:</label>
        <input type="text" id="fname" name="fname" onChange={handleUsername} value={username} />
        <label htmlFor="lname">Password:</label>
        <input type="password" id="lname" name="lname" onChange={handlePassword} value={password} />

        <input type="submit" id="fsubmit" name="fsubmit" />
    </form >)

}

export default Login