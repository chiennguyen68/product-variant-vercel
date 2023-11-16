"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "../../ui/button";
import { useRouter } from "next/router";

const UserDropdown = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="zIndex-999 border-0 p-[25px] bg-transparent"
            variant="outline"
          >
            <a className="text-blueGray-500 block">
              <div className="items-center flex">
                <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                  <img
                    alt="..."
                    className="w-full rounded-full align-middle border-none shadow-lg"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
                  />
                </span>
              </div>
            </a>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-white">
          <div className="grid gap-4 ">
            <div className="space-y-2" onClick={handleClick}>
              <h4 className="font-medium leading-none cursor-pointer ">
                Logout
              </h4>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default UserDropdown;
