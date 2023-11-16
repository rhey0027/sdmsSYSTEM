import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { Link, Outlet } from 'react-router-dom';
import '../css/Dashboard.css';


const Dashboard = () => {

  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-black">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <span class="fs-5 d-none d-sm-inline">Admin</span>
            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
              <Link
                  to="/home"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle text-white text-decoration-none"
                >
                 <i class="fs-4 bi-speedometer2"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Dashboard</span>
              </Link>
              </li>
              <li>
                <Link
                  to="/student"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle text-white text-decoration-none"
                >
                  <i class="fs-4 bi-people"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Manage Students</span>{" "}
                </Link>
                <ul
                  class="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                ></ul>
              </li>
              <li>
                <Link
                  to="/profile"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle text-white text-decoration-none"
                >
                  <i class="fs-4 bi-person"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Profile</span>{" "}
                </Link>
                <ul
                  class="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                ></ul>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle text-white text-decoration-none"
                >
                  <i class="fs-4 bi-power"></i>{" "}
                  <span class="ms-1 d-none d-sm-inline">Logout</span>{" "}
                </a>
                <ul
                  class="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                ></ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="flex flex-col header_profile">
            <h1 className="text-[34px] p-3 text-white font-light">
              <span className='text-yellow-500'>Student</span> Database Management System
            </h1>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard
