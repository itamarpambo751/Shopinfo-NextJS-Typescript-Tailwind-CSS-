import React, { createContext, useState, useContext, ReactNode } from "react";
import { product,marca,methodSearch } from "@/pages/api/data";
import { Products,MethodSearch } from "@/Types/GloballTypes";

interface GlobalInformations{
    products:Products[]
    method:MethodSearch
}
interface ProductProviderProps {
    children: ReactNode
}

const ProductContext = createContext<GlobalInformations| null>(null)

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [products, setproducts] = useState<Products[]>(product)
    const [method, setBrands] = useState<MethodSearch>(methodSearch)

    return (
        <ProductContext.Provider value={{
            products,method
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductsContext() {
    const context = useContext(ProductContext)
    return context
}