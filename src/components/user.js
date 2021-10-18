import React , { useState, useEffect } from 'react'
import axios from 'axios'

const User = () => {

    const [profileUser,setProfileUser] = useState();
    const [loading , setIsLoading] = useState(false);

    useEffect (()=> {
        axios.get('https://minitwitterbackend.herokuapp.com/me')
        .then((data)=> {
            setProfileUser(data)
            setIsLoading(true)
        })
    }, [])
//  console.log(profileUser.data[0].name)
return (
<div>
<h1> HELLO </h1>
 {loading && (
     <>
        {profileUser.data[0].name}        
        {profileUser.data[0].email}
     </>
 )}

</div>
)

}

export default User;