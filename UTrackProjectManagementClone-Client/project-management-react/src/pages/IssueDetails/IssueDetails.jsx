import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import CommentCard from "./CommentCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIssuesById, updateIssuesById } from "@/redux/issues/Action";
import { fetchComment } from "@/redux/comment/Action";

const IssueDetails = () => {
  const { projectId, issueId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIssuesById(issueId));
      dispatch(fetchComment(issueId));
  }, [issueId, dispatch]);

  const { issues,  project, comments } = useSelector((store) => store);

  
  console.log("comments=====",comments);
  const handleUpDateStatus = (status) => {
    dispatch(updateIssuesById({ issueId, status }));
   
  };
  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between rounded-lg border p-10">
        <ScrollArea className="h-[80vh] w-[60%]">
          <div>
            <h1 className="text-lg font-semibold text-gray-400">
              {issues.issueDetails?.title}
            </h1>
            <div className="py-5">
              <h2 className="text-lg font-semibold text-gray-400">
                Description
              </h2>
              <p>{issues.issueDetails?.description}</p>
            </div>

            <div className="mt-5">
              <h1 className="pb-3">Activity</h1>
              <Tabs defaultValue="comments" className="w-[400px]">
                <TabsList className="mb-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  Make changes to your account here.
                </TabsContent>
                <TabsContent value="comments">
                  <CreateCommentForm issueId={issueId} />
                  <div className="mt-8 space-y-6">
                    {comments.comments.map((item) => (
                      <CommentCard key={item.id} item={item}/>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="history">
                  History Change your password here.
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>
        <div className="w-full lg:w-[30%] space-y-2">
          <Select onValueChange={handleUpDateStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="To do" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">To do</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>

          <div className="border rounded-lg">
            <p className="border-b py-3 px-5">Details</p>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Assignee</p>
                  {issues.issueDetails?.assignee.fullName ? (
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 text-xs">
                        <AvatarFallback>{issues.issueDetails?.assignee.fullName[0]}</AvatarFallback>
                      </Avatar>
                      <p>{issues.issueDetails?.assignee.fullName}</p>
                    </div>
                  ) : (
                    <p>unassigned</p>
                  )}
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Label</p>
                  <p>None</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Status</p>
                  <Badge>{issues.issueDetails?.status}</Badge>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Release</p>
                  <p>{issues.issueDetails?.dueDate}</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Reporter</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>{project.projectDetails?.owner.fullName[0]}</AvatarFallback>
                    </Avatar>
                    <p>{project.projectDetails?.owner.fullName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
