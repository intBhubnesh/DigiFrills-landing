"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationHandler({
  onNavigate,
}: {
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    onNavigate();
  }, [pathname, searchParams, onNavigate]);

  return null;
}
