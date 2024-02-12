import React from 'react'
import logoimg from '../image/logo.svg'
import { NavLink } from 'react-router-dom'

const Navbaar = () => {
  return (
    <>
    <header>
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-xl container-fluid">
    <div className="row w-100">
        <div className="col-lg-2 col-12">
    <NavLink className="navbar-brand" to="/home"><img src={logoimg} className="img-fluid" alt="" /></NavLink>
        </div>
        <div className="col-lg-10 col-10  d-flex align-items-center justify-content-lg-end">
            <div className="live-pro-sec ">
                <a href="#">Current Project 100</a>
                <a href="#">Deployed Project 100</a>
            </div>
            <div className='icon-sec'>
                <input type="text" placeholder='Search'/>
                <a href='#'><i className="fa-solid fa-magnifying-glass"></i></a>
                <a href='https://www.facebook.com/mechodaltechnology/'><i className="fa-brands fa-facebook-f"></i></a>
                <a href='#'><i className="fa-brands fa-twitter"></i></a>
                <a href='https://in.linkedin.com/company/mechodal-technology'><i className="fa-brands fa-linkedin"></i></a>
                <a href='https://www.youtube.com/channel/UC7FnOXgfksW6d0bpMlfvWoA'><i className="fa-brands fa-youtube"></i></a>
            </div>

        </div>
        <div className="col-lg-12 col-2  text-end my-2">
	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse pt-2 justify-content-center" id="main_nav">
		<ul className="navbar-nav">
			<li className="nav-item">
				<NavLink className="nav-link nav-border" to="/mechostory"> The Mechodal Story  </NavLink>
			</li>
			<li className="nav-item dropdown has-megamenu">
				<a className="nav-link dropdown-toggle nav-border" href="#" data-bs-toggle="dropdown"> Our Company  </a>
				<div className="dropdown-menu megamenu" role="menu">
					<div className="row g-3">
						<div className=" col-12">
							<div className="col-megamenu">
								<NavLink to="/about"><h6 className="title ">About</h6></NavLink>
							</div>
                            <div className="col-megamenu">
								<h6 className="title"> Leadership</h6>
								<ul className="list-unstyled">
									<li><NavLink to="/founderceo">Founder & CEO</NavLink></li>
									<li><NavLink to="/boardofdirector">Borad of Director</NavLink></li>
								</ul>
							</div>
						</div>
					</div>
				</div> 
			</li>
			<li className="nav-item dropdown has-megamenu">
				<a className="nav-link dropdown-toggle nav-border" href="#" data-bs-toggle="dropdown"> Our Business  </a>
				<div className="dropdown-menu megamenu" role="menu">
					<div className="row g-3">
						<div className="col-lg-4">
							<div className="col-megamenu">
								<NavLink to="/development"><h6 className="title">Development</h6></NavLink>
								<NavLink to="/Web3technologies"><h6 className="title">Web3 technologies</h6></NavLink>
								<NavLink to="/production"><h6 className="title">Production</h6></NavLink>
								<NavLink to="/Rd"><h6 className="title">R&D</h6></NavLink>						
								<NavLink to="/animationandgraphics"><h6 className="title">Animation and Graphics</h6></NavLink>						
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<div className="col-megamenu">
								<h6 className="title">Development</h6>
								<ul className="list-unstyled">
									<li><NavLink to="/softwaredevelopment">Software Development</NavLink></li>
									<li><NavLink to="/mobileapplicationdevelopment">Mobile Application Development</NavLink></li>
									<li><NavLink to="/websitedevelopment">Website Development</NavLink></li>
									<li><NavLink to="/productdevelopment">Product Development</NavLink></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<div className="col-megamenu">
								<NavLink to="https://4born.info/"><h6 className="title">Web3 technologies</h6></NavLink>
								<NavLink to="https://4born.info/"><h6 className="title">Blockchain technologies</h6></NavLink>
								<NavLink to="https://graphiglow.in/"><h6 className="title">graphiglow designs</h6></NavLink>
							</div>
						</div>
					</div>
				</div> 
			</li>
			<li className="nav-item dropdown has-megamenu">
				<a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Innovation & R&D  </a>
				<div className="dropdown-menu megamenu" role="menu">
					<div className="row g-3">
						<div className="col-lg-6 col-6">
							<div className="col-megamenu">
							<NavLink to="/innovation"><h6 className="title">Innovation</h6></NavLink>
								{/* <h6 className="title">Innovation</h6> */}
							</div>
						</div>
						<div className="col-lg-6 col-6">
							<div className="col-megamenu">
							<NavLink to="/reseachdev"><h6 className="title">Research & R&D</h6></NavLink>
							</div>
						</div>
					</div>
				</div> 
			</li>
		</ul>
	</div> 

        </div>
    </div>
  </div>
</nav>

    </header>

{/* <nav className="navbar navbar-expand-lg navbar-light">
<div className="container-fluid">
	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse justify-content-center" id="main_nav">
		<ul className="navbar-nav">
			<li className="nav-item">
				<a className="nav-link " href="#"> The Realiance Story  </a>
			</li>
			<li className="nav-item dropdown has-megamenu">
				<a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Our Company  </a>
				<div className="dropdown-menu megamenu" role="menu">
					<div className="row g-3">
						<div className="col-lg-4 col-4">
							<div className="col-megamenu">
								<h6 className="title">About</h6>
							</div>
                            <div className="col-megamenu">
								<h6 className="title"> Leadership</h6>
								<ul className="list-unstyled">
									<li><a href="#">Founder & Chairman</a></li>
									<li><a href="#">Chairman & Managing Director</a></li>
									<li><a href="#">Borad of Director</a></li>
									<li><a href="#">Borad of Commitee</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-4">
							<div className="col-megamenu">
								<h6 className="title"> Leadership</h6>
								<h6 className="title"> Leadership</h6>
								<h6 className="title"> Leadership</h6>
								<h6 className="title"> Leadership</h6>								
							</div>
						</div>
					</div>
				</div> 
			</li>
			<li className="nav-item dropdown has-megamenu">
				<a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Our Business  </a>
				<div className="dropdown-menu megamenu" role="menu">
					<div className="row g-3">
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu One</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu Two</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu Three</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>    
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu Four</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div> 
			</li>
			<li className="nav-item dropdown has-megamenu">
				<a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Innovation & R&D  </a>
				<div className="dropdown-menu megamenu" role="menu">
					<div className="row g-3">
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu One</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu Two</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu Three</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>    
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu Four</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div> 
			</li>
			<li className="nav-item dropdown has-megamenu">
				<a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Investore Relation  </a>
				<div className="dropdown-menu megamenu" role="menu">
					<div className="row g-3">
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu One</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu Two</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu Three</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>    
						<div className="col-lg-3 col-6">
							<div className="col-megamenu">
								<h6 className="title">Title Menu Four</h6>
								<ul className="list-unstyled">
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
									<li><a href="#">Custom Menu</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div> 
			</li>
		</ul>
	</div> 
</div> 
</nav> */}
    </>
  )
}

export default Navbaar