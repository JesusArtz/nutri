import {
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";


export default function Comment({ name, comment }) {
    return (
        <Card className="w-full mb-4 lg:mb-0">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="font-montserrat mb-2">
                    {name}
                </Typography>
                <Typography className="font-montserrat">
                    {comment}
                </Typography>
            </CardBody>
        </Card>
    );
};