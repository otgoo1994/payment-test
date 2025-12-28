import { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

export const UserRegister = ({ schedule, group, type, onCallBack }) => {
  const [filled, setFilled] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      parent: {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
      },
      user: {
        firstname: "",
        lastname: "",
        note: "",
      },
    },

    validate: {
      parent: {
        lastname: (value) => (value.length < 2 ? "Овог нэр оруулна" : null),
        firstname: (value) => (value.length < 2 ? "Нэрээ оруулна уу" : null),
        email: (value) => (/^\S+@\S+$/.test(value) ? null : "Буруу имэйл хаяг"),
        phone: (value) =>
          value.length < 2 ? "Утасны дугаараа оруулна уу" : null,
      },
      user: {
        lastname: (value) => (value.length < 2 ? "Овог нэр оруулна" : null),
        firstname: (value) => (value.length < 2 ? "Нэрээ оруулна уу" : null),
        note: (value) =>
          value.length < 2 ? "Нэмэлт мэдээлэл оруулна уу" : null,
      },
    },
    onValuesChange: (values, previous) => {
      const isFormValid = form.isValid();
      setFilled(isFormValid);
    },
  });

  const handleSubmit = (formValues) => {
    if (!onCallBack) return;
    onCallBack(formValues);
  };
  const handleBack = () => {
    if (!onCallBack) return;
    onCallBack(null);
  };

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
        <div className="divider" />
        <div className="selector grid">
          <div className="name">
            <p className="title">Асран хамгаалагч</p>
            <p className="description">
              Та өөрийн хувийн мэдээллийг оруулна уу
            </p>
          </div>
          <div className="option">
            <TextInput
              label="Овог"
              placeholder="Энд бичнэ үү..."
              {...form.getInputProps("parent.lastname")}
            />
            <TextInput
              label="Нэр"
              placeholder="Энд бичнэ үү..."
              {...form.getInputProps("parent.firstname")}
            />
            <TextInput
              label="Утасны дугаар"
              placeholder="Энд бичнэ үү..."
              {...form.getInputProps("parent.phone")}
            />
            <TextInput
              label="Имэйл хаяг"
              placeholder="Энд бичнэ үү..."
              {...form.getInputProps("parent.email")}
            />
          </div>
        </div>
        <div className="divider" />
        <div className="selector grid">
          <div className="name">
            <p className="title">Сурагчийн мэдээлэл</p>
            <p className="description">
              Сургалтанд хамрагдах хүүхдийн мэдээллийг оруулна уу
            </p>
          </div>
          <div className="option">
            <TextInput
              label="Овог"
              placeholder="Энд бичнэ үү..."
              {...form.getInputProps("user.lastname")}
            />
            <TextInput
              label="Нэр"
              placeholder="Энд бичнэ үү..."
              {...form.getInputProps("user.firstname")}
            />
            <TextInput
              label="Нэмэлт мэдээлэл"
              placeholder="Жишээ: 07:00-13:00 цагийн хооронд хичээлтэй байдаг..."
              {...form.getInputProps("user.note")}
            />
            <span className="input-description">
              /Сурагчийн хувийн хичээлийн цагийн хуваарийг бичиж оруулна уу./
            </span>
          </div>
        </div>
        <div className="payment-footer">
          <button className="back" onClick={handleBack}>
            <IconArrowLeft />
          </button>
          <button type="submit" className={`continue ${!filled && "disabled"}`}>
            Үргэлжлүүлэх
          </button>
        </div>
      </form>
    </>
  );
};
