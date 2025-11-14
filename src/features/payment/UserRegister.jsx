import { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

export const UserRegister = ({
  schedules,
  ageGroups,
  types,
  schedule,
  group,
  type,
  onCallBack,
}) => {
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
      },
    },

    // functions will be used to validate values at corresponding key
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
      },
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
            <p>Асран хамгаалагч</p>
          </div>
          <div className="option">
            <TextInput
              label="Овог"
              placeholder="Энд бичнэ үү..."
              {...form.getInputProps("parent.lastname")}
              // rightSection={
              //   value !== "" ? (
              //     <Input.ClearButton onClick={() => setValue("")} />
              //   ) : undefined
              // }
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
        <div className="selector">
          <div className="name">
            <p>Сурагч</p>
          </div>
          <div className="option">
            <TextInput
              label="Овог"
              placeholder="Энд бичнэ үү..."
              {...form.getInputProps("user.lastname")}
              // rightSection={
              //   value !== "" ? (
              //     <Input.ClearButton onClick={() => setValue("")} />
              //   ) : undefined
              // }
            />
            <TextInput
              label="Нэр"
              placeholder="Энд бичнэ үү..."
              {...form.getInputProps("user.firstname")}
            />
          </div>
        </div>
        <div className="payment-footer">
          <button className="back" onClick={handleBack}>
            <IconArrowLeft />
          </button>
          <button type="submit" className="continue">
            Үргэлжлүүлэх
          </button>
        </div>
      </form>
    </>
  );
};
