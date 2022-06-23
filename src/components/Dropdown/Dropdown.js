import "./Dropdown.css";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { VscSignIn } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io"

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-content">
        <ul className="dropdown-content-items">
          <li className="dropdown-content-item">
            <div className="language">
              <GrLanguage />
              <label>language</label>
              <IoIosArrowForward className="right-arrow"/>
            </div>
          </li>
          <li className="dropdown-content-item">
            <div className="darkmode">
              <MdOutlineDarkMode />
              <label>darkmode</label>
            </div>
          </li>
          <li className="dropdown-content-item">
            <div className="login">
                <VscSignIn/>
                <label>login</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
