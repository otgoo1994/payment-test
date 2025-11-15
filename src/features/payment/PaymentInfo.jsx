import { useState } from "react";
import { Accordion } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Group, Radio, Text } from "@mantine/core";
import QRCode from "react-qr-code";

export const PaymentInfo = ({
  schedules,
  ageGroups,
  types,
  schedule,
  group,
  type,
  userInfo,
  onCallBack,
}) => {
  const [recieptType, setRecieptType] = useState("personal");
  const [paymentMethod, setPaymentMethod] = useState("qpay");

  const recieptTypes = [
    {
      label: "Хувь хүн",
      value: "personal",
    },
    {
      label: "Байгууллага",
      value: "company",
    },
  ];

  const paymentMethods = [
    {
      label: "QPay-ээр төлөх",
      value: "qpay",
    },
    {
      label: "Дансаар төлөх",
      value: "bank_account",
    },
  ];

  const accounts = [
    {
      bank: "Голомт банк",
      receiver: "Мультитехнологи",
      accountNumber: "77 0000 11 2205033971",
      transactionValue: "2511 1016",
    },
    {
      bank: "Худалдаа хөгжлийн банк",
      receiver: "Мультитехнологи",
      accountNumber: "77 0000 11 2205033971",
      transactionValue: "2511 1016",
    },
    {
      bank: "Хас банк",
      receiver: "Мультитехнологи",
      accountNumber: "77 0000 11 2205033971",
      transactionValue: "2511 1016",
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

  const handleCheckPayment = () => {
    onCallBack("success");
  };
  const handleBack = () => {
    if (!onCallBack) return;
    onCallBack(null);
  };

  return (
    <>
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
                  <td>{getSelectedType(type)}</td>
                </tr>
                <tr>
                  <td>Нас</td>
                  <td>{group} нас</td>
                </tr>
                <tr>
                  <td>Цаг</td>
                  <td>{getSelectedSchedule(schedule)}</td>
                </tr>
                <tr>
                  <td>Төлбөр</td>
                  <td>{getSelectedGroup(group)}₮ /1 сарын төлбөр/</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="selector">
        <div className="name">
          <p>
            Асран хамгаалагчийн <br />
            мэдээлэл
          </p>
        </div>
        <div className="option">
          <div className="option-container">
            <table>
              <tbody>
                <tr>
                  <td>Овог</td>
                  <td>{userInfo.parent.lastname}</td>
                </tr>
                <tr>
                  <td>Нэр</td>
                  <td>{userInfo.parent.firstname}</td>
                </tr>
                <tr>
                  <td>Утас</td>
                  <td>{userInfo.parent.phone}</td>
                </tr>
                <tr>
                  <td>Имэйл</td>
                  <td>{userInfo.parent.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="selector">
        <div className="name">
          <p>Сурагчийн мэдээлэл</p>
        </div>
        <div className="option">
          <div className="option-container">
            <table>
              <tbody>
                <tr>
                  <td>Овог</td>
                  <td>{userInfo.user.lastname}</td>
                </tr>
                <tr>
                  <td>Нэр</td>
                  <td>{userInfo.user.firstname}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="price-container">
        <p>
          Захиалгын дугаар: <span>2511 1016</span>
        </p>
        <p>
          Нийт: <span>{getSelectedGroup(group)}₮</span>
        </p>
      </div>
      <div className="selector">
        <div className="name">
          <p>НӨАТ-ын төрөл</p>
        </div>
        <div className="option grid">
          {recieptTypes.map((item) => (
            <Radio.Card
              radius="md"
              value={item.value}
              key={item.value}
              checked={recieptType === item.value}
              onClick={() => setRecieptType(item.value)}
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

      <div className="selector">
        <div className="name">
          <p>Төлбөрийн хэрэгсэл</p>
        </div>
        <div className="option">
          {paymentMethods.map((item) => (
            <Radio.Card
              component="div"
              radius="md"
              value={item.value}
              key={item.value}
              checked={paymentMethod === item.value}
              onClick={() => setPaymentMethod(item.value)}
            >
              <Group wrap="nowrap" align="flex-start">
                <div>
                  <Text>{item.label}</Text>
                </div>
                <Radio.Indicator />
              </Group>
              {paymentMethod === item.value && (
                <>
                  {paymentMethod === "bank_account" ? (
                    <div>
                      <Accordion
                        defaultValue={accounts[0].bank}
                        style={{ width: "100%" }}
                      >
                        {accounts.map((item) => (
                          <Accordion.Item key={item.bank} value={item.bank}>
                            <Accordion.Control>{item.bank}</Accordion.Control>
                            <Accordion.Panel>
                              <div className="option-container">
                                <table className="payment-info-table">
                                  <tbody>
                                    <tr>
                                      <td>Хүлээн авагч</td>
                                      <td>{item.receiver}</td>
                                    </tr>
                                    <tr>
                                      <td>IBAN Дугаар</td>
                                      <td>{item.accountNumber}</td>
                                    </tr>
                                    <tr>
                                      <td>Гүйлгээний утга</td>
                                      <td>{item.transactionValue}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </Accordion.Panel>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </div>
                  ) : (
                    <div className="qr-display">
                      <QRCode
                        value={"hello motherfucker"}
                        size={150}
                        enableBackground={true}
                        style={{ borderRadius: 12, backgroundColor: "#3f444d" }}
                      />
                    </div>
                  )}
                </>
              )}
            </Radio.Card>
          ))}
        </div>
      </div>
      <div className="payment-footer">
        <button className="back" onClick={handleBack}>
          <IconArrowLeft />
        </button>
        <button className="continue" onClick={handleCheckPayment}>
          Төлбөр шалгах
        </button>
      </div>
    </>
  );
};
