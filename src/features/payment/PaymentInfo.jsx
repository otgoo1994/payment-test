import { useState } from "react";
import { Accordion } from "@mantine/core";
import { IconArrowLeft, IconCopy } from "@tabler/icons-react";
import { Group, Radio, Text } from "@mantine/core";
import QRCode from "react-qr-code";

export const PaymentInfo = ({
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
      image: "/src/assets/images/golomt_icon.png",
    },
    {
      bank: "Худалдаа хөгжлийн банк",
      receiver: "Мультитехнологи",
      accountNumber: "77 0000 11 2205033971",
      transactionValue: "2511 1016",
      image: "/src/assets/images/tdb_icon.png",
    },
    {
      bank: "Хас банк",
      receiver: "Мультитехнологи",
      accountNumber: "77 0000 11 2205033971",
      transactionValue: "2511 1016",
      image: "/src/assets/images/xacbank_icon.png",
    },
  ];

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
          <p className="title">Сургалтын Мэдээлэл</p>
          <p className="description">Таны сонгосон сургалтын мэдээлэл</p>
        </div>
        <div className="option">
          <div className="option-container">
            <div className="info">
              <img src={type.image} alt="" style={{ width: "100%" }} />
              <table className="desktop" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>Төрөл</td>
                    <td>{type.label}</td>
                  </tr>
                  <tr>
                    <td>Нас</td>
                    <td>{group.label}</td>
                  </tr>
                  <tr>
                    <td>Өдөр</td>
                    <td>
                      {schedule.days.map((day, index) => (
                        <span key={`span-day-${day}`}>
                          {index > 0 ? `, ${day}` : day}
                        </span>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="desktop" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>Анги</td>
                    <td>{schedule.id}</td>
                  </tr>
                  <tr>
                    <td>Төлбөр</td>
                    <td>{group.price.toLocaleString()} /сар/</td>
                  </tr>
                  <tr>
                    <td>Цаг</td>
                    <td>{schedule.schedule}</td>
                  </tr>
                </tbody>
              </table>
              <table className="mobile" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>Төрөл</td>
                    <td>{type.label}</td>
                  </tr>
                  <tr>
                    <td>Анги</td>
                    <td>{schedule.id}</td>
                  </tr>
                  <tr>
                    <td>Нас</td>
                    <td>{group.label}</td>
                  </tr>
                  <tr>
                    <td>Төлбөр</td>
                    <td>{group.price.toLocaleString()} /сар/</td>
                  </tr>
                  <tr>
                    <td>Өдөр</td>
                    <td>
                      {schedule.days.map((day, index) => (
                        <span key={`span-day-${day}`}>
                          {index > 0 ? `, ${day}` : day}
                        </span>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Цаг</td>
                    <td>{schedule.schedule}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="selector">
        <div className="option grid col-2">
          <Accordion style={{ width: "100%" }}>
            <Accordion.Item value="parents">
              <Accordion.Control>
                Асран хамгаалагчийн мэдээлэл
              </Accordion.Control>
              <Accordion.Panel>
                <div className="option-container padding-0">
                  <table className="user-info-table">
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
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Accordion style={{ width: "100%" }}>
            <Accordion.Item value="student">
              <Accordion.Control>Сурагчийн мэдээлэл</Accordion.Control>
              <Accordion.Panel>
                <div className="option-container">
                  <table className="user-info-table">
                    <tbody>
                      <tr>
                        <td>Овог</td>
                        <td>{userInfo.user.lastname}</td>
                      </tr>
                      <tr>
                        <td>Нэр</td>
                        <td>{userInfo.user.firstname}</td>
                      </tr>
                      <tr>
                        <td>Нэмэлт</td>
                        <td>{userInfo.user.note}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div className="price-container">
        <p>
          Захиалгын дугаар
          <br className="mo-br" /> <span>#2511 1016</span>
        </p>
        <p style={{ textAlign: "right" }}>
          Нийт
          <br className="mo-br" /> <span>{group.price.toLocaleString()}₮</span>
        </p>
      </div>
      <div className="selector grid">
        <div className="name">
          <p className="title">НӨАТ-ын төрөл</p>
        </div>
        <div className="option grid col-2">
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

      <div className="selector grid">
        <div className="name">
          <p className="title">Төлбөрийн хэрэгсэл</p>
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
                    <div className="bordered">
                      <Accordion
                        defaultValue={accounts[0].bank}
                        style={{ width: "100%" }}
                      >
                        {accounts.map((item) => (
                          <Accordion.Item key={item.bank} value={item.bank}>
                            <Accordion.Control>
                              <img
                                src={item.image}
                                alt=""
                                className="logo-icon"
                              />
                              {item.bank}
                            </Accordion.Control>
                            <Accordion.Panel>
                              <div className="option-container">
                                <table className="payment-info-table">
                                  <tbody>
                                    <tr>
                                      <td>
                                        Хүлээн авагч <p>{item.receiver}</p>
                                      </td>
                                      <td>
                                        <p>{item.receiver}</p>
                                        <IconCopy />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        IBAN Дугаар<p>{item.accountNumber}</p>
                                      </td>
                                      <td>
                                        <p>{item.accountNumber}</p>
                                        <IconCopy />
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        Гүйлгээний утга
                                        <p>{item.transactionValue}</p>
                                      </td>
                                      <td>
                                        <p>{item.transactionValue}</p>
                                        <IconCopy />
                                      </td>
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
