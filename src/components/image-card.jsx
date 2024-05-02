import {
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";

export default function ImageCard({ title, text, path, select, onClick }) {

    return (
        <Card className="m-8 w-96 h-min min-h-72 cursor-pointer" onClick={onClick} >
            <CardBody>
                {select
                    ? <Typography
                        variant="paragraph"
                        className="w-full text-justify text-lg mb-4"
                        >
                        {text}
                    </Typography>
                    : <img className="rounded-xl w-full" src={path} alt={title} />

                }
                <Typography variant="h5" color="blue-gray" className="text-center mt-2 font-montserrat">
                    {title}
                </Typography>
            </CardBody>
        </Card>
    );
}