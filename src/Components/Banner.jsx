import React from "react";
import { Button, Typography } from "@material-tailwind/react";

const StaticBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-cyan-600 text-white py-4 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-evenly items-center">
          <Typography
            color="white"
            className="font-bold text-xl animate-colorChange"
            variant="gradient"
          >
            Registration open for admission in classes LKG, UKG and I for the
            session (2025-26)
          </Typography>
          <Button
            color="amber"
            size="lg"
            className="text-lg font-semibold hover:bg-amber-600 focus:ring-2 focus:ring-amber-400 animate-beep hover:animate-none"
          >
            Register Now!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StaticBanner;
