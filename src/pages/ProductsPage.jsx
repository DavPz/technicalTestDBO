import { ProductComponent } from "../components/products/ProductComponent"

export const ProductsPage = () => {
    return (
        <>
            <div className="w-[75%] mx-auto grid grid-cols-1 smd:grid-cols-4 gap-4 pt-2">
                <ProductComponent />
                <ProductComponent />
            </div>
        </>

    )
}
