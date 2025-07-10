import { useAppData } from '../context/AppContextComponent';

const Button = ({todoID}) => {

    const {renderList, carts, deleteList} = useAppData();
    


    return ((carts.includes(todoID)) ? (<button className='justify-self-end'><img src="/delete.png" width="20px" onClick={()=>{deleteList(todoID);}}/></button>):(<button className='justify-self-end'><img src="/cart.png" onClick={()=>{renderList(todoID);}} width="20px"/></button>))
        
    
    
  

}

export default Button