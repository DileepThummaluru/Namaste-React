import UserClass from "./UserClass";
import UserContext from "../utils/userContext";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <UserClass
        name={"Dileep from class"}
        location={"Pulivendula"}
        contact={"@dileepthummaluru"}
      />
      <h3>Creacting swiggy clone</h3>
    </div>
  );
};

export default About;
