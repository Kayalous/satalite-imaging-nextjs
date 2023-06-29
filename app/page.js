"use client";

import Image from "next/image";
import Steps from "./components/Steps";
import Locations from "./components/screens/Locations";
import Passes from "./components/screens/Passes";
import Satalites from "./components/screens/Satalites";
import Preview from "./components/screens/Preview";
import { useState, useEffect, use } from "react";
import { useSession, signIn } from "next-auth/react";
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
          id: "NOAA18",
          title: "NOAA-18",
          description: "Last pass was 2 hours ago",
          additional: "1,265 passes",
          numOfPasses: 17,
        },
        {
          id: "NOAA19",
          title: "NOAA-19",
          description: "Last pass was 15 minutes ago",
          additional: "615 passes",
          numOfPasses: 0,
        },
        {
          id: "METOP-B",
          title: "METOP-B",
          description: "Last pass was 2 hours ago",
          additional: "1,562 passes",
          numOfPasses: 0,
        },
        {
          id: "METOP-C",
          title: "METOP-C",
          description: "Last pass was 15 minutes ago",
          additional: "615 passes",
          numOfPasses: 0,
        },
      ],
    },
    {
      id: 2,
      title: "Hawaii",
      description: "-",
      additional: "0 Satalites",
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

  const [selectedPass, setSelectedPass] = useState(null);

  const onSelectedPass = (pass) => {
    setSelectedPass(pass);
    nextStep();
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
            satalite={selectedSatelite}
            selectPass={onSelectedPass}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Preview
            pass={selectedPass}
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
      window.location.replace("/api/auth/signin")
    ) : (
      // signIn("credentials", { callbackUrl: "localhost:22137" })
      // signIn()
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
