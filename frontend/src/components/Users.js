import React, { useEffect, useRef } from 'react';
import useGlobal from '../AppState';

const Users = () => {
  const [store, update] = useGlobal();

  const username = useRef(null)
  const email = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault();

    update.CREATE_USER({
      "username": username.current.value,
      "email": email.current.value,
      "groups": []
    })

    update.GET_USERS()
  }

  useEffect(()=> {
    update.GET_USERS()
  }, [])

  return (
    <>
      <p>
        user:
        {store.user}
      </p>
      <ul>
        {
          store.users.map((user, index) => {
            return <li key={index}>{user.username} - {user.email}</li>
          })
        }
      </ul>

      <form onSubmit={onSubmit}>
        <input ref={username}></input>
        <br/>
        <input ref={email}></input>
        <br/>
        <button type='submit'>Create New User</button>
      </form>
    </>
  )
}

export default Users;

