"use client";

import React, { useEffect, useState } from "react";

import s from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { IDonatedUser } from "@/types/donatedUser";
import { Oval } from "react-loader-spinner";

const NotificationBar = () => {
  const [lastDonatedUser, setLastDonatedUser] = useState<IDonatedUser>();
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/checkout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res.sessionsList as IDonatedUser[];
        setIsLoading(false);
        setLastDonatedUser(data[0]);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (pathname === "/success") {
    return null;
  }
  return (
    <div className={s.bar}>
      {isLoading && <Oval width={18} height={18} />}
      {!isLoading && (
        <>
          {lastDonatedUser?.name} has donated {lastDonatedUser?.value}$!
        </>
      )}
    </div>
  );
};

export default NotificationBar;
