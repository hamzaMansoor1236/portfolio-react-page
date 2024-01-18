import "./NavBar.css"
import svg from "./svg";
function NavBar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-black custom-margin custom-padding round-border">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main_nav" >
        <ul class="navbar-nav " >
          <li class="nav-item active "> <a class="nav-link custom-styling-link px-3 " href="about">Home </a> </li>
          <li class="nav-item "><a class="nav-link custom-styling-link" href="about"> About </a></li>
          <li class="nav-item "><a class="nav-link custom-styling-link" href="about"> Services </a></li>
          <li className="nav-item ">{svg}
          </li>
          <li class="nav-item "> <a class="nav-link custom-styling-link" href="about">Resume </a> </li>
          <li class="nav-item " ><a class="nav-link custom-styling-link" href="about"> Project </a></li>
          <li class="nav-item "><a class="nav-link custom-styling-link" href="about"> Contract </a></li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;