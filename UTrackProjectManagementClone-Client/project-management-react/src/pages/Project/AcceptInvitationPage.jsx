import { Button } from "@/components/ui/button";
import { acceptInviteToProject } from "@/redux/project/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AcceptInvitation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  console.log(token);
  const handleAcceptInvitation = () => {
    dispatch(acceptInviteToProject({ token, navigate }));
  };
  return (
    <div className="h-[85vh] flex flex-col justify-center items-center">
      <h1 className="py-5 font-semibold text-xl">
        You are invited to join this project
      </h1>
      <Button onClick={handleAcceptInvitation}>Accept Invitation</Button>
    </div>
  );
};

export default AcceptInvitation;
