"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Card, CardContent } from "../ui/card";

const createWorkflowFormSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export default function WorkFlowsButton() {
  const form = useForm<z.infer<typeof createWorkflowFormSchema>>({
    resolver: zodResolver(createWorkflowFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof createWorkflowFormSchema>) {
    console.log(data);
    toast.success("New workflow created!");
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>+</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add workflow</DrawerTitle>
          <DrawerDescription>
            choose the name and descripton of your new workflow
          </DrawerDescription>
        </DrawerHeader>
        <Card>
          <CardContent>
            <form
              id="create-workflow-form"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FieldGroup>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="name">name</FieldLabel>
                      <Input
                        {...field}
                        id="name"
                        placeholder="Enter workflow name"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="description"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="description">description</FieldLabel>
                      <Input
                        {...field}
                        id="description"
                        placeholder="Enter workflow description"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>

              <Button type="submit">Create</Button>
            </form>
          </CardContent>
        </Card>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
