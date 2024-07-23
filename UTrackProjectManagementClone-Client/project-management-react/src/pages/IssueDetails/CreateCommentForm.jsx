import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createComment } from "@/redux/comment/Action";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const CreateCommentForm = ({ issueId }) => {
  const form = useForm({
    defaultValues: {
      comment: "",
    },
  });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(createComment({ comment: data.comment, issueId }));
    console.log("data", data);
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 mt-2">
                  <div>
                    <Avatar>
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                  </div>
                  <FormControl>
                    <Input
                      placeholder="add comment here..."
                      {...field}
                      type="text"
                      className="w-[20rem]"
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-2">
            save
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCommentForm;
