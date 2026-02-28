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
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { toast } from "sonner";
import {
  getProfileImage,
  removeProfileImage,
  updateProfileImage,
  updateUserName,
} from "@/actions/form";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  return (
    <div className="p-4 flex flex-col gap-y-2">
      <h1 className="text-3xl">Settings</h1>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl">User profile</h2>
        <p>Add or update your profile</p>
      </div>
      <ProfilePicture />
      <ProfileForm />
    </div>
  );
}

function ProfilePicture() {
  // TODO: add loading states (gray skeleton) when fetching the image.
  const [profileImg, setProfileImg] = useState("");
  const { user } = useUser();

  const handleUpload = async (e: any) => {
    try {
      if (user) updateProfileImage(user?.id, e.cdnUrl);
      toast.success("Profile picture uploaded!");
      (async () => {
        if (!user) return null;
        const res = await getProfileImage(user.id);
        console.log("🚀 ~ ProfilePicture ~ res:", res);
        if (!res?.profileImage) return null;
        setProfileImg(res.profileImage);
      })();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      if (!user) return null;
      const res = await getProfileImage(user.id);
      console.log("🚀 ~ ProfilePicture ~ res:", res);
      if (!res?.profileImage) return null;
      setProfileImg(res.profileImage);
    })();
  });

  function handleRemoveProfileImage() {
    if (!user) return null;
    removeProfileImage(user.id);

    (async () => {
      if (!user) return null;
      const res = await getProfileImage(user.id);
      console.log("🚀 ~ ProfilePicture ~ res:", res);
      setProfileImg("");
    })();
  }

  return (
    <div className="flex flex-col ">
      <div className="group h-[30vh] bg-gray-100 flex relative flex-col items-center justify-center">
        {!profileImg && (
          <p className="absolute top-10 left-1/2 -translate-x-1/2 w-max">
            Profile Picture
          </p>
        )}
        <div className="absolute inset-0 group-hover:bg-black/30 z-20"></div>
        {profileImg && (
          <Image
            className="absolute object-cover inset-0 z-10"
            src={profileImg}
            fill
            alt="profile image"
          />
        )}
        <div className="absolute inset-0 z-50 flex-col items-center justify-center hidden group-hover:flex">
          <FileUploaderRegular
            sourceList="local, camera, facebook, gdrive"
            cdnCname="https://397jjnu6r4.ucarecd.net/"
            classNameUploader="uc-light"
            pubkey="3e426a1753a3a4ebbced"
            onFileUploadSuccess={handleUpload}
          />
        </div>
      </div>
      {profileImg && (
        <Button
          onClick={() => {
            handleRemoveProfileImage();
          }}
        >
          Remove profile image
        </Button>
      )}
    </div>
  );
}

const formSchema = z.object({
  name: z.string(),
  email: z.email(),
});

function ProfileForm() {
  const { user } = useUser();
  console.log("🚀 ~ ProfileForm ~ user:", user);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.firstName || "",
      email: user?.emailAddresses[0].emailAddress || "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    if (!user) return null;
    updateUserName(user.id, data.name);
  }

  useEffect(() => {
    form.reset({
      name: user?.firstName || "",
      email: user?.emailAddresses[0].emailAddress || "",
    });
  }, [user]);

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
          disabled={true}
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
