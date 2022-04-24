import {IoArrowBack} from "@react-icons/all-files/io5/IoArrowBack";
import {FiLock} from "@react-icons/all-files/fi/FiLock";
import {FiCheck} from "@react-icons/all-files/fi/FiCheck";
import {RiCamera2Fill} from "@react-icons/all-files/ri/RiCamera2Fill";
import {ImLoop2} from "@react-icons/all-files/im/ImLoop2";
import {VscUnlock} from "@react-icons/all-files/vsc/VscUnlock";
import {FiCamera} from "@react-icons/all-files/fi/FiCamera";
import {CgPassword} from "@react-icons/all-files/cg/CgPassword";
import {AiOutlineDelete} from "@react-icons/all-files/ai/AiOutlineDelete"
import Carnet from "../components/comoon/Carnet";
export default function Home(){
    return(
        <section className="bg-[#141414] min-h-screen w-full" >
            <header className="flex justify-between items-center px-2 py-4" >
                <span className="flex text-[#C5C3C7] text-3xl justify-center items-center" >
                   <IoArrowBack/>
                </span>
                <h1 className="text-[#C5C3C7] font-semibold " >
                    UPC
                </h1>
            </header>
            <main className="py-2 px-4 w-full" >
                <div className="w-full px-2" >
                    <Carnet/>
                    <div>
                        <div className="flex items-center justify-center" >
                            <span className="w-2 my-2 block h-2 rounded-full bg-[#3C47C3]" ></span>
                        </div>
                        <div className="flex justify-center text-sm items-center" >
                            <div className="justify-center items-center flex mr-4" >
                                <p className="text-[#5C5C5C] mr-2" >Photo Status</p>
                                <span className="bg-[#C47610]  rounded text-2xl flex px-[0.125rem] justify-center items-center text-[#C0C0C0] " >
                                    <RiCamera2Fill/>
                                </span>
                            </div>
                            <div className="flex justify-center items-center" >
                                <p className="text-[#5C5C5C] mr-2 " >Credential</p>
                                <span className="flex text-2xl text-[#B6606C] items-center justify-center" >
                                    <FiLock/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="text-[#878787]  mt-6 px-4 font-semibold">
                    <li className="flex" >
                        <span className="text-2xl text-[#B6606C]" >
                            <FiCheck/>
                        </span>
                        <p className="ml-2 " >Set As Default</p>
                    </li>
                    <li className="flex my-8" >
                        <span className="text-2xl text-[#B6606C]" >
                            <ImLoop2/>
                        </span>
                        <p className="ml-2 " >Update Credential</p>
                    </li>
                    <li className="flex my-8" >
                        <span className="text-2xl text-[#B6606C]" >
                            <VscUnlock/>
                        </span>
                        <p className="ml-2 " >Unlock Credential</p>
                    </li>
                    <li className="flex my-8 " >
                        <span className="text-2xl text-[#B6606C]" >
                            <FiCamera/>
                        </span>
                        <p className="ml-2 " >Take New Picture</p>
                    </li>
                    <li className="flex my-8 " >
                        <span className="text-2xl text-[#B6606C]" >
                            <CgPassword/>
                        </span>
                        <p className="ml-2 " >Change Security PIN</p>
                    </li>
                    <li className="flex my-8" >
                        <span className="text-2xl text-[#B6606C]" >
                            <AiOutlineDelete/>
                        </span>
                        <p className="ml-2 " >Remove Credential</p>
                    </li>
                </ul>
            </main>
        </section>
    )
}