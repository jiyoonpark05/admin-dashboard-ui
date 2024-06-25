import { singleUser } from "../../data";
import Single from "../single/Single";

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
