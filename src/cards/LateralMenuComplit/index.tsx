import React,{useState,useEffect} from "react"
import react from "react"
import { Card } from ".."
import { useProductsContext } from '@/context/ProdutsContext/ProductContext';
import { Products,MethodSearch } from "@/Types/GloballTypes";

      interface lateralMenuProps{
        searchPC?:boolean
        onInputvalue: (value: string) => void;
      }

export const LateralMenuComplit:React.FC<lateralMenuProps>=
({onInputvalue,searchPC}:lateralMenuProps)=>{

const valueSearcCheckBox = (value: string) => {
        onInputvalue(value);
};
const valeuSearchLateralList = (value: string) => {
  setFilterLateralMenuBroad(value);
};
const AllProducts =useProductsContext()

/*Filter para Marcas */
const [filterlateralMenuBroad, setFilterLateralMenuBroad] = useState<string>('');
const [itemsMenuBroad, setItemsMenuBroad] = useState<string[]>()
const [itemsLateraMenuBroad,setItemsLateralMenuBroad] = useState<MethodSearch|undefined>(AllProducts?.method)

useEffect(() => {
  if(filterlateralMenuBroad=="")setItemsMenuBroad(itemsLateraMenuBroad?.marca)
  else setItemsMenuBroad(itemsLateraMenuBroad?.marca?.filter((i)=>i.toLowerCase().startsWith(filterlateralMenuBroad.toLocaleLowerCase())))
},[filterlateralMenuBroad]); 

/*Filter para os HD */
const valeuSearchLateralListHD = (value: string) =>setFilterLateralMenuHD(value);
const [filterlateralMenuHD, setFilterLateralMenuHD] = useState<string>('');
const [itemsMenuHD, setItemsMenuHD] = useState<string[]>()
const [itemsLateraMenuHD,setItemsLateralMenuHD] = useState<MethodSearch|undefined>(AllProducts?.method)
useEffect(() =>{
  if(filterlateralMenuHD=="")setItemsMenuHD(itemsLateraMenuHD?.HD)
  else setItemsMenuHD(itemsLateraMenuHD?.HD?.filter((i)=>i.toLowerCase().startsWith(filterlateralMenuHD.toLocaleLowerCase())))
},[filterlateralMenuHD]); 

/*Filter para os SSD */
const valeuSearchLateralListSSD = (value: string) =>setFilterLateralMenuSSD(value);
const [filterlateralMenuSSD, setFilterLateralMenuSSD] = useState<string>('');
const [itemsMenuSSD, setItemsMenuSSD] = useState<string[]>()
const [itemsLateraMenuSSD,setItemsLateralMenuSSD] = useState<MethodSearch|undefined>(AllProducts?.method)
useEffect(() =>{
  if(filterlateralMenuSSD=="")setItemsMenuSSD(itemsLateraMenuSSD?.SSD)
  else setItemsMenuSSD(itemsLateraMenuSSD?.SSD?.filter((i)=>i.toLowerCase().startsWith(filterlateralMenuSSD.toLocaleLowerCase())))
},[filterlateralMenuSSD]); 

/*Filter para os PROCESSADOR */
const valeuSearchLateralListPROCESSADOR = (value: string) =>setFilterLateralMenuPROCESSADOR(value);
const [filterlateralMenuPROCESSADOR, setFilterLateralMenuPROCESSADOR] = useState<string>('');
const [itemsMenuPROCESSADOR, setItemsMenuPROCESSADOR] = useState<string[]>()
const [itemsLateraMenuPROCESSADOR,setItemsLateralMenuPROCESSADOR] = useState<MethodSearch|undefined>(AllProducts?.method)
useEffect(() =>{
  if(filterlateralMenuPROCESSADOR=="")setItemsMenuPROCESSADOR(itemsLateraMenuPROCESSADOR?.processador)
  else setItemsMenuPROCESSADOR(itemsLateraMenuPROCESSADOR?.processador?.filter((i)=>i.toLowerCase().startsWith(filterlateralMenuPROCESSADOR.toLocaleLowerCase())))
},[filterlateralMenuPROCESSADOR]);

/*Filter para os placa de video */
const valeuSearchLateralListPlacaDeVideo = (value: string) =>setFilterLateralMenuPlacaDeVideo(value);
const [filterlateralMenuPlacaDeVideo, setFilterLateralMenuPlacaDeVideo] = useState<string>('');
const [itemsMenuPlacaDeVideo, setItemsMenuPlacaDeVideo] = useState<string[]>()
const [itemsLateraMenuPlacaDeVideo,setItemsLateralMenuPlacaDeVideo] = useState<MethodSearch|undefined>(AllProducts?.method)
useEffect(() =>{
  if(filterlateralMenuPlacaDeVideo=="")setItemsMenuPlacaDeVideo(itemsLateraMenuPlacaDeVideo?.placa_de_video)
  else setItemsMenuPlacaDeVideo(itemsLateraMenuPlacaDeVideo?.placa_de_video?.filter((i)=>i.toLowerCase().startsWith(filterlateralMenuPlacaDeVideo.toLocaleLowerCase())))
},[filterlateralMenuPlacaDeVideo]);

/*Filter para os memoria */
const valeuSearchLateralListMemoria = (value: string) =>setFilterLateralMenuMemoria(value);
const [filterlateralMenuMemoria, setFilterLateralMenuMemoria] = useState<string>('');
const [itemsMenuMemoria, setItemsMenuMemoria] = useState<string[]>()
const [itemsLateraMenuMemoria,setItemsLateralMenuMemoria] = useState<MethodSearch|undefined>(AllProducts?.method)
useEffect(() =>{
  if(filterlateralMenuMemoria=="")setItemsMenuMemoria(itemsLateraMenuMemoria?.memoria)
  else setItemsMenuMemoria(itemsLateraMenuMemoria?.memoria?.filter((i)=>i.toLowerCase().startsWith(filterlateralMenuMemoria.toLocaleLowerCase())))
},[filterlateralMenuMemoria]);


    return(
  <>
  <Card.CardFiltro label='marca' onInputvalue={valeuSearchLateralList}
    options={
  itemsMenuBroad?.map((i)=>
      (<Card.CheckListCard key={i} onInputvalue={valueSearcCheckBox} item={i.toString()} />))
    } />
   { searchPC?<> <Card.CardFiltro label='HD' onInputvalue={valeuSearchLateralListHD}
    options={
  itemsMenuHD?.map((i)=>
      (<Card.CheckListCard key={i} onInputvalue={valueSearcCheckBox} item={i.toString()} />))
    } />
      <Card.CardFiltro label='processador' onInputvalue={valeuSearchLateralListSSD}
    options={
  itemsMenuPROCESSADOR?.map((i)=>
      (<Card.CheckListCard key={i} onInputvalue={valueSearcCheckBox} item={i.toString()} />))
    } />
      <Card.CardFiltro label='SSD' onInputvalue={valeuSearchLateralListSSD}
    options={
  itemsMenuSSD?.map((i)=>
      (<Card.CheckListCard key={i} onInputvalue={valueSearcCheckBox} item={i.toString()} />))
    } />
    <Card.CardFiltro label='placa de video' onInputvalue={valeuSearchLateralListSSD}
    options={
  itemsMenuPlacaDeVideo?.map((i)=>
      (<Card.CheckListCard key={i} onInputvalue={valueSearcCheckBox} item={i.toString()} />))
    } />
      <Card.CardFiltro label='memoria' onInputvalue={valeuSearchLateralListSSD}
    options={
  itemsMenuMemoria?.map((i)=>
      (<Card.CheckListCard key={i} onInputvalue={valueSearcCheckBox} item={i.toString()} />))
    } />
   </>:<></>}
</>
    )
}
















































