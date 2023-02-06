import { useState } from 'react';
import '../App.css';

export default function Form() {


    const [form, setForm] = useState({
        isim: "",
        pozisyon: "",
        tecrübe: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setForm(e.target.value)
    }


    return (
        <section class="form-section">
        <div className="form">
            <form onSubmit={handleSubmit}>
               
                    <h2>Let's get in contact!</h2>
                
            <div  style={{textAlign: "center", fontSize: "1rem" }}></div>
                <p>
                    <label>Company Name :</label>
              
                    <input
                        type="text" className='inputtext'
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </p>

                <p>
                    <label>Position that your company needs :</label>
              
                    <input
                        type="text" className='inputtext'
                        name="position"
                        value={form.position}
                        onChange={handleChange}
                    />
                </p>

                <p>
                    <label>Experience preferance :</label>
                    
                    <input
                        type="text" className='inputtext'
                        name="experience"
                        value={form.experience}
                        onChange={handleChange}
                    />
                </p>
                <p>
                <input className='submit' type="submit" value="Propose the offer" />
                </p>
            </form>
        </div>
        </section>
    )
}