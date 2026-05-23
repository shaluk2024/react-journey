import "./Navbar.css";

type NavbarProps = {
  title: string;
  about: string;
};

function Navbar(props: NavbarProps) {
  return (
    <div className="navbar">
      <div className="left">
        <div className="title">{props.title}</div>
        <div className="about">{props.about}</div>
      </div>
    </div>
  );
}

export default Navbar;
