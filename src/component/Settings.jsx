import React, { useState }  from "react";
import Settingsmod from "./Settingsmod"


export default function Settings(){
    const items = ['User Name','Email','Phone Number','Password']
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [passwrd, setPassword] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
      });

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormData({ name, email, phone, passwrd })
        console.log(formData);
    }
      

    return(
        <div className="py-3 col-span-4 h-full flex flex-col justify-center w-full px-6 items-center ">
            <div className="flex flex-col h-3/5 align-baseline w-4/5">
                {items.map((item, index) => (
                    <Settingsmod key={index} item={item} setname={setName} setphone={setPhone} setemail={setEmail} setpassword={setPassword} />
                ))}
            </div>
            <div >
                <button className="px-9 py-1.5 text-theGreen text-18 border-theGreen border-thewidth rounded-full hover:bg-theGreen hover:bg-opacity-10 transition-all ease-in duration-150" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    ) ;
}

