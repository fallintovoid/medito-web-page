"use client";

import { ErrorPage } from "@/modules/ErrorPage";

export const runtime = "edge";

export default function NotFound({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorPage error={error} reset={reset} />;
}
