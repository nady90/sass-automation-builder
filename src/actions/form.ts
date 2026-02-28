"use server";
import prisma from "@/lib/prisma";

export async function updateUserName(userId: string, name: string) {
  const res = await prisma.user.update({
    where: {
      userId,
    },
    data: {
      name,
    },
  });
}

export async function getProfileImage(userId: string) {
  const res = await prisma.user.findUnique({
    where: {
      userId,
    },
    select: {
      profileImage: true,
    },
  });

  return res;
}

export async function updateProfileImage(userId: string, profileUrl: string) {
  // TODO: Check if user is logged in.
  // TODO: try/catch error handeling.

  await prisma.user.update({
    where: {
      userId: userId,
    },
    data: {
      profileImage: profileUrl,
    },
  });
}

export async function removeProfileImage(userId: string) {
  // TODO: Check if user is logged in.
  // TODO: try/catch error handeling.

  const res = await prisma.user.update({
    where: {
      userId,
    },
    data: {
      profileImage: "",
    },
  });

  return res;
}
