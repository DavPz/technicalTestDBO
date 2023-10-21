import { XMarkIcon } from "@heroicons/react/24/solid";
import { Button, Typography } from "@material-tailwind/react";
import { useCart } from "../../hooks/cart/useCart";

export const CartFooterComponent = ({ totalCost }) => {

    const { handlerClearCart } = useCart();

    return (
        <tfoot>
            <tr>
                <td></td>
                <td></td>
                <td className="m-0 text-right">
                    <Typography variant="h4">
                        Total:
                    </Typography>
                </td>
                <td>
                    <Typography variant="h4" color="green" className="ml-2">
                        $ {totalCost}
                    </Typography>

                </td>
                <td>
                    <Button
                        onClick={handlerClearCart}
                        color="red"
                        size="sm"
                        ripple="light"
                        className="ml-4"
                    >
                        <XMarkIcon className="w-5 h-5 float-left" />
                        <Typography variant="small" color="white" className="float-left">
                            Eliminar Todo
                        </Typography>
                    </Button>

                </td>
            </tr>
        </tfoot>
    )
}
