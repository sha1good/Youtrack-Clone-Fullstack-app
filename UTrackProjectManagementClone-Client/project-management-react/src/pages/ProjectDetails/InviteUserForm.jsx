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
import { inviteToProject } from "@/redux/project/Action";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const InviteUserForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(inviteToProject({ email: data.email, projectId: id }));
    console.log("data", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="User Email..."
                  {...field}
                  type="text"
                  className="border w-full border-gray-500 py-5 px-5"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogClose>
          <Button className="w-full my-5" type="submit">
            Invite User
          </Button>
        </DialogClose>
      </form>
    </Form>
  );
};

export default InviteUserForm;
