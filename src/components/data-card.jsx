import {
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { createElement } from "react";

export default function DataCard({ icon, title, children }) {
    return (
        <Card className="md:mx-8 mt-6 w-96 h-min min-h-72">
            <CardBody>
                {createElement(icon, { className: "mb-4 h-12 w-12 text-gray-900" })}
                <Typography variant="h5" color="blue-gray" className="font-montserrat mb-2">
                    {title}
                </Typography>
                <Typography className="font-montserrat">
                    {children}
                </Typography>
            </CardBody>
        </Card>
    );
}