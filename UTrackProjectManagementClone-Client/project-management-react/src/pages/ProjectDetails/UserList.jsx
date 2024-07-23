import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { assignIssuesToUser } from "@/redux/issues/Action";
import { useDispatch, useSelector } from "react-redux";

const UserList = ({ issueDetails }) => {
  const { project } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleAssignIssuesToUser = (userId) => {
    dispatch(assignIssuesToUser({ issueId: issueDetails.id, userId }));
  };
  return (
    <div>
      <div className="space-y-2">
        <div className="space-y-2">
          <div className="rounded-md border">
            <p className="py-2 px-3">
              {issueDetails.assignee?.fullName || "Unassinged"}
            </p>
          </div>
          {project.projectDetails?.team.map((item) => (
            <div
              key={item.id}
              className="py-2 group hover:bg-slate-400 cursor-pointer flex items-center space-x-4 rounded-md px-4"
              onClick={() => handleAssignIssuesToUser(item.id)}
            >
              <Avatar>
                <AvatarFallback>{item.fullName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{item.fullName}</p>
                <p className="text-sm font-medium text-muted-foreground">
                  @{item.fullName.toLowerCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
