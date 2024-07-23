import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";

import ProjectCard from "../Project/ProjectCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProject, searchProject } from "@/redux/project/Action";

export const tags = [
  "all",
  "react",
  "nextjs",
  "nodejs",
  "angular",
  "spring boot",
  "python",
  "flask",
  "mysql",
  "mongodb",
  "django",
];
const ProjectList = () => {
  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();

  // const handleFilterChange = (section, value) => {
  //    console.log(section, "value", value);
  // };
  const handleFilterCategory = (value) => {
    if (value === "all") {
      dispatch(fetchProject({}));
    } else {
      dispatch(fetchProject({ category: value }));
      // console.log(section, "value", value);
    }
  };

  const handleFilterTags = (value) => {
    if (value === "all") {
      dispatch(fetchProject({}));
    } else {
      dispatch(fetchProject({ tags: value }));
      // console.log(section, "value", value);
    }
  };

  const handleSearchChange = (event) => {
    setKeyword(event.target.value);
    dispatch(searchProject(event.target.value));
  };

  const { project } = useSelector((store) => store);
  //console.log(project);
  return (
    <>
      <div className="relative px-5 lg:px:0 lg:flex gap-5 justify-center py-5">
        <section className="filterSection">
          <Card className="p-5 sticky top-10">
            <div className="flex justify-between lg:w-[20rem]">
              <p className="text-xl -tracking-wider">Filter</p>
              <Button variant="ghost" size="icon">
                <MixerHorizontalIcon />
              </Button>
            </div>
            <CardContent className="mt-5">
              <ScrollArea className="space-y-7 h-[100vh]">
                <div>
                  <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                  <div className="pt-5">
                    <RadioGroup
                      className="space-y-3 pt-5"
                      defaultValue="all"
                      onValueChange={(value) =>
                        // handleFilterChange("category", value)
                        handleFilterCategory(value)
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="r1" />
                        <Label htmlFor="r1">All</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fullstack" id="r2" />
                        <Label htmlFor="r2">Fullstack</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="frontend" id="r3" />
                        <Label htmlFor="r1">Frontend</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="backend" id="r4" />
                        <Label htmlFor="r4">Backend</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className="pt-9">
                  <h1 className="pb-3 text-gray-400 border-b">Tags</h1>
                  <div className="pt-3">
                    <RadioGroup
                      space-y-3
                      pt-5
                      defaultValue="all"
                      onValueChange={(value) => handleFilterTags(value)}
                    >
                      {tags.map((item) => (
                        <div className="flex items-center space-x-2" key={item}>
                          <RadioGroupItem value={item} id={`r1-${item}`} />
                          <Label htmlFor={`r1-${item}`}>{item}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </section>
        <section className="projectListSection  w-full lg:w-[48rem]">
          <div className="flex gap-2 items-center justify-between pb-5">
            <div className="relative p-0 w-full">
              <Input
                className="40% px-9"
                placeholder="search projects"
                onChange={handleSearchChange}
              />
              <MagnifyingGlassIcon className="absolute top-3 left-4" />
            </div>
          </div>
          <div>
            <div className="space-y-5 min-h-[74vh]">
              {keyword
                ? project.searchProjects.map((item, index) => (
                    <ProjectCard key={item.id + index} item={item} />
                  ))
                : project.projects.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
            </div>
          </div>
        </section>
      </div>
      ;
    </>
  );
};

export default ProjectList;
