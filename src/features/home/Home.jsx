import background from "@/assets/images/bg.png";
import { IconTableFilled } from "@tabler/icons-react";

export const Home = () => {
  return (
    <section className="home">
      <img src={background} alt="" className="background" />
      <div className="container">
        <div>
          <p className="title">Боломжууд</p>
        </div>
        <div className="chances">
          <div className="card">
            <IconTableFilled className="icon" />
            <p className="card-title">Төлбөр бүрэн автомат</p>
            <span>
              Төлөлтийг автоматаар <br />
              хуваарилна
            </span>
          </div>
          <div className="card">
            <IconTableFilled className="icon" />
            <p className="card-title">Ухаалаг нэхэмжлэх</p>
            <span>
              Төлөлтийг автоматаар <br />
              хуваарилна
            </span>
          </div>
          <div className="card">
            <IconTableFilled className="icon" />
            <p className="card-title">Хялбар төлөлт</p>
            <span>
              Төлөлтийг автоматаар <br />
              хуваарилна
            </span>
          </div>
          <div className="card">
            <IconTableFilled className="icon" />
            <p className="card-title">Гэрээ суурьтай</p>
            <span>
              Төлөлтийг автоматаар <br />
              хуваарилна
            </span>
          </div>
          <div className="card">
            <IconTableFilled className="icon" />
            <p className="card-title">Цогц менежмент</p>
            <span>
              Төлөлтийг автоматаар <br />
              хуваарилна
            </span>
          </div>
          <div className="card">
            <IconTableFilled className="icon" />
            <p className="card-title">Утсаараа удирд</p>
            <span>
              Төлөлтийг автоматаар <br />
              хуваарилна
            </span>
          </div>
          <div className="card">
            <IconTableFilled className="icon" />
            <p className="card-title">Нэгдсэн хянах самбар</p>
            <span>
              Төлөлтийг автоматаар <br />
              хуваарилна
            </span>
          </div>
          <div className="card">
            <IconTableFilled className="icon" />
            <p className="card-title">Найдвартай үйлчилгээ</p>
            <span>
              Төлөлтийг автоматаар <br />
              хуваарилна
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
