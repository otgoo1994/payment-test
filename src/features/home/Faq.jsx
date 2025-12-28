import { useState } from "react";
import basket from "/public/images/basket.jpg";
import { IconCirclePlus, IconCircleMinus } from "@tabler/icons-react";
import { Accordion } from "@mantine/core";

export const Faq = () => {
  const [value, setValue] = useState(null);

  const data = [
    {
      question: "Хугацааны сонголтууд уян хатан уу?",
      answer:
        "Тийм. Эцэг эх болон хүүхдийн өдөр тутмын хуваарьт нийцүүлсэн уян хатан цагийн сонголттой. Өглөө, өдөр болон оройн хичээлүүдээс сонгоно.",
    },
    {
      question: "Багш нарын туршлага ямар байдаг вэ?",
      answer:
        "Манай багш нар салбартаа туршлагатай, олон жилийн дадлагажсан мэргэжлийн хүмүүс бөгөөд хүүхдийн хөгжилд чиглэсэн арга барилаар заадаг.",
    },
    {
      question: "Хүүхэд ангиас хоцорвол яах вэ?",
      answer:
        "Тийм. Эцэг эх болон хүүхдийн өдөр тутмын хуваарьт нийцүүлсэн уян хатан цагийн сонголттой. Өглөө, өдөр болон оройн хичээлүүдээс сонгоно.",
    },
    {
      question: "Эцэг эх хичээлийн явцыг хэрхэн хянах вэ?",
      answer:
        "Тийм. Эцэг эх болон хүүхдийн өдөр тутмын хуваарьт нийцүүлсэн уян хатан цагийн сонголттой. Өглөө, өдөр болон оройн хичээлүүдээс сонгоно.",
    },
    {
      question: "Бүртгэл хэрхэн хийгдэх вэ?",
      answer:
        "Тийм. Эцэг эх болон хүүхдийн өдөр тутмын хуваарьт нийцүүлсэн уян хатан цагийн сонголттой. Өглөө, өдөр болон оройн хичээлүүдээс сонгоно.",
    },
  ];

  const items = data.map((item) => (
    <Accordion.Item key={item.question} value={item.question}>
      <Accordion.Control
        className="fat-title"
        chevron={
          value && value.includes(item.question) ? (
            <IconCircleMinus className="accordion-icon" />
          ) : (
            <IconCirclePlus className="accordion-icon" />
          )
        }
      >
        {item.question}
      </Accordion.Control>
      <Accordion.Panel>{item.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <section className="container home">
      <div className="faq">
        <div className="faq-image-container">
          <img
            src={basket}
            alt="basket"
            className="faq-image-container-image"
          />
        </div>
        <div className="faq-content">
          <p className="faq-content-title">ТҮГЭЭМЭЛ АСУУЛТ ХАРИУЛТУУД</p>
          <Accordion
            chevronPosition="right"
            disableChevronRotation
            onChange={setValue}
            multiple
          >
            {items}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
