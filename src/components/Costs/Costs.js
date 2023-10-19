import React, { useState } from "react";
import CostList from "./CostList";
import "./Costs.css";
import Card from "../Ui/Card";
import CostsFilter from "./CostsFilter";
import "./CostsFilter.css";
import CostsDiagram from "./CostsDiagram";

const Costs = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredCosts = costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts}/>
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
