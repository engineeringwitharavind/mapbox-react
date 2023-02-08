import React, { createContext, useState, useMemo, ReactNode } from "react";

interface LocationContextType {
  location: {
    id: string;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
  };
  setLocation: React.Dispatch<
    React.SetStateAction<{
      id: string;
      name: string;
      description: string;
      latitude: number;
      longitude: number;
    }>
  >;
}

interface LocationContextProps {
  children: ReactNode;
}

const LocationContext = createContext<LocationContextType>({
  location: {
    id: "",
    name: "Home",
    description: "My Current Location",
    latitude: 0,
    longitude: 0,
  },
  setLocation: () => {},
});

function LocationContextProvider({ children }: LocationContextProps) {
  const [location, setLocation] = useState<{
    id: string;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
  }>({
    id: "",
    name: "Home",
    description: "My Current Location",
    latitude: 0,
    longitude: 0,
  });

  const contextValue = useMemo(
    () => ({ location, setLocation }),
    [location, setLocation]
  );

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
}

export { LocationContext, LocationContextProvider };
