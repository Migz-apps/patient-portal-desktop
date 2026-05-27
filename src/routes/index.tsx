import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediPort — Your medical records, truly yours" },
      { name: "description", content: "Portable, encrypted medical records you control. Share with any clinic via QR. Revoke anytime." },
      { property: "og:title", content: "MediPort — Your medical records, truly yours" },
      { property: "og:description", content: "Portable, encrypted medical records you control." },
    ],
  }),
  component: Landing,
});
