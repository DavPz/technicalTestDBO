import { useEffect } from "react";
import { FloatCartComponent } from "../components/cart/FloatCartComponent";
import { ProductComponent } from "../components/products/ProductComponent";
import { useCart } from "../hooks/cart/useCart";

export const ProductsPage = () => {

    const { products, productsList } = useCart();

    useEffect(() => {
        productsList();
    }, [])

    return (
        <>
            <div className="overflow-y-auto">
                <FloatCartComponent />

                <div className="w-[75%] mx-auto grid grid-cols-1 smd:grid-cols-4 gap-4 pt-2 overflow-auto">
                    {products?.map((product) => (
                        <ProductComponent key={product.id} product={product} imgUrl={"https://picsum.photos/300?random=" + product.id} />
                    ))}
                </div>
            </div>
        </>

    )
}
