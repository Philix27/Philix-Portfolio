"use client";
import { useRouter } from "next/navigation";

type IPage = "/blogs" | "/" | "/courses" | "/project" | "contact";
export const useAppRouter = () => {
  const router = useRouter();

  function routeHandler(params: IPage) {
    router.push(params);
  }

  return { routeHandler, router };
};
