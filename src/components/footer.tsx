import { Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-0 bg-gray-50">
      <div className="container mx-auto">
        <div className="mt-16 justify-center gap-y-4 py-6">
          <Typography
            placeholder=""
            onResize={() => {}}
            onResizeCapture={() => {}}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            className="text-center !text-gray-700"
          >
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://nextjs.org/" target="_blank">
              Material Tailwind & Next.JS |
            </a>{" "}
            Developed by{" "}
            <a
              href="https://www.facebook.com/jem.cdyn3"
              target="_blank"
              className="font-bold"
            >
              Jemuel Cadayona
            </a>
            .
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
