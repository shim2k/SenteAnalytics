import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title:
    "FileID",
  description: "Protect your digital assets",
};

export default function Home() {
  redirect('/dashboard/overview')
  return (
    <></>
  );
}
