import { Avatar, AvatarFallback } from "@/components/ui/avatar";
//import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import InviteUserForm from "./InviteUserForm";
import IssuesList from "./IssuList";
import ChatBox from "./ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProjectById } from "@/redux/project/Action";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  
  const { project } = useSelector((store) => store);
 
  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, [id, dispatch]);
  const handleProjectInvitation = () => {};
  return (
    <div className="mt-5 lg:px-10">
      <div className="lg:flex  md:flex gap-5 justify-between pb-4">
        <ScrollArea className="h-[70vh] lg:w-[69%] pr-2">
          <div className="text-gray-400 pb-10 w-full">
            <h1 className="text-lg font-semibold pb-5">
              {project.projectDetails?.name}
            </h1>
            <div className="space-y-5 pb-5 text-sm">
              <p className="w-full md:max-w-lg lg:max-w-xl text-sm">
                 { project.projectDetails?.description}
              </p>

              <div className="flex">
                <p className="w-36">Project Lead:</p>
                <p>{project.projectDetails?.owner.fullName}</p>
              </div>

              <div className="flex">
                <p className="w-36">Member:</p>
                <div className="flex items-center space-x-2">
                  {project.projectDetails?.team.map((item) => (
                    <Avatar className="cursor-pointer" key={item.id}>
                      {/* <AvatarFallback>{item.fullName.charAt(0)}</AvatarFallback> */}
                      <AvatarFallback>{item.fullName[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger>
                    <DialogClose>
                      <Button
                        size="sm"
                        variant="outline"
                        className="ml-2"
                        onClick={handleProjectInvitation}
                      >
                        <span>Invite</span>
                        <PlusIcon className="w-3 h-3" />
                      </Button>
                    </DialogClose>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>Invite User</DialogHeader>
                    <InviteUserForm />
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex">
                <p className="w-36">Category:</p>
                <p>{project.projectDetails?.category}</p>
              </div>

              {/* <div className="flex">
                <p className="w-36">Status:</p>
                <Badge>Sheriff</Badge>
              </div> */}
            </div>
          </div>

          <section>
            <p className="py-5 border-b text-sm -tracking-wider">Tasks</p>
            <div className="lg:flex md:flex gap-3 justify-between py-5">
              <IssuesList status="pending" title="Pending" />
              <IssuesList status="in_progress" title="In Progress" />
              <IssuesList status="done" title="Done" />
            </div>
          </section>
        </ScrollArea>
        <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
