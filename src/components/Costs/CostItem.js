import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../Ui/Card";

const CostItem = (props) => {
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{props.description}</h2>
      </div>
      <div className="cost-item__price">${props.amount}</div>
    </Card>
  );
};

export default CostItem;
