import { useState } from 'react'

import './App.css'
import Toolbar from "./components/UI/Toolbar/Toolbar.tsx";
import UserForm from "./components/UserForm/UserForm.tsx";
import Users from "./components/Users/Users.tsx";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
            <Toolbar />
        </header>

        <main className='container'>
            <div className='row'>
                <div className='col-sm'>
                    <UserForm />
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
