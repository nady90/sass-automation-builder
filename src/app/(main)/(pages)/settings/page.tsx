"use client";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="p-4 flex flex-col gap-y-2">
      <h1 className="text-3xl">Settings</h1>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl">User profile</h2>
        <p>Add or update your profile</p>
      </div>

      <ProfileForm />
    </div>
  );
}

const formSchema = z.object({
  name: z.string(),
  email: z.email(),
});

function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <form
      className="flex flex-col gap-y-2"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="settings-name">Your name</FieldLabel>
              <Input
                id="settings-name"
                aria-invalid={fieldState.invalid}
                placeholder="Your name here"
                autoComplete="off"
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="settings-email">Your email</FieldLabel>
              <Input
                disabled={true}
                id="settings-email"
                aria-invalid={fieldState.invalid}
                placeholder="Your email"
                autoComplete="off"
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <div>
        <Button type="submit">Save user settings</Button>
        <Button
          onClick={() => {
            form.reset();
          }}
        >
          Reset
        </Button>
      </div>
    </form>
  );
}
