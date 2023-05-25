import { isNil } from "lodash";
import { generate_menu, generate_element } from "../../libs/utils";
import Image from "next/image";

export default function Navbar({ links }) {
  return (
    <>
      <nav className="navbar with-risk-warning">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="section-media type-image image">
              <Image
                priority
                src="/images/logo-bds-black.svg"
                width={213}
                height={30}
                alt="logo"
              />
            </div>
          </a>

          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-content">
            {generate_menu("navbar-nav", links)}
          </div>
        </div>
      </nav>

      {/* Mobile page overlay */}
      {/* <div className="menu-overlay"></div>

      <div className="mobile-menu">
        {generate_menu("nav-wrapper", links)}
      </div> */}
    </>
  );
}
