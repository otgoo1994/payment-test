import { IconCarambolaFilled } from "@tabler/icons-react";

export const SuccessPayment = ({
  schedules,
  ageGroups,
  types,
  schedule,
  group,
  type,
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

  return (
    <>
      <div className="succeedContainer">
        <div className="icon-container">
          <IconCarambolaFilled color="#5095d7" />
        </div>
        <p className="succeedTitle">ТӨЛБӨР ТӨЛӨГДӨЖ СУУДАЛ БАТАЛГААЖЛАА </p>
        <p className="succeedSubTitle">
          Barcelona - Mongolia хамт олны нэг гишүүн
          <br />
          болсон танд баяр хүргэе
        </p>
      </div>
      <div className="divider" />
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
    </>
  );
};
