import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export const ProductComponent = ({product, imgUrl}) => {
    return (
      <Card variant="gradient">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={imgUrl}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {product?.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              ${product?.cost}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {product?.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Agregar al Carrito
          </Button>
        </CardFooter>
      </Card>
    );
  }