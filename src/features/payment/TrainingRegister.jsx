import { useState } from "react";
import { Group, Radio, Text, Checkbox, Notification } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconArrowLeft } from "@tabler/icons-react";
import Fire from "@/assets/images/Fire.png";

export const TrainingRegister = ({
  schedules,
  ageGroups,
  types,
  onCallBack,
}) => {
  const [selectedType, setSelectedType] = useState("football");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("11-13");
  const [selectedTime, setSelectedTime] = useState("11:00 - 12:00");
  const [isOpen, setIsOpen] = useState(null);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleCallBack = () => {
    if (!onCallBack) return;
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
      type: selectedType,
      group: selectedAgeGroup,
      time: selectedTime,
    });
  };

  const handleConfirmTerms = () => {
    setTermsChecked(true);
    setIsOpen(null);
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
            onClick={() => setTermsChecked(!termsChecked)}
          />
        </div>
      </div>
      <div className="payment-footer">
        <button onClick={handleCallBack} className="continue">
          Үргэлжлүүлэх
        </button>
      </div>

      <div className={`modal ${isOpen === "policyModal" && "show"}`}>
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-header">
              <img src={Fire} alt="" className="modal-header-logo" />
              <div>
                <p className="modal-header-title">BARCELONA - MONGOLIA</p>
                <p className="modal-header-subtitle">
                  Хөлмбөмбөг, сагсан бөмбөг болон гар бөмбөгийн сургалт
                </p>
              </div>
            </div>
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
                      Талууд гэрээний үүргээ биелүүлээгүй тохиолдолд Монгол
                      Улсын хууль тогтоомжийн дагуу хариуцлага хүлээнэ.
                    </li>
                    <li>
                      Биеийн гэмтэл, эрүүл мэндийн эрсдэлийн талаар үйлчилгээ
                      үзүүлэгч анхан шатны аюулгүй байдлыг хангах үүрэгтэй
                      бөгөөд сургалтад оролцогч өөрийн эрүүл мэндийн байдлыг
                      хариуцна.
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
                      сургалтын төлбөр буцаан олголт нь дараах нөхцлөөр
                      хийгдэнэ: ________________
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contract-section">
                <p className="contract-section-title">8. Маргаан шийдвэрлэх</p>
                <div className="contract-section-content">
                  Гэрээтэй холбоотой маргааныг талууд эхлээд харилцан ярилцаж
                  шийдвэрлэнэ. Хэрэв шийдвэрлэгдээгүй тохиолдолд холбогдох
                  шүүхэд хандана.
                </div>
              </div>
              <div className="contract-section">
                <p className="contract-section-title">9. Бусад нөхцөл</p>
                <div className="contract-section-content">
                  <ul>
                    <li>
                      Гэрээний нэмэлт өөрчлөлтийг бичгээр хийж, талууд гарын
                      үсэг зурсан тохиолдолд хүчин төгөлдөр болно.
                    </li>
                    <li>
                      Гэрээ нь ___ хуудастай, хоёр хувь үйлдэгдэж, тус бүр нь
                      ижил хүчинтэй.
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
      </div>
    </>
  );
};
