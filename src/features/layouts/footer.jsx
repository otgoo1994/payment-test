import logo from "/public/images/logo.png";
import { IconBrandAppleFilled, IconBrandGooglePlay } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="store-container">
            <div className="logo">
              <p className="logo-title">Cluby</p>
              <div className="logo-container">
                <img src={logo} alt="logo" />
              </div>
            </div>

            <div className="logo">
              <p className="logo-title">Апп татах</p>
              <div className="app-container">
                <div className="app-link">
                  <div className="app-icon-container">
                    <IconBrandAppleFilled className="icon" />
                  </div>
                  <div className="app-text-container">
                    <p className="app-text-container-title">Download on the</p>
                    <p className="app-text-container-store">App Store</p>
                  </div>
                </div>

                <div className="app-link">
                  <div className="app-icon-container">
                    <IconBrandGooglePlay className="icon" />
                  </div>
                  <div className="app-text-container">
                    <p className="app-text-container-title">GET IT ON</p>
                    <p className="app-text-container-store">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <table>
              <tbody>
                <tr>
                  <td colSpan="2">Холбоо барих</td>
                  <td>Cluby</td>
                </tr>
                <tr>
                  <td>+976 7777 7777</td>
                  <td>Утас</td>
                  <td>Лого татах</td>
                </tr>
                <tr>
                  <td>Order@cluby.mn</td>
                  <td>Мэйл</td>
                  <td>Бидэнтэй нэгдэх</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="footer-container">
          <p className="intellectual">© 2025 Cluby. All rights reserved</p>
          <div className="links">
            <Link>Үйлчилгээний нөхцөл</Link>
            <Link>Нууцлалын бодлого</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
