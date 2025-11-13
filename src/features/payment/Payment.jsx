import { useState } from "react";
import { Stepper, Group, Radio, Stack, Text } from "@mantine/core";
import { PaymentCard } from "@/shared/components";

export const Payment = () => {
  const [active, setActive] = useState(0);
  const [selectedType, setSelectedType] = useState("football");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("11-13");
  const [selectedTime, setSelectedTime] = useState("10:00");

  const schedules = [
    {
      label: "10 цаг",
      value: "10:00",
    },
    {
      label: "12 цаг",
      value: "12:00",
    },
    {
      label: "15 цаг",
      value: "15:00",
    },
    {
      label: "17 цаг",
      value: "17:00",
    },
  ];

  const ageGroups = [
    {
      label: "11-13 нас /350.000₮ сарын төлбөр/",
      value: "11-13",
      price: 350000,
    },
    {
      label: "14-15 нас /450.000₮ сарын төлбөр/",
      value: "14-15",
      price: 450000,
    },
    {
      label: "16-18 нас /500.000₮ сарын төлбөр/",
      value: "16-18",
      price: 500000,
    },
  ];

  const types = [
    {
      label: "Хөлмбөмбөг",
      value: "football",
    },
    {
      label: "Сагсан бөмбөг",
      value: "baskektball",
    },
    {
      label: "Гар бөмбөг",
      value: "volleyball",
    },
  ];

  const getSelectedSchedule = (value) => {
    const result = schedules.find((item) => item.value === value);
    return result.label;
  };
  const getSelectedType = (value) => {
    const result = types.find((item) => item.value === value);
    return result.label;
  };
  const getSelectedGroup = (value, type) => {
    const result = ageGroups.find((item) => item.value === value);
    return result.price.toLocaleString();
  };

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleCallBack = (direction) => {
    if (direction === "back") {
      prevStep();
      return;
    }

    nextStep();
  };

  return (
    <section className="payment">
      <div className="payment-container">
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step label="" description="Сургалтын бүртгэл">
            <div style={{ marginTop: 50 }}>
              <PaymentCard
                title="BARCELONA - MONGOLIA"
                description="Хөл бөмбөг, сагсан бөмбөг болон гар бөмбөгийн сургалт"
                onCallBack={handleCallBack}
              >
                <div className="selector">
                  <div className="name">
                    <p>Сургалтын мэдээлэл</p>
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
                  <div className="option grid">
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
              </PaymentCard>
            </div>
          </Stepper.Step>
          <Stepper.Step label="" description="Хэрэглэгчийн бүртгэл">
            <div style={{ marginTop: 50 }}>
              <PaymentCard
                title="BARCELONA - MONGOLIA"
                description="Хөл бөмбөг, сагсан бөмбөг болон гар бөмбөгийн сургалт"
                onCallBack={handleCallBack}
              >
                <div className="selector">
                  <div className="name">
                    <p>Сургалтын мэдээлэл</p>
                  </div>
                  <div className="option">
                    <div className="option-container">
                      <table>
                        <tbody>
                          <tr>
                            <td>Төрөл</td>
                            <td>{getSelectedType(selectedType)}</td>
                          </tr>
                          <tr>
                            <td>Нас</td>
                            <td>{selectedAgeGroup} нас</td>
                          </tr>
                          <tr>
                            <td>Цаг</td>
                            <td>{getSelectedSchedule(selectedTime)}</td>
                          </tr>
                          <tr>
                            <td>Төлбөр</td>
                            <td>
                              {getSelectedGroup(selectedAgeGroup)}₮ /1 сарын
                              төлбөр/
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="divider" />
                <div className="selector">
                  <div className="name">
                    <p>Асран хамгаалагч</p>
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
                    <p>Сурагч</p>
                  </div>
                  <div className="option grid">
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
              </PaymentCard>
            </div>
          </Stepper.Step>
          <Stepper.Step label="" description="Төлбөр төлөлт">
            step 3
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </div>
    </section>
  );
};
