import Image from "next/image";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  tech: string;
  site: string;
}

export function ProjectCard({
  img,
  title,
  desc,
  tech,
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
      className="p-8"
    >
      <CardHeader
        placeholder=""
        onResize={() => {}}
        onResizeCapture={() => {}}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        floated={true}
        className="mx-0 mt-0 mb-6 h-48 shadow-none"
      >
        <Image
          src={img}
          alt={title}
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody
        placeholder=""
        onResize={() => {}}
        onResizeCapture={() => {}}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        className="p-0"
      >
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h6 className="mb-2 font-bold">{title}</h6>
        </a>
        <p className="text-[14px] font-normal !text-gray-500">{desc}</p>
        <hr className="my-4" />
        <p className="mb-6 text-[12px]">{tech}</p>
        <Button
          placeholder=""
          onResize={() => {}}
          onResizeCapture={() => {}}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          color="gray"
          size="sm"
        >
          <a href={site} target="_blank">
            Live Site
          </a>
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
