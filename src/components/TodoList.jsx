import Button from "./Button";

const TodoList = ({todo}) => {

    

  return (
    <div key={todo.id} className='w-[300px] grid justify-self-center p-[20px] grid-cols-2 grid-rows-7 bg-white rounded-[15px] h-[400px] shadow-2xl'>
        <div className='col-span-2 bg-white row-span-4'><img className='h-full justify-self-center' src={todo.image} alt="" /></div>
        <p className='col-span-2 row-span-2 font-bold mt-[10px]'>{todo.title}</p>
        <div className='place-content-center text-gray-700 font-semibold'>${todo.price}</div>
        <Button
            todoID ={todo.id}
        />
    </div>
  )
}

export default TodoList