import React from "react";
import Card from "./components/Card";
import CardContent from "./content/cardContent";

export default function App() {
  return CardContent.map((curr) => <Card content={curr} />);
}
