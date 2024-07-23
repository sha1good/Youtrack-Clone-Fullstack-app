import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import IssuesCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateIssueForm from "./CreateissueForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIssues } from "@/redux/issues/Action";
import { useParams } from "react-router-dom";

const IssuesList = ({ status, title }) => {
  const dispatch = useDispatch();

  const { id } = useParams();
    console.log(id)
  useEffect(() => {
    dispatch(fetchIssues(id));
  }, [id, dispatch]);
  const { issues } = useSelector((store) => store);
   console.log("Issues------------", issues);
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[100px] lg:w-[270px]">
          <CardHeader>
          <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
            {issues.issues.filter((issue) => issue.status === status).map((item) => (
                <IssuesCard key={item} item={item} projectId={id}/>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <DialogTrigger>
              <Button className="flex w-full items-center gap-2">
                <PlusIcon />
                Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          <CreateIssueForm/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssuesList;
