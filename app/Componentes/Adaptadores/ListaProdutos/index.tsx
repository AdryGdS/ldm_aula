import { FlatList, FlatListComponent, ScrollView, View } from "react-native";
import ItemProduto from "../ItemProduto"
import Style from "@/app/Styles/Default";
import Produto from '@/app/Models/Produto'
import React from "react";

interface PropListaProd{
    produtos: Produto[];
    aoAtualizar?:Function;
}

const  ListaProdutos:React.FC<PropListaProd> =
         ({produtos, aoAtualizar})=>{
    return (

      <FlatList
        data={produtos}
        keyExtractor={(p)=>p.id.toString()}
        renderItem={
            ({item})=>{
                return <ItemProduto
                produto={item}
                aoExcluir={()=>aoAtualizar?.call(null)}>
                </ItemProduto>
        }
      }
      />
    )
}

export default ListaProdutos