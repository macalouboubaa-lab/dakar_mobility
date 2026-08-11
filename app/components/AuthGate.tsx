"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabaseClient";

export default function AuthGate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
