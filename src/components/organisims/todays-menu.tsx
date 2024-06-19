import CustomDatePicker from "@/components/molecules/date-picker";
import { Card, CardBody, Chip } from "@nextui-org/react";

export default function TodaysMenu() {
  return (
    <div className="grid grid-cols-2 w-full">
      <div>
        <CustomDatePicker />
      </div>
      <div>
        <Card className="my-4">
          <CardBody>
            <Chip color="primary">Morning</Chip>
            <p>Fried Eggs, Toast, Bacon, Sausages</p>
          </CardBody>
        </Card>
        <Card className="my-4">
          <CardBody>
            <Chip color="warning">Lunch</Chip>
            <p>Baked Fish & Mashed Potatoes</p>
          </CardBody>
        </Card>
        <Card className="my-4">
          <CardBody>
            <Chip color="success">Dinner</Chip>
            <p>Ugali, Goat Meat, & Kachumbari</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
