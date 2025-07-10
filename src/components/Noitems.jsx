import { useAppData } from "../context/AppContextComponent"

const Noitems = () => {

    const {carts} = useAppData();

  return ((carts.length == 0)?(<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30px]">No items Added</div>):(<></>))
}

export default Noitems