import React from "react";

import s from "./styles.module.scss";
import Button from "@/UI/Button";
import Link from "next/link";

const Page = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <main className={s.page}>
      <h1>An error was thrown</h1>
      <p>Digest: {error.digest}</p>
      <Button onClick={() => reset()} style={{ width: "fit-content" }}>
        Try again
      </Button>
    </main>
  );
};

export default Page;
