import { APP_NAME } from "../../assets/constants";

type navbarOption = {
  title: string;
  href: string;
};

type navbarProps = {
  options: navbarOption[];
};

const Navbar = (props: navbarProps) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          {APP_NAME}
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
                props.options.map((option) => {
                    return (
                        <li className="nav-item" key={option.title}>
                            <a className="nav-link" href={option.href}>
                              {option.title}
                            </a>
                        </li>
                    )
                })
            }
          </ul>
          <div className="d-flex align-items-center">
            <input type="text" className="form-control me-2" placeholder="Username" />
            <input type="password" className="form-control me-2" placeholder="Password" />
            <button className="btn btn-light me-2">Login</button>
            <a href="#">Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
