import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function AdminContainer() {
  const logOut = () => {
    if (window.confirm("Are you want to logout?")) {
      localStorage.clear("token");
      window.location.reload();
  }
  }
  return (
    <div id="layout-wrapper">
      {/* <!-- ========== Header ========== --> */}
      <header id="page-topbar">
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              {/* Logo */}
              <div className="navbar-brand-box horizontal-logo">
                <Link to="#" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="assets/images/logo-sm.png" alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-dark.png" alt="" height="17" />
                  </span>
                </Link>

                <Link to="#" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="assets/images/logo-sm.png" alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-light.png" alt="" height="17" />
                  </span>
                </Link>
              </div>

              <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
                <span className="hamburger-icon open">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>

              <form className="app-search d-none d-md-block">
                <div className="position-relative">
                  <input type="text" className="form-control" placeholder="Search..." autoComplete="off" id="search-options" />
                  <span className="mdi mdi-magnify search-widget-icon"></span>
                  <span className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none" id="search-close-options"></span>
                </div>
                {/* <div className="dropdown-menu dropdown-menu-lg" id="search-dropdown">
                    <div data-simplebar="init" style={{ maxHeight: '320px' }}>
                      <div className="simplebar-wrapper" style={{ margin: '0px' }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer">
                          </div>
                        </div>
                        <div className="simplebar-mask">
                          <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                            <div className="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: 'auto', overflow: 'hidden' }}>
                              <div className="simplebar-content" style={{ padding: '0px' }}>
                                <div className="dropdown-header">
                                  <h6 className="text-overflow text-muted mb-0 text-uppercase">Recent Searches</h6>
                                </div>

                                <div className="dropdown-item bg-transparent text-wrap">
                                  <Link to="#" className="btn btn-soft-secondary btn-sm btn-rounded">how to setup <i className="mdi mdi-magnify ms-1"></i></Link>
                                  <Link to="#" className="btn btn-soft-secondary btn-sm btn-rounded">buttons <i className="mdi mdi-magnify ms-1"></i></Link>
                                </div>
                                <div className="dropdown-header mt-2">
                                  <h6 className="text-overflow text-muted mb-1 text-uppercase">Pages</h6>
                                </div>

                                <Link to="#" className="dropdown-item notify-item">
                                  <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
                                  <span>Analytics Dashboard</span>
                                </Link>

                                <Link to="#" className="dropdown-item notify-item">
                                  <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
                                  <span>Help Center</span>
                                </Link>

                                <Link to="#" className="dropdown-item notify-item">
                                  <i className="ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
                                  <span>My account settings</span>
                                </Link>

                                <div className="dropdown-header mt-2">
                                  <h6 className="text-overflow text-muted mb-2 text-uppercase">Members</h6>
                                </div>

                                <div className="notification-list">
                                  <Link to="#" className="d-flex dropdown-item notify-item py-2">
                                    <img src="assets/images/users/avatar-2.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                    <div className="flex-1">
                                      <h6 className="m-0">Angela Bernier</h6>
                                      <span className="fs-11 mb-0 text-muted">Manager</span>
                                    </div>
                                  </Link>
                                  <Link to="#" className="d-flex dropdown-item notify-item py-2">
                                    <img src="assets/images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                    <div className="flex-1">
                                      <h6 className="m-0">David Grasso</h6>
                                      <span className="fs-11 mb-0 text-muted">Web Designer</span>
                                    </div>
                                  </Link>
                                  <Link to="#" className="d-flex dropdown-item notify-item py-2">
                                    <img src="assets/images/users/avatar-5.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                    <div className="flex-1">
                                      <h6 className="m-0">Mike Bunch</h6>
                                      <span className="fs-11 mb-0 text-muted">React Developer</span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="simplebar-placeholder" style={{ width: '0px', height: '0px' }}>
                        </div>
                      </div>
                      <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
                        <div className="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}>
                        </div>
                      </div>
                      <div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}>
                        <div className="simplebar-scrollbar" style={{ height: '0px', display: 'none' }}>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-3 pb-1">
                      <Link to="pages-search-results.html" className="btn btn-primary btn-sm">View All Results <i className="ri-arrow-right-line ms-1"></i></Link>
                    </div>
                  </div> */}
              </form>
            </div>

            <div className="d-flex align-items-center">

              <div className="dropdown d-md-none topbar-head-dropdown header-item">
                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-search fs-22"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                        <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="dropdown ms-1 topbar-head-dropdown header-item">
                <button type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <img id="header-lang-img" src="assets/images/flags/us.svg" alt="Header Language" height="20" className="rounded" />
                </button>
                {/* <div className="dropdown-menu dropdown-menu-end">

                    <Link to="#" className="dropdown-item notify-item language py-2" data-lang="en" title="English">
                      <img src="assets/images/flags/us.svg" alt="user" className="me-2 rounded" height="18" />
                      <span className="align-middle">English</span>
                    </Link>

                    <Link to="#" className="dropdown-item notify-item language" data-lang="sp" title="Spanish">
                      <img src="assets/images/flags/spain.svg" alt="user" className="me-2 rounded" height="18" />
                      <span className="align-middle">Española</span>
                    </Link>

                    <Link to="#" className="dropdown-item notify-item language" data-lang="gr" title="German">
                      <img src="assets/images/flags/germany.svg" alt="user" className="me-2 rounded" height="18" /> <span className="align-middle">Deutsche</span>
                    </Link>
                    <Link to="#" className="dropdown-item notify-item language" data-lang="it" title="Italian">
                      <img src="assets/images/flags/italy.svg" alt="user" className="me-2 rounded" height="18" />
                      <span className="align-middle">Italiana</span>
                    </Link>
                    <Link to="#" className="dropdown-item notify-item language" data-lang="ru" title="Russian">
                      <img src="assets/images/flags/russia.svg" alt="user" className="me-2 rounded" height="18" />
                      <span className="align-middle">русский</span>
                    </Link>

                    <Link to="#" className="dropdown-item notify-item language" data-lang="ch" title="Chinese">
                      <img src="assets/images/flags/china.svg" alt="user" className="me-2 rounded" height="18" />
                      <span className="align-middle">中国人</span>
                    </Link>

                    <Link to="#" className="dropdown-item notify-item language" data-lang="fr" title="French">
                      <img src="assets/images/flags/french.svg" alt="user" className="me-2 rounded" height="18" />
                      <span className="align-middle">français</span>
                    </Link>
                  </div> */}
              </div>

              <div className="dropdown topbar-head-dropdown ms-1 header-item">
                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <BackupOutlinedIcon sx={{color:'#686868'}} />
                </button>
                {/* <div className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
                    <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0 fw-semibold fs-15"> Web Apps </h6>
                        </div>
                        <div className="col-auto">
                          <Link to="#!" className="btn btn-sm btn-soft-info"> View All Apps
                            <i className="ri-arrow-right-s-line align-middle"></i></Link>
                        </div>
                      </div>
                    </div>

                    <div className="p-2">
                      <div className="row g-0">
                        <div className="col">
                          <Link className="dropdown-icon-item" to="#!">
                            <img src="assets/images/brands/github.png" alt="Github" />
                            <span>GitHub</span>
                          </Link>
                        </div>
                        <div className="col">
                          <Link className="dropdown-icon-item" to="#!">
                            <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                            <span>Bitbucket</span>
                          </Link>
                        </div>
                        <div className="col">
                          <Link className="dropdown-icon-item" to="#!">
                            <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                            <span>Dribbble</span>
                          </Link>
                        </div>
                      </div>

                      <div className="row g-0">
                        <div className="col">
                          <Link className="dropdown-icon-item" to="#!">
                            <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                            <span>Dropbox</span>
                          </Link>
                        </div>
                        <div className="col">
                          <Link className="dropdown-icon-item" to="#!">
                            <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                            <span>Mail Chimp</span>
                          </Link>
                        </div>
                        <div className="col">
                          <Link className="dropdown-icon-item" to="#!">
                            <img src="assets/images/brands/slack.png" alt="slack" />
                            <span>Slack</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
              </div>

              <div className="dropdown topbar-head-dropdown ms-1 header-item">
                <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-cart-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <NotificationsNoneOutlinedIcon sx={{color:'#686868'}} />
                  <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">7<span className="visually-hidden">unread messages</span></span>
                </button>
                {/* <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0" aria-labelledby="page-header-cart-dropdown">
                    <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0 fs-16 fw-semibold"> My Cart</h6>
                        </div>
                        <div className="col-auto">
                          <span className="badge badge-soft-warning fs-13"> 7 items</span>
                        </div>
                      </div>
                    </div>
                    <div data-simplebar="init" style={{ maxHeight: '300px' }}>
                      <div className="simplebar-wrapper" style={{ margin: '0px' }}>
                        <div className="simplebar-height-auto-observer-wrapper">
                          <div className="simplebar-height-auto-observer">
                          </div>
                        </div>
                        <div className="simplebar-mask">
                          <div className="simplebar-offset" style={{ right: '0px', bottom: '0px' }}>
                            <div className="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: 'auto', overflow: 'hidden' }}><div className="simplebar-content" style={{ padding: '0px' }}>
                              <div className="p-2">
                                <div className="d-block dropdown-item text-wrap px-3 py-2">
                                  <div className="d-flex align-items-center">
                                    <img src="assets/images/products/img-1.png" className="me-3 rounded-circle avatar-sm p-2 bg-light" alt="user-pic" />
                                    <div className="flex-1">
                                      <h6 className="mt-0 mb-1 fs-14">
                                        <Link to="apps-ecommerce-product-details.html" className="text-reset">Branded
                                          T-Shirts</Link>
                                      </h6>
                                      <p className="mb-0 fs-12 text-muted">
                                        Quantity: <span>10 x $32</span>
                                      </p>
                                    </div>
                                    <div className="px-2">
                                      <h5 className="m-0 fw-normal">$320</h5>
                                    </div>
                                    <div className="ps-2">
                                      <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary"><i className="ri-close-fill fs-16"></i></button>
                                    </div>
                                  </div>
                                </div>

                                <div className="d-block dropdown-item text-wrap px-3 py-2">
                                  <div className="d-flex align-items-center">
                                    <img src="assets/images/products/img-2.png" className="me-3 rounded-circle avatar-sm p-2 bg-light" alt="user-pic" />
                                    <div className="flex-1">
                                      <h6 className="mt-0 mb-1 fs-14">
                                        <Link to="apps-ecommerce-product-details.html" className="text-reset">Bentwood Chair</Link>
                                      </h6>
                                      <p className="mb-0 fs-12 text-muted">
                                        Quantity: <span>5 x $18</span>
                                      </p>
                                    </div>
                                    <div className="px-2">
                                      <h5 className="m-0 fw-normal">$89</h5>
                                    </div>
                                    <div className="ps-2">
                                      <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary"><i className="ri-close-fill fs-16"></i></button>
                                    </div>
                                  </div>
                                </div>

                                <div className="d-block dropdown-item text-wrap px-3 py-2">
                                  <div className="d-flex align-items-center">
                                    <img src="assets/images/products/img-3.png" className="me-3 rounded-circle avatar-sm p-2 bg-light" alt="user-pic" />
                                    <div className="flex-1">
                                      <h6 className="mt-0 mb-1 fs-14">
                                        <Link to="apps-ecommerce-product-details.html" className="text-reset">
                                          Borosil Paper Cup</Link>
                                      </h6>
                                      <p className="mb-0 fs-12 text-muted">
                                        Quantity: <span>3 x $250</span>
                                      </p>
                                    </div>
                                    <div className="px-2">
                                      <h5 className="m-0 fw-normal">$750</h5>
                                    </div>
                                    <div className="ps-2">
                                      <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary"><i className="ri-close-fill fs-16"></i></button>
                                    </div>
                                  </div>
                                </div>

                                <div className="d-block dropdown-item text-wrap px-3 py-2">
                                  <div className="d-flex align-items-center">
                                    <img src="assets/images/products/img-6.png" className="me-3 rounded-circle avatar-sm p-2 bg-light" alt="user-pic" />
                                    <div className="flex-1">
                                      <h6 className="mt-0 mb-1 fs-14">
                                        <Link to="apps-ecommerce-product-details.html" className="text-reset">Gray
                                          Styled T-Shirt</Link>
                                      </h6>
                                      <p className="mb-0 fs-12 text-muted">
                                        Quantity: <span>1 x $1250</span>
                                      </p>
                                    </div>
                                    <div className="px-2">
                                      <h5 className="m-0 fw-normal">$1250</h5>
                                    </div>
                                    <div className="ps-2">
                                      <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary"><i className="ri-close-fill fs-16"></i></button>
                                    </div>
                                  </div>
                                </div>

                                <div className="d-block dropdown-item text-wrap px-3 py-2">
                                  <div className="d-flex align-items-center">
                                    <img src="assets/images/products/img-5.png" className="me-3 rounded-circle avatar-sm p-2 bg-light" alt="user-pic" />
                                    <div className="flex-1">
                                      <h6 className="mt-0 mb-1 fs-14">
                                        <Link to="apps-ecommerce-product-details.html" className="text-reset">Stillbird Helmet</Link>
                                      </h6>
                                      <p className="mb-0 fs-12 text-muted">
                                        Quantity: <span>2 x $495</span>
                                      </p>
                                    </div>
                                    <div className="px-2">
                                      <h5 className="m-0 fw-normal">$990</h5>
                                    </div>
                                    <div className="ps-2">
                                      <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary"><i className="ri-close-fill fs-16"></i></button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                        <div className="simplebar-placeholder" style={{ width: '0px', height: '0px' }}>
                        </div>
                      </div>
                      <div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}>
                        <div className="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}>
                        </div>
                      </div>
                      <div className="simplebar-track simplebar-vertical" style={{ visibility: 'hidden' }}>
                        <div className="simplebar-scrollbar" style={{ height: '0px', display: 'none' }}>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border d-grid">
                      <div className="d-flex justify-content-between align-items-center pb-3">
                        <h5 className="m-0 text-muted">Total:</h5>
                        <div className="px-2">
                          <h5 className="m-0">$1258.58</h5>
                        </div>
                      </div>

                      <Link to="apps-ecommerce-checkout.html" className="btn btn-success text-center">
                        Checkout
                      </Link>
                    </div>
                  </div> */}
              </div>


              <div className="dropdown ms-sm-3 header-item topbar-user">
                <button type="button"
                  onClick={logOut} 
                  className="btn" 
                  id="page-header-user-dropdown" 
                  data-bs-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">
                  <span className="d-flex align-items-center">
                    <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                      <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                    </span>
                  </span>
                </button>
                {/* <div className="dropdown-menu dropdown-menu-end">
                    <h6 className="dropdown-header">Welcome Anna!</h6>
                    <Link className="dropdown-item" to="pages-profile.html"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></Link>
                    <Link className="dropdown-item" to="apps-chat.html"><i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Messages</span></Link>
                    <Link className="dropdown-item" to="apps-tasks-kanban.html"><i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Taskboard</span></Link>
                    <Link className="dropdown-item" to="pages-faqs.html"><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Help</span></Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="pages-profile.html"><i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Balance : <b>$5971.67</b></span></Link>
                    <Link className="dropdown-item" to="pages-profile-settings.html"><span className="badge bg-soft-success text-success mt-1 float-end">New</span><i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Settings</span></Link>
                    <Link className="dropdown-item" to="auth-lockscreen-basic.html"><i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></Link>
                    <Link className="dropdown-item" to="auth-logout-basic.html"><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></Link>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ========== Side Menu ========== --> */}
      <SideMenu />
      {/* <!-- ========== Main Contant (Right) ========== --> */}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0">Dashboard</h4>
                  <div>
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item"><Link to="#">Dashboards</Link></li>
                      <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <Outlet />

          </div>
        </div>

      </div>
    </div>
  )
}

export default AdminContainer;