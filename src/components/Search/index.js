import { useState } from 'react'
import './index.css'

const Search = () => {
    const [userName, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [usersList, addUsers] = useState([])


    const onChangeName = event => {
            setUser(event.target.value)
    }

    const onChangeEmail = event => {
        setEmail(event.target.value)
}



const onSubmitForm = event => {
    event.preventDefault()

    const newuser = {
        userName,
        email
    }

    addUsers(prevState => [...prevState, newuser])

    // DB setting
    // const mySql = require("mysql")

    // const con = mySql.createConnection({
    //     host: "localhost",
    //     user: "root",
    //     password: "",  
    //     database: "user details"
    // }) 

    // con.connect(function(err){
    //     if (err) throw err;
        
    //     console.log("Database Connected.")

    //     con.query(`INSERT INTO users (Name, Email) VALUES (${userName}, ${email})`, function (err, result){

    //         console.log(result)

    //     })
    // })

    setUser("")
    setEmail("")
}

    console.log(usersList)

    return(
    <div className="Search-Tab-Con">
        <h1>Search Tab</h1>
    <div className='main-con'>
       
          <form className="form-con" onSubmit={onSubmitForm}>   
            <div className='input-con'>
            <label htmlFor="username">Name</label>
            <input  id="username" type="text" onChange={onChangeName} value={userName}/>
            </div>

            <div className='input-con'>
            <label htmlFor="password">Email</label>
            <input          
              id="password"
              type="text"
              onChange={onChangeEmail}
              value={email}
            />
            </div>
            
            <button type="submit" className="login-Btn">
              Store
            </button>
          </form>

          <button type="submit" className="login-Btn user-details">
              Display User
            </button>
     
        <form className="form-con">
            
        </form>
    </div>
    </div>
)
}

export default Search