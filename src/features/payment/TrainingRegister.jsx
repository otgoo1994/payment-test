import { useState } from "react";
import { Group, Radio, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

export const TrainingRegister = ({
  schedules,
  ageGroups,
  types,
  onCallBack,
}) => {
  const [selectedType, setSelectedType] = useState("football");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("11-13");
  const [selectedTime, setSelectedTime] = useState("11:00 - 12:00");

  const handleCallBack = () => {
    if (!onCallBack) return;
    onCallBack({
      type: selectedType,
      group: selectedAgeGroup,
      time: selectedTime,
    });
  };

  return (
    <>
      <div className="selector">
        <div className="name">
          <p>Төрөл сонгох</p>
        </div>
        <div className="option">
          {types.map((item) => (
            <Radio.Card
              radius="md"
              value={item.value}
              key={item.value}
              checked={selectedType === item.value}
              onClick={() => setSelectedType(item.value)}
            >
              <Group wrap="nowrap" align="flex-start">
                <div>
                  <Text>{item.label}</Text>
                </div>
                <Radio.Indicator />
              </Group>
            </Radio.Card>
          ))}
        </div>
      </div>
      <div className="divider" />
      <div className="selector">
        <div className="name">
          <p>Насны ангилал</p>
        </div>
        <div className="option">
          {ageGroups.map((item) => (
            <Radio.Card
              radius="md"
              value={item.value}
              key={item.value}
              checked={selectedAgeGroup === item.value}
              onClick={() => setSelectedAgeGroup(item.value)}
            >
              <Group wrap="nowrap" align="flex-start">
                <div>
                  <Text>{item.label}</Text>
                </div>
                <Radio.Indicator />
              </Group>
            </Radio.Card>
          ))}
        </div>
      </div>
      <div className="divider" />
      <div className="selector">
        <div className="name">
          <p>Цагийн сонголт</p>
        </div>
        <div className="option">
          {schedules.map((item) => (
            <Radio.Card
              radius="md"
              value={item.value}
              key={item.value}
              checked={selectedTime === item.value}
              onClick={() => setSelectedTime(item.value)}
            >
              <Group wrap="nowrap" align="flex-start">
                <div>
                  <Text>{item.label}</Text>
                </div>
                <Radio.Indicator />
              </Group>
            </Radio.Card>
          ))}
        </div>
      </div>
      <div className="payment-footer">
        <button className="back" disabled>
          <IconArrowLeft />
        </button>
        <button onClick={handleCallBack} className="continue">
          Үргэлжлүүлэх
        </button>
      </div>
    </>
  );
};
