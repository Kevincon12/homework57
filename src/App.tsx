import { useState } from 'react'
import './App.css'
import Toolbar from "./components/UI/Toolbar/Toolbar.tsx";
import UserForm from "./components/UserForm/UserForm.tsx";
import Users from "./components/Users/Users.tsx";
import type {User} from './types';

const App = () => {
  const [user, setUser] = useState<User[]>([]);

  const addUser = (user: User) => {
      setUser(prevState => [...prevState, user]);
      console.log(user);
  };

  return (
    <>
        <header>
            <Toolbar />
        </header>

        <main className='container'>
            <div className='row'>
                <div className='col-sm'>
                    <UserForm addUser={addUser} />
                </div>

                <div className='col-sm'>
                    <Users />
                </div>

            </div>


        </main>
    </>
  )
};

export default App
