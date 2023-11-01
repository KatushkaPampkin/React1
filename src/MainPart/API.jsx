import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            setLoading(true)
            console.log(loading);
            await axios('https://jsonplaceholder.typicode.com/users')
                .then(res => setUsers(res.data))
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        fetching()
    }, [])
    return (
        <div>
            {error &&
                <h1 style={{textAlign: 'center', color: 'red'}}>Произошла ошибка {error}</h1>
            }
            {loading ?
                <h1 style={{textAlign: 'center'}} >Загрузка</h1>
                :
                users.length && users.map(user => (
                    <div
                        style={{display: 'flex', border: '1px solid #E1A43B', padding: '10px'}}
                        key={user.id}>
                        <p style={{marginRight: '5px'}}>{user.id}</p>
                        {user.name}
                    </div>
                ))
            }
        </div>
    )
}

export default API