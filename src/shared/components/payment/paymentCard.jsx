import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export const PaymentCard = () => {
  const [selected, setSelected] = useState(1);
  const [show, setShow] = useState(false);

  const changeState = (isBack) => {
    if (!isBack) {
      setSelected(2);
      return;
    }

    setSelected(1);
  };

  if (show) {
    return (
      <div className="payment-card">
        <div className="qr-container">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_300/https://prooftag.net/wp-content/uploads/2021/07/QR-Code.png"
            alt=""
            className="qr-code"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="payment-card">
      <div className="payment-container">
        <div className="payment-info">
          <div className="header">
            <div className="tag">Энгийн</div>
            <div className="price">
              ₮79,000 <span>/ сар</span>
            </div>
          </div>
          <div className="payment-card-body">
            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${selected}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {selected === 1 ? (
                  <ul>
                    <li>Хязгааргүй үйлчилгээ</li>
                    <li>24 / 7 тусламж</li>
                  </ul>
                ) : (
                  <div className="form">
                    <div class="input-container">
                      <div class="input-wrapper">
                        <label for="name">Таны нэр</label>
                        <input id="name" type="text" placeholder="Нэр" />
                      </div>
                    </div>
                    <div class="input-container">
                      <div class="input-wrapper">
                        <label for="email">Имэйл хаяг</label>
                        <input
                          id="email"
                          type="text"
                          placeholder="Имэйл хаяг"
                        />
                      </div>
                    </div>
                    <div class="input-container">
                      <div class="input-wrapper">
                        <label for="phone">Утасны дугаар</label>
                        <input
                          id="phone"
                          type="text"
                          placeholder="Утасны дугаар"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`card-${selected}`}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {selected === 1 ? (
            <button
              onClick={() => changeState(false)}
              className="payment-button"
            >
              Төлбөр төлөх
            </button>
          ) : (
            <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <button
                onClick={() => changeState(true)}
                className="payment-button disabled"
              >
                Буцах
              </button>

              <button onClick={() => setShow(true)} className="payment-button">
                Төлбөр төлөх
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
