import React from 'react'
import img1 from './Salom.png'
const App = () => {
    return (
        <div className='sayt'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">numer</label>
                <input type="number" className="input" placeholder="numer" />

                <label className="label">tugilgan yil oy kun</label>
                <input type="date" className="input" placeholder="t  y, o" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>

        </div>



    )
}

export default App
