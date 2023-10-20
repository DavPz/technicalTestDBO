import { useEffect } from "react"
import { ProductComponent } from "../components/products/ProductComponent"
import { useCart } from "../hooks/cart/useCart";

export const ProductsPage = () => {

    const { products, productsList } = useCart();

    useEffect(() => {
        productsList();
        console.log(products);
    }, [])

    return (
        <>
            <div className="w-[75%] mx-auto grid grid-cols-1 smd:grid-cols-4 gap-4 pt-2">
                { products?.map((product) => (
                    console.log(product),
                    <ProductComponent key={product.id} product={product} imgUrl={"https://picsum.photos/300?random="+product.id} />
                ))}                
            </div>
        </>

    )
}
