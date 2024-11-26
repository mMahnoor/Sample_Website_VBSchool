import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import loc_map from "../assets/vb_school_map.png";

export function ContactCard() {
  return (
    <Card className="w-full sm:flex-row flex-col bg-orange-200 rounded-xl">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-4 uppercase">
          Address
        </Typography>
        <Typography variant="lead" color="gray" className="mb-2">
          Vishal Bharti Sr. Sec. School opposite D Block, Sarawati Vihar
          ,Parwana Road, Pitampura Delhi-110034
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-4 uppercase">
          Phone Number
        </Typography>
        <Typography variant="lead" color="gray" className="mb-2">
          011-27026750, 27023377, 9354937851/54
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 sm:w-2/5 w-full shrink-0 sm:rounded-l-none sm:rounded-tr-xl rounded-t-none rounded-lb-xl"
      >
        <img
          src={loc_map}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
    </Card>
  );
}
