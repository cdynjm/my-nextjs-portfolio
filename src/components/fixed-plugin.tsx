"use client";

import { Button } from "@material-tailwind/react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

export function FixedPlugin() {
  return (
    <a href="#">
      <Button
        placeholder=""
        onResize={() => {}}
        onResizeCapture={() => {}}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 p-2 items-center border border-blue-gray-50"
      >
        <ArrowUpCircleIcon className="h-[30px] w-auto" />
      </Button>
    </a>
  );
}
