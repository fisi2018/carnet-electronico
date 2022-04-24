import {useState,useRef} from "react";
export default function Carnet(){
    const [edit,setEdit]=useState(false);
    const [vision,setVision]=useState(false);
    const flag=useRef("no-activate");
    const [form,setForm]=useState({
        nombres:"carlos rodolfo",
        apellidos:"chavez mendoza",
        validTo:"Aug 01 2022 01:00",
        lastSync:"Apr 23 2022 22:30",
        profile:"/profilephoto.jpg"
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        if(name==="profile"){
            setForm({
                ...form,
                profile:URL.createObjectURL(e.target.files[0])
            });

        }else{
            setForm({
                ...form,
                [name]:value
            })
        }
    }
    const addImage=()=>{
        setEdit(true);
        flag.current="activate";
        document.querySelector("input[name='profile']").click();
    }
    const updateProfile=(e)=>{
        e.preventDefault();
        setEdit(false);
        flag.current="no-activate";
    }
    const changeVision=()=>{
if(flag.current==="no-activate"){
    vision?setVision(false):setVision(true);
}
        
    }
    return(
        <form onClick={changeVision} className="flex w-full" onSubmit={updateProfile}>
            {
                vision?
                <div className="bg-[#005470] text-[#A3C3CD] py-16 w-full  rounded-lg" >
                    <div className="w-full px-4 bg-white " >

                    <div className=" w-full h-16 bg-[url('/barcode2.png')]" >

                    </div>
                    </div>
                </div>
                :

            <div className="bg-[#005470] text-[#A3C3CD] py-2 w-full pl-2 rounded-lg flex justify-between" >
                        <ul>
                            <li className="relative flex px-2 mb-[0.25rem]" >
                                <input onChange={handleChange} name="profile" className="absolute max-w-0 w-0 z-0 top-4" accept="image/*" type="file" />
                                <img onClick={addImage} className="w-24 z-30 h-[7.5rem]" src={form.profile} alt="" />
                            </li>
                            <li>
                                {edit?
                                <input onChange={handleChange} className="uppercase bg-transparent outline-0 font-semibold text-sm" name="nombres" value={form.nombres} type="text" />
                                :
                                <p className="uppercase font-semibold text-sm" >{form.nombres}</p>
                                }
                            </li>
                            <li>
                                {edit?
                                <input onChange={handleChange} className="uppercase bg-transparent outline-0 font-semibold text-sm" name="apellidos" value={form.apellidos} type="text" />
                                :
                                <p className="uppercase font-semibold text-sm" >{form.apellidos}</p>
                                }
                            </li>
                        </ul>
                        <ul className="text-sm font-semibold" >
                            <li className="flex justify-end">
                                <img className="w-10 h-auto" src="/LOGO_UPC.png" alt="" />
                            </li>
                            <li className="flex flex-col items-end pr-2" >
                                <label htmlFor="validTo">Valid To:</label>
                                {
                                    edit?
                                    <input value={form.validTo} className="w-full outline-0 bg-transparent" name="validTo" onChange={handleChange} type="text" />
                                    :
                                <p name="validTo">{form.validTo}</p>
                                }
                            </li>
                            <li className="flex flex-col mt-2 items-end pr-2 " >
                                <label htmlFor="lastSync">Last Sync:</label>
                                 {
                                    edit?
                                    <input value={form.lastSync} className="w-full outline-0 bg-transparent" name="lastSync" onChange={handleChange} type="text" />
                                    :
                                <p name="lastSync">{form.lastSync}</p>
                                }
                            </li>
                            <li className="flex justify-end pr-2" >
                                {
                                    edit?
                                <button type="submit" className="flex mt-4 rounded-lg bg-[#1C4155] justify-center py-2 px-6 items-center" >
                                    Active
                                </button>
                                    :
                                    <span className="flex mt-4 rounded-lg bg-[#1C4155] justify-center py-2 px-6 items-center" >
                                        Activate
                                    </span>
                                }
                            </li>
                        </ul>
                    </div>
            }
        </form>
       
    )
}