import { IconCarambolaFilled, IconArrowLeft } from "@tabler/icons-react";

export const SuccessPayment = ({ schedule, group, type, onCallBack }) => {
  const handleBack = () => {
    if (!onCallBack) return;
    onCallBack(null);
  };

  return (
    <>
      <div className="succeedContainer">
        <div className="icon-container">
          <IconCarambolaFilled color="#154284" />
        </div>
        <p className="succeedTitle">ТӨЛБӨР ТӨЛӨГДӨЖ СУУДАЛ БАТАЛГААЖЛАА </p>
        <p className="succeedSubTitle">
          Barcelona - Mongolia хамт олны нэг гишүүн
          <br />
          болсон танд баяр хүргэе
        </p>
      </div>
      <div className="selector">
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
      <div className="payment-footer">
        <button className="back" onClick={handleBack}>
          <IconArrowLeft />
        </button>
        <button className="continue" onClick={() => {}}>
          Дуусгах
        </button>
      </div>
    </>
  );
};
