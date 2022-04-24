import {IoArrowBack} from "@react-icons/all-files/io5/IoArrowBack";
import {FiLock} from "@react-icons/all-files/fi/FiLock";
export default function Home(){
    return(
        <section className="bg-[#141414]" >
            <header className="flex justify-between items-center px-2 py-4" >
                <span className="flex text-[#C5C3C7] text-3xl justify-center items-center" >
                   <IoArrowBack/>
                </span>
                <h1 className="text-[#C5C3C7] font-semibold " >
                    UPC
                </h1>
            </header>
            <main className="py-2 px-4" >
                <div>
                    <div className="bg-[#005470] text-[#A3C3CD] p-2 rounded-lg " >
                        Card
                    </div>
                    <div>
                        <div className="flex items-center justify-center" >
                            <span className="w-2 block h-2 rounded-full bg-[#3C47C3]" ></span>
                        </div>
                        <div className="flex justify-center items-center" >
                            <div>
                                <p className="text-[#5C5C5C]" >Photo Status</p>
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
                <ul>
                    bloque de opciones
                </ul>
            </main>
        </section>
    )
}