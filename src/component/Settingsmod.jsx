import React,{useState}  from "react";

export default function Settingsmod({item,setname,setphone,setemail,setpassword}){
    const [Edit, setEdit] = useState(false);
    const [typee, setTypee] = useState("");
    const handlechange = (e) => {
        switch(item){
            case "User Name":
                setname(e.target.value);
                break;
            case "Email":
                setemail(e.target.value);
                break;
            case "Phone Number":
                setphone(e.target.value);
                break;
            case "Password":
                setpassword(e.target.value);
                break;
        }
      }


      const handleedit = () =>{
        switch(item){
            case "User Name":
                setTypee("text");
                break;
              case "Email":
                setTypee("email");
                break;
              case "Phone Number":
                setTypee("number");
                break;
              case "Password":
                setTypee("password");
                break;
              default:
                setTypee("");
                break;
          
        }
        setEdit(!Edit);
      }


    return(
        <div className="text-left border-b-2 border-theGrey px-1 my-2">
            <h2 className="text-theBlack text-14">{item}</h2>
            <div className="flex justify-between pr-2">
                {Edit ?
                     (<input className="text-theGrey text-18 pl-2 hover:border-none focus:border-none w-full" placeholder={item} onChange={handlechange} id={item} name={item} type={typee} ></input>) :
                     (<p className="text-theGrey text-18 pl-2">{item}</p>) } 
                <button className="text-theBlack text-18 pl-2" onClick={handleedit} >Edit</button>
            </div>
        </div>
    ) ;
}