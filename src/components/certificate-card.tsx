import Image from "next/image";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  site: string;
}

export function CertificateCard({
  img,
  title,
  desc,
  site,
}: ProjectCardProps) {
  return (
    <Card
      placeholder=""
      onResize={() => {}}
      onResizeCapture={() => {}}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      shadow={true}
      className="p-8 flex flex-col h-[550px] shadow-none border" // fixed height & flex col
    >
      <CardHeader
        placeholder=""
        onResize={() => {}}
        onResizeCapture={() => {}}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        floated={true}
        className="mx-0 mt-0 mb-6 h-48 shadow-none" // fixed height for consistent image size
      >
        <Image
          src={img}
          alt={title}
          width={1000}
          height={1000}
          className="h-full w-full rounded-md"
        />
      </CardHeader>

      <CardBody
        placeholder=""
        onResize={() => {}}
        onResizeCapture={() => {}}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        className="p-0 flex flex-col flex-grow"
      >
        <a
          href="#"
          className="block text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h6 className="mb-2 font-bold">{title}</h6>
        </a>

        <div className="flex flex-col flex-grow">
          <p className="text-[14px] font-normal text-gray-500">{desc}</p>
          
        </div>

        <div className="mt-auto">
          <Button
            placeholder=""
            onResize={() => {}}
            onResizeCapture={() => {}}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            color="gray"
            size="sm"
            className="w-full"
          >
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full justify-center font-normal capitalize flex items-center gap-2"
            >
              <DocumentIcon className="w-4 h-auto" />
              Certificate
            </a>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default CertificateCard;

