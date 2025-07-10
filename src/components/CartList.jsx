import { useEffect, useState } from "react";
import { useAppData } from "../context/AppContextComponent";


const CartList = ({found, deleteList}) => {
  
  const [quant, setQuant] = useState(1);
  const {totalArr, setTotal, subTotal} = useAppData();

  useEffect(()=>{
    if(quant < 1){
      deleteList(found.id);
    }
  })

  return (
    <div key={found.id} className='w-[300px] grid justify-self-center p-[20px] grid-cols-3 grid-rows-7 bg-white rounded-[15px] h-[400px] shadow-2xl'>
              <div className='col-span-3 bg-white row-span-4'><img className='h-full justify-self-center' src={found.image} alt="" /></div>
              <p className='col-span-3 row-span-2 font-bold mt-[10px]'>{found.title}</p>
              <div className='flex items-center col-span-2 text-gray-600 font-semibold gap-[10px]'><span>${(quant*found.price).toFixed(2)}</span><div className="w-[100px] bg-gray-300 flex items-center justify-between"><button className="bg-gray-500 text-white rounded-l-[5px] w-[30px] p-[5px]" onClick={()=>{setQuant(quant+1); setTotal([...totalArr, found.id])}}>+</button>
              {quant}<button className="bg-gray-500 text-white rounded-r-[5px] w-[30px] p-[5px]" onClick={()=>{setQuant(quant-1); subTotal(found.id)}}>-</button></div></div>
              <button className='justify-self-end col-span-1'><img src="/delete.png" width="20px" onClick={()=>{deleteList(found.id);}}/></button>
            </div>
)
}

export default CartList