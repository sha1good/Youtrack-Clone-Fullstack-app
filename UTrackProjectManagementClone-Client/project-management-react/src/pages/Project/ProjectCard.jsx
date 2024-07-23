import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteProjectById } from "@/redux/project/Action";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({item}) => {

    const navigate = useNavigate();
     const dispatch = useDispatch();
     const handleDelete = () =>{
        dispatch(deleteProjectById(item.id)) 
     }
   
  return (
    <Card className="p-5 w-full lg:max-w-3xl">
      <div className="space-y-5">
        <div className="space-y-3">
          <div className=" flex justify-between">
            <div className="item-center  flex gap-5">
              <h1  onClick={() => navigate("/project/" + item.id)} className="cursor-pointer font-bold text-lg">
                {item?.name}
              </h1>
              <DotFilledIcon />
              <p className="text-sm text-gray-400">{item?.category}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className= "rounded-full" size="icon">
                  <DotsVerticalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Update</DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

            <p className="text-gray-500 text-sm">{item?.description}</p>

        </div>
         <div className="flex flex-wrap gap-2 items-center">
                {item.tags.map((item) => (<Badge key={item} variant="outline">{item}</Badge>))}
         </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
