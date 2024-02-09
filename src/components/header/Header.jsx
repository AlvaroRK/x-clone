import { FaHouse, FaXTwitter } from "react-icons/fa6";
import { FaFeatherAlt } from "react-icons/fa";
import { RiNotification2Line, RiFlag2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdListBox, IoMdPeople, IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { PiDotsThreeCircle } from "react-icons/pi";

import BtnNav from "../buttons/BtnNav";
import BtnPost from "../buttons/BtnPost";
import Logo from "./Logo";
import UserHeader from "../users/UserHeader";

const Header = () => {
  return (
    <header className="header">
      <div className="fifty">
        <section className="navSection">
          <div className="logoContainer">
            <Logo></Logo>
          </div>
          <nav className="nav">
            <div className="btnContainer">
              <a href="#">
                <div className="btn">
                  <span>
                    <FaHouse />
                  </span>
                  <BtnNav name={"Inicio"} />
                </div>
              </a>
              <a href="#">
                <div className="btn">
                  <span>
                    <IoIosSearch />
                  </span>
                  <BtnNav name={"Explorar"} />
                </div>
              </a>
              <a href="#">
                <div className="btn">
                  <span>
                    <RiNotification2Line />
                  </span>
                  <BtnNav name={"Notificaciones"} />
                </div>
              </a>
              <a href="#">
                <div className="btn">
                  <span>
                    <MdOutlineEmail />
                  </span>
                  <BtnNav name={"Mensajes"} />
                </div>
              </a>
              <a href="#">
                <div className="btn">
                  <span>
                    <IoMdListBox />
                  </span>
                  <BtnNav name={"Listas"} />
                </div>
              </a>
              <a href="#">
                <div className="btn">
                  <span>
                    <RiFlag2Line />
                  </span>
                  <BtnNav name={"Guardados"} />
                </div>
              </a>
              <a href="#">
                <div className="btn">
                  <span>
                    <IoMdPeople />
                  </span>
                  <BtnNav name={"Comunidades"} />
                </div>
              </a>
              <a href="#">
                <div className="btn">
                  <span>
                    <FaXTwitter />
                  </span>
                  <BtnNav name={"Premium"} />
                </div>
              </a>
              <a href="#">
                <div className="btn">
                  <span>
                    <IoPersonOutline />
                  </span>
                  <BtnNav name={"Perfil"} />
                </div>
              </a>
              <a href="#">
                <div className="btn">
                  <span>
                    <PiDotsThreeCircle />
                  </span>
                  <BtnNav name={"Mas opciones"} />
                </div>
              </a>
            </div>
            <div className="btnPostContainer">
              <BtnPost name={"Postear"} />
            </div>
          </nav>
        </section>
        <section className="userSection">
          <UserHeader
            name={"Álvaro Ruiz Kuschill"}
            username={"alvaroo_rk"}
            img={"https://unavatar.io/midudev"}
          />
        </section>
      </div>
    </header>
  );
};
export default Header;
