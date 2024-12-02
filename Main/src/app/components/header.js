import "../Styles/header.css";

const Header = () => {
  return (
    <>
      <header className="nav-bar ">
        <div className="logo">Logo</div>

        <div className="nav-items">
          <div className="dropdown-1">
            <div className="courses">
              Courses
              <img src="/vector.png" className="vector" />
            </div>
          </div>
          <div className="dropdown-2">
            <div className="instructors">
              Instructors <img src="/vector.png" className="vector" />
            </div>
          </div>
          <div className="dropdown-3">
            <div className="blogs">
              Blogs <img src="/vector.png" className="vector" />
            </div>
          </div>
          <div className="about">About</div>
          <div className="contact">Contact</div>
        </div>
        <div className="nav-buttons">
          <div className="card-icon">
            <img src="/cart.png" alt="cart" className="cart-icon" />
          </div>
          <button className="login-btn">Login</button>
        </div>
      </header>
    </>
  );
};

export default Header;
