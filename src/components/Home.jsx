import TodoList from "./TodoList";
import { useAppData } from "../context/AppContextComponent";
import { useNavigate } from "react-router";



function Home() {
  
    const {todos, carts, sumAmt} = useAppData();
    const navigate = useNavigate();

  return (
    <><h1 className="fixed z-20 font-bold text-[15px] sm:text-[20px] md:text-[30px] font-sans w-full px-[30px] text-[#ffcc00] bg-linear-180 from-[#000000] via-[#000000aa] to-[#0000ff00] flex gap-[15px] sm:gap-[75px]">ADD TO CART <div className='sm:justify-self-center justify-self-left'>Total Price: <span className='text-red-500 line-through'> ${sumAmt.toFixed(2)}</span> $<span>{(sumAmt*0.9).toFixed(2)}</span></div></h1>
    <div className="relative"><div className=" relative bg-gray-200 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[20px] px-[20px] py-[50px]">
      {todos.map(todo=>
        <TodoList 
            key={todo.id}
            todo = {todo}
        />
      )}
    </div>
    <div className="fixed z-20 top-[30px] right-[30px] bg-green-500 font-bold flex justify-center rounded-full h-[30px] w-[60px] flex-col showw"><button onClick={()=>{navigate("/courses")}}><img className="w-[20px] inline" src="/cart.png"/>     <span>{carts.length}</span></button></div>

    </div>
    </>
  )
}

export default Home
