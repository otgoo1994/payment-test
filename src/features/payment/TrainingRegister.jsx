import React, { useState, useEffect } from "react";
import { Group, Radio, Text, Checkbox, Notification } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconArrowLeft } from "@tabler/icons-react";
import Fire from "/images/Fire.png";

export const TrainingRegister = ({ onCallBack }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [termsChecked, setTermsChecked] = useState(false);

  const weekDays = [
    "Даваа",
    "Мягмар",
    "Лхагва",
    "Пүрэв",
    "Баасан",
    "Бямба",
    "Ням",
  ];

  const types = [
    {
      label: "Сагсан бөмбөг",
      value: "basketball",
      image: "/images/basketball.png",
    },
    {
      label: "Гар бөмбөг",
      value: "volleyball",
      image: "/images/volleyball.png",
    },
    {
      label: "Хөл бөмбөг",
      value: "football",
      image: "/images/football.png",
    },
  ];

  const schedules = [
    {
      id: "СБ101",
      title: "Анги 1",
      description: "Бүтэн жилийн анги",
      days: ["Даваа", "Пүрэв"],
      schedule: "14:00 - 15:30",
      startDate: "2026.01.01",
    },
    {
      id: "СБ102",
      title: "Анги 2",
      description: "Хагас жилийн анги",
      days: ["Мягмар", "Баасан"],
      schedule: "14:00 - 15:30",
      startDate: "2026.01.01",
    },
  ];

  const ageGroups = [
    {
      label: "7-8 нас",
      value: "7-8",
      price: 350000,
    },
    {
      label: "9-10 нас",
      value: "9-10",
      price: 350000,
    },
    {
      label: "11-12 нас",
      value: "11-12",
      price: 450000,
    },
    {
      label: "13-14 нас",
      value: "13-14",
      price: 500000,
    },
  ];

  const handleCallBack = () => {
    if (!onCallBack) return;
    if (!selectedAgeGroup || !selectedTime || !selectedType) {
      notifications.show({
        color: "red",
        title: "Амжилтгүй!",
        message: "Талбараа бүрэн бөглөнө үү",
        position: "top-right",
      });
      return;
    }
    if (!termsChecked) {
      notifications.show({
        color: "red",
        title: "Амжилтгүй!",
        message: "Сургалтын гэрээтэй танилцана уу",
        position: "top-right",
      });
      return;
    }
    onCallBack({
      type: types.find((item) => item.value === selectedType),
      group: ageGroups.find((item) => item.value === selectedAgeGroup),
      time: schedules.find((item) => item.id === selectedTime),
    });
  };

  const handleConfirmTerms = () => {
    setTermsChecked(true);
    setIsOpen(null);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [isOpen]);

  if (isOpen === "policyModal") {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-body">
            <p className="modal-body-title">Сургалтын гэрээ</p>
            <div className="contract-section">
              <p className="contract-section-title">1. Гэрээний зорилго</p>
              <div className="contract-section-content">
                Энэхүү гэрээ нь хөлмбөмбөг, сагсан бөмбөг болон гар бөмбөгийн
                мэргэжлийн сургалтанд хамрагдах нөхцөл, журам, талуудын эрх
                үүргийг тодорхойлоход оршино.
              </div>
            </div>
            <div className="contract-section">
              <p className="contract-section-title">2. Сургалтын төрлүүд</p>
              <div className="contract-section-content">
                Үйлчилгээ үзүүлэгч нь дараах төрлийн сургалтыг санал болгоно.
                <ul>
                  <li>Хөлбөмбөгийн сургалт</li>
                  <li>Сагсанбөмбөгийн сургалт</li>
                  <li>Гарбөмбөгийн сургалт</li>
                </ul>
                Сургалтын түвшин, үргэлжлэх хугацаа, хөтөлбөрийн дэлгэрэнгүйг
                тусгай хавсралтаар тодорхойлно.
              </div>
            </div>
            <div className="contract-section">
              <p className="contract-section-title">3. Сургалтын хугацаа</p>
              <div className="contract-section-content">
                <p>Сургалт дараах хугацаанд явагдана:</p>
                <p>Эхлэх огноо: ______________</p>
                <p>Дуусах огноо: ______________</p>
              </div>
            </div>
            <div className="contract-section">
              <p className="contract-section-title">4. Төлбөрийн нөхцөл</p>
              <div className="contract-section-content">
                <p>Сургалтын нийт төлбөр: ______________ төгрөг.</p>
                <p>
                  Төлбөр төлөх хэлбэр: ______________ (нэг удаа / хэсэгчлэн /
                  сар бүр)
                </p>
                <p>
                  Төлбөрийг дараах данс руу шилжүүлнэ:
                  ___________________________
                </p>
              </div>
            </div>
            <div className="contract-section">
              <p className="contract-section-title">5. Талуудын эрх, үүрэг</p>
              <div className="contract-section-content">
                5.1 Үйлчилгээ үзүүлэгчийн үүрэг:
                <ul>
                  <li>Чанартай, мэргэжлийн сургалтын үйлчилгээг үзүүлэх</li>
                  <li>Аюулгүй байдлын шаардлага хангах</li>
                  <li>Сургалтын хөтөлбөрийн дагуу тогтмол хичээл явуулах </li>
                </ul>
                5.2 Захиалагчийн үүрэг:
                <ul>
                  <li>Төлбөрийг хугацаанд нь төлөх</li>
                  <li>Сургалтын дотоод журмыг мөрдөх</li>
                  <li>
                    Хувийн бэлтгэл, эрүүл мэндийн мэдээллийг үнэн зөв өгөх
                  </li>
                </ul>
              </div>
            </div>
            <div className="contract-section">
              <p className="contract-section-title">6. Хариуцлага</p>
              <div className="contract-section-content">
                <ul>
                  <li>
                    Талууд гэрээний үүргээ биелүүлээгүй тохиолдолд Монгол Улсын
                    хууль тогтоомжийн дагуу хариуцлага хүлээнэ.
                  </li>
                  <li>
                    Биеийн гэмтэл, эрүүл мэндийн эрсдэлийн талаар үйлчилгээ
                    үзүүлэгч анхан шатны аюулгүй байдлыг хангах үүрэгтэй бөгөөд
                    сургалтад оролцогч өөрийн эрүүл мэндийн байдлыг хариуцна.
                  </li>
                </ul>
              </div>
            </div>
            <div className="contract-section">
              <p className="contract-section-title">7. Гэрээ цуцлах</p>
              <div className="contract-section-content">
                <ul>
                  <li>Талууд харилцан зөвшилцөж гэрээг цуцалж болно.</li>
                  <li>
                    Захиалагч тал гэрээг хугацаанаас өмнө цуцлах тохиолдолд
                    сургалтын төлбөр буцаан олголт нь дараах нөхцлөөр хийгдэнэ:
                    ________________
                  </li>
                </ul>
              </div>
            </div>
            <div className="contract-section">
              <p className="contract-section-title">8. Маргаан шийдвэрлэх</p>
              <div className="contract-section-content">
                Гэрээтэй холбоотой маргааныг талууд эхлээд харилцан ярилцаж
                шийдвэрлэнэ. Хэрэв шийдвэрлэгдээгүй тохиолдолд холбогдох шүүхэд
                хандана.
              </div>
            </div>
            <div className="contract-section">
              <p className="contract-section-title">9. Бусад нөхцөл</p>
              <div className="contract-section-content">
                <ul>
                  <li>
                    Гэрээний нэмэлт өөрчлөлтийг бичгээр хийж, талууд гарын үсэг
                    зурсан тохиолдолд хүчин төгөлдөр болно.
                  </li>
                  <li>
                    Гэрээ нь ___ хуудастай, хоёр хувь үйлдэгдэж, тус бүр нь ижил
                    хүчинтэй.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="back" onClick={() => setIsOpen(null)}>
              <IconArrowLeft />
            </button>
            <button onClick={handleConfirmTerms} className="continue">
              Зөвшөөрөх
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="selector">
        <div className="name">
          <p className="title">Сургалтын төрөл сонгох</p>
          <p className="description">
            Та хүүхдээ хамрагдуулах спортын төрлийг сонгоно уу
          </p>
        </div>
        <div className="option grid col-3">
          {types.map((item) => (
            <Radio.Card
              radius="md"
              value={item.value}
              key={item.value}
              onClick={() => setSelectedType(item.value)}
              className="card-type"
            >
              <Group wrap="nowrap" align="flex-start">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <div>
                    <img src={item.image} alt="" style={{ width: "100%" }} />
                  </div>
                  <div className="indicator-container">
                    <Text>{item.label}</Text>
                    {/* <Radio.Indicator /> */}
                    <Checkbox
                      label=""
                      checked={selectedType === item.value}
                      color="#154284"
                      onClick={() => setSelectedType(item.value)}
                    />
                  </div>
                </div>
              </Group>
            </Radio.Card>
          ))}
        </div>
      </div>
      <div className="divider" />
      <div className="selector">
        <div className="name">
          <p className="title">Насны ангилал сонгох</p>
          <p className="description">
            Та хүүхдийнхээ насны ангиллыг сонгоно уу
          </p>
        </div>
        <div className="option grid col-4">
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
          <p className="title">Цагийн хуваарь</p>
          <p className="description">
            Сургалтанд хамрагдах боломжтой өдөр, цагийг сонгоно уу
          </p>
        </div>
        <div className="option">
          <div className="schedule-wrapper">
            {selectedType && selectedAgeGroup ? (
              <div className="schedule-header">
                {types.find((item) => item.value === selectedType).label} /
                {ageGroups.find((item) => item.value == selectedAgeGroup).label}
                / · Төлбөр -{" "}
                {ageGroups
                  .find((item) => item.value == selectedAgeGroup)
                  .price.toLocaleString()}
                ₮ /Сарын/
              </div>
            ) : (
              <div className="schedule-header none" />
            )}
            <table className="schedule-table">
              <colgroup>
                <col className="schedule-checkbox-container" />
                <col span="7" />
              </colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>До</th>
                  <th>Мя</th>
                  <th>Лх</th>
                  <th>Пү</th>
                  <th>Ба</th>
                  <th>Бя</th>
                  <th>Ня</th>
                </tr>
              </thead>

              <tbody>
                {selectedType && selectedAgeGroup ? (
                  <>
                    {schedules.map((item) => (
                      <React.Fragment key={`item-row=${item.id}`}>
                        <tr
                          className={`schedule-row ${
                            selectedTime === item.id && "selected"
                          }`}
                          onClick={() => {
                            setSelectedTime(item.id);
                          }}
                        >
                          <td rowSpan={2}>
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Checkbox
                                size="sm"
                                color="#154284"
                                checked={selectedTime === item.id}
                              />
                            </div>
                          </td>
                          {weekDays.map((day, index) => (
                            <td key={index}>
                              {item.days.includes(day) ? (
                                <div className="time-container">
                                  {selectedTime === item.id && (
                                    <div className="head-bar" />
                                  )}
                                  {item.schedule}
                                </div>
                              ) : (
                                ""
                              )}
                            </td>
                          ))}
                        </tr>
                        <tr
                          className={`info-row ${
                            selectedTime === item.id && "selected"
                          }`}
                        >
                          <td colSpan={7}>
                            <span>{item.title}</span> /{item.id}/ ·{" "}
                            {item.description} · Эхлэх хугацаа {item.startDate}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </>
                ) : (
                  <>
                    <tr className={`schedule-row`}>
                      <td rowSpan={2}>
                        <div
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Checkbox size="sm" color="#154284" disabled />
                        </div>
                      </td>
                      {weekDays.map((day, index) => (
                        <td key={index}>
                          <div className="time-container" />
                        </td>
                      ))}
                    </tr>
                    <tr className={`info-row`}>
                      <td colSpan={7}>---- ---- ----</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
            {selectedType && selectedAgeGroup ? (
              <div className="schedule-table-mobile">
                {schedules.map((item, index) => (
                  <div
                    className={`schedule-table-mobile-container ${
                      selectedTime === item.id && "selected"
                    }`}
                    onClick={() => {
                      setSelectedTime(item.id);
                    }}
                    key={`schedule-table-${index}`}
                  >
                    <Checkbox
                      size="sm"
                      color="#154284"
                      checked={selectedTime === item.id}
                    />
                    <div className="">
                      <p>
                        {item.days.map((day, index) => (
                          <span key={`schedule-day-${index}`}>
                            {index > 0 ? `, ${day}` : day}
                          </span>
                        ))}
                        <span className="schedule">{item.schedule}</span>
                      </p>
                      <p>
                        <span>Анги</span>
                        <span className="schedule">
                          /{item.id}/ {item.description}
                        </span>
                      </p>
                      <p>
                        <span>Эхлэх хугацаа</span>
                        <span className="schedule">{item.startDate}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="schedule-table-mobile">
                <div className={`schedule-table-mobile-container bordered`}>
                  <Checkbox size="sm" color="#154284" disabled />
                  <div className="">
                    <p>
                      <span className="schedule">----</span>
                    </p>
                    <p>
                      <span className="schedule">----</span>
                    </p>
                    <p>
                      <span className="schedule">----</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="terms-condition">
        <p>
          Сургалтын гэрээний нөхцөлтэй танилцах{" "}
          <span onClick={() => setIsOpen("policyModal")}>Энд дарна уу</span>
        </p>
        <div className="checkbox">
          Танилцсан{" "}
          <Checkbox
            label=""
            checked={termsChecked}
            color="#154284"
            onClick={() => setTermsChecked(!termsChecked)}
          />
        </div>
      </div>
      <div className="payment-footer">
        <button
          onClick={handleCallBack}
          className={`continue ${
            selectedType && selectedAgeGroup && termsChecked && selectedTime
              ? ""
              : "disabled"
          }`}
        >
          Үргэлжлүүлэх
        </button>
      </div>
    </>
  );
};
