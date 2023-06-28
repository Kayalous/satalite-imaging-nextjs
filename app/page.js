"use client";

import Image from "next/image";
import Steps from "./components/Steps";
import Locations from "./components/screens/Locations";
import Passes from "./components/screens/Passes";
import Satalites from "./components/screens/Satalites";
import Tables from "./components/screens/Table";
import { useState, useEffect, use } from "react";
import { useSession, signIn } from "next-auth/react";
import { executeQuery } from "../lib/db";
export default function Home() {
  const [steps, setSteps] = useState([
    { id: "Step 1", name: "Select Location" },
    { id: "Step 2", name: "Select Satalite" },
    { id: "Step 3", name: "Select Pass" },
    { id: "Step 4", name: "Preview" },
  ]);
  const { data: session, status, error, isLoading } = useSession();

  const [activeStep, setActiveStep] = useState(0);

  const [locations, setLocations] = useState([
    {
      id: 1,
      title: "AOML",
      description: "Last scan was 2 hours ago",
      additional: "4 Satalites",
      satalites: [
        {
          id: 1,
          title: "METOP-B",
          description: "Last pass was 2 hours ago",
          additional: "1,562 passes",
          numOfPasses: 1562,
        },
        {
          id: 2,
          title: "METOP-C",
          description: "Last pass was 15 minutes ago",
          additional: "615 passes",
          numOfPasses: 615,
        },
        {
          id: 3,
          title: "NOAA-18",
          description: "Last pass was 2 hours ago",
          additional: "1,265 passes",
          numOfPasses: 1265,
        },
        {
          id: 4,
          title: "NOAA-19",
          description: "Last pass was 15 minutes ago",
          additional: "615 passes",
          numOfPasses: 615,
        },
      ],
    },
    {
      id: 2,
      title: "Hawaii",
      description: "Last scan was 15 minutes ago",
      additional: "12 Satalites",
      satalites: [],
    },
  ]);

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const [selectedSatelite, setSelectedSatelite] = useState(
    selectedLocation.satalites[0]
  );

  // set the active step

  const onStepChange = (index) => {
    setActiveStep(index);
  };

  // next step

  const nextStep = () => {
    if (activeStep === steps.length - 1) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // previous step

  const prevStep = () => {
    if (activeStep === 0) return;
    if (activeStep === 1) setSelectedLocation(locations[0]);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSelectedLocation = (location) => {
    setSelectedLocation(location);
  };

  const onSelectedSatelite = (satelite) => {
    setSelectedSatelite(satelite);
  };

  // get server side props

  // display the current screen based on the active step
  const displayScreen = () => {
    switch (activeStep) {
      case 0:
        return (
          <Locations
            locations={locations}
            nextStep={nextStep}
            onSelectedLocation={onSelectedLocation}
          />
        );
      case 1:
        return (
          <Satalites
            satalites={selectedLocation.satalites}
            nextStep={nextStep}
            prevStep={prevStep}
            onSelectedSatelite={onSelectedSatelite}
          />
        );
      case 2:
        return (
          <Passes
            passes={locations}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Tables
            table={locations}
            prevStep={prevStep}
          />
        );
      default:
        return (
          <Locations
            locations={locations}
            nextStep={nextStep}
          />
        );
    }
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  else
    return status == "unauthenticated" ? (
      signIn()
    ) : (
      <main className="container flex flex-col items-center w-screen min-h-screen gap-10 py-24">
        <Steps
          steps={steps}
          activeStep={activeStep}
          onStepChange={onStepChange}
        />

        {displayScreen()}
      </main>
    );
}
