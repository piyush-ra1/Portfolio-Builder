"use client";

import { ReactNode } from "react";
import Preloader from "@/components/ui/Preloader";
import CursorFollower from "@/components/ui/CursorFollower";
import PageTransition from "@/components/layout/PageTransition";

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <>
      <Preloader />
      <CursorFollower />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
