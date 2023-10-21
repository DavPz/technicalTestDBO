import { Button, Typography } from "@material-tailwind/react";
import { useCart } from "../../hooks/cart/useCart";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

export const CartRowsComponent = ({ product, quantity, classes }) => {

    const { handlerRemoveFromCart, handlerAddToCart } = useCart();

    const disableQuantityButtonClasses = quantity <= 1 ? "float-left bg-blue-gray-50 rounded-sm "
        : "float-left bg-blue-gray-100 rounded-sm cursor-pointer hover:bg-blue-gray-200";
    return (
        <tr>
            <td className={classes}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    {product.name}
                </Typography>
            </td>
            <td className={classes}>

                {
                    quantity <= 1 ?
                        <button className={disableQuantityButtonClasses} disabled>
                            <MinusIcon className="w-5 h-5" /></button>
                        :
                        <button onClick={() => handlerAddToCart(product, -1, true)}
                            className={disableQuantityButtonClasses}>
                            <MinusIcon className="w-5 h-5" />
                        </button>
                }
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal float-left ml-2 mr-2"
                >
                    {quantity}
                </Typography>

                <PlusIcon
                    onClick={() => handlerAddToCart(product, 1, true)}
                    className="w-5 h-5 float-left  bg-blue-gray-100 rounded-sm cursor-pointer hover:bg-blue-gray-200 " />
            </td>
            <td className={classes}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    $ {product.cost}
                </Typography>
            </td>
            <td className={classes}>
                <Typography                    
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    $ {product.cost * quantity}
                </Typography>
            </td>
            <td className={classes}>
                <Button
                    color="red"
                    size="sm"
                    onClick={() => handlerRemoveFromCart(product)}
                >
                    <TrashIcon className="w-5 h-5" />
                </Button>
            </td>
        </tr>
    )
}
