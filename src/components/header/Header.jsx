import './header.css';
import logo from '../../assets/images/logo.svg';
import toggle from '../../assets/images/toggle.svg';
const Header = () => {

  return (
    <nav class="navbar navbar-expand-lg container py-3">
      <div class="container-fluid">
        <img src={logo} alt="logo" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0 gap-4">
            <li class="nav-item">
              <a class="nav-link active color" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Contact</a>
            </li>

          </ul>
          <div>
            <span>Login</span> &nbsp;
            <img src={toggle} alt="toggle-bar" />
          </div>

        </div>
      </div>
    </nav>

  )
}

export default Header;