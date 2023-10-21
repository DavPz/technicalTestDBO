import { Button, Card, Typography } from "@material-tailwind/react";
import { useCart } from "../../hooks/cart/useCart";
import { CartRowsComponent } from "./CartRowsComponent";
import { CartFooterComponent } from "./CartFooterComponent";
import { NavLink } from "react-router-dom";
import { CartFooterButtons } from "./CartFooterButtons";

const TABLE_HEAD = ["Producto", "Cantidad", "Costo", "Total", ""];

export const CartViewComponent = () => {

    const { cart, totalCost } = useCart();
    console.log(cart);

    return (
        <Card className="h-full w-[95%] smd:h-[60%] smd:w-[70%] overflow-auto m-auto mt-5">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {cart.map(({ product, quantity }, index) => {
                        const isLast = index === cart.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <CartRowsComponent key={product.id} product={product} quantity={quantity} classes={classes} />
                        );
                    })}
                </tbody>

                <CartFooterComponent totalCost={totalCost} />

            </table>

            <CartFooterButtons />
            
        </Card>
    );
}