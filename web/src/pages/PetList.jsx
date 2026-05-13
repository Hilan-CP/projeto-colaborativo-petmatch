import PreviewPetList from "../components/PreviewPetList"
import CardPet from "../components/PetCard"
import ListaPet from "../components/ListaDePets"

import Header from "../components/Header"



function PetList(){
    return (
        
      
        
        <div className="bg-[#27607B]">
            
            <header className="bg-white h-20"> <Header/> </header>
                   
            <h1 className="text-[30px] font-Poppins mt-[8%] flex text-center justify-center text-[#FF7A00] ">Encontre seu Pet</h1>

                    <span className="flex flex-wrap  justify-center gap-4 mb-20 mt-[8%]  grid-cols-1">

                        <input className="rounded-4xl w-35 p-3 bg-white shadow-md border" type="text" placeholder="Ong" />
                        <input className="rounded-4xl w-35 p-3 bg-white shadow-md border" type="text" placeholder="Raça" />
                    
                        <select className="rounded-4xl p-3 bg-white shadow-md border">
                            <option value="">Raça</option>
                        </select>
                    
                    <input className="rounded-4xl w-35 p-3 bg-white shadow-md border" type="text" placeholder="Idade" />
                        <input className="rounded-4xl w-35 p-3 bg-white shadow-md border" type="text" placeholder="Cidade" />
                        <button className="rounded-4xl p-3 bg-secondary shadow-md border text-white">Cdastrar Pet</button>
                    </span>
                    
                    <div className=""><ListaPet/></div>



        </div>
        
        
        
    )
}


export default PetList