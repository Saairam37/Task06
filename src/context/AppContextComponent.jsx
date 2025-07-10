import { createContext, useContext, useEffect, useState } from "react"

export const AppContext = createContext();

const AppContextComponent = ({children}) => {

const [carts, setCarts] = useState([]);
const [todos, setTodos] = useState([]);
const [totalArr, setTotal] = useState([]);
const [sumAmt, setSum] = useState(0)

useEffect(()=>{

    fetch("https://fakestoreapi.com/products").then(response=>response.json()).then(data=>setTodos(data));

},[])

useEffect(()=>{
    console.log(totalArr);
    totalCalc();
})
 
function deleteList(listID){
    const indexxx = carts.indexOf(listID);
    let newCart =[...carts];
    if(indexxx > -1){
        newCart.splice(indexxx, 1);}
    else{
      newCart.shift();
    }
    let newTotal = totalArr.filter((ele)=>ele !== listID)
    setTotal(newTotal);
    setCarts(newCart);
}

function subTotal(listID){
    const indexxx = totalArr.indexOf(listID);
    let newCart =[...totalArr];
    if(indexxx > -1){
        newCart.splice(indexxx, 1);}
    else{
      newCart.shift();
    }
    setTotal(newCart);
}

function renderList(list){
      if(carts.includes(list)){
        alert("You have already added this item to cart")
      }
      else{
      setCarts([...carts, list]);
      setTotal([...totalArr, list]);
    }
}

function totalCalc(){
    let sum = 0;
    totalArr.map(tarID=> {
           const found = todos.find(obj => obj.id === tarID);
            sum = sum + found.price;
        })
    setSum(sum);
}

  return (
    <AppContext.Provider value={{carts, todos, totalArr, sumAmt, subTotal, setTotal, setCarts, setTodos, deleteList, renderList}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextComponent

export const useAppData = () => useContext(AppContext)