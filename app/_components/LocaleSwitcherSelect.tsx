"use client";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import clsx from "clsx";
import { Locale } from "next-intl";
import { useParams } from "next/navigation";
import { ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={(value: string) => {
        const nextLocale = value as Locale;
        startTransition(() => {
          router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            { pathname, params },
            { locale: nextLocale }
          );
        });
      }}
    >
      <SelectTrigger
        className={clsx(
          "max-w-[100px] p-0 inset-0 h-auto bg-transparent border-none shadow-none text-lg focus:ring-0 focus:outline-none text-inherit",
          isPending && "opacity-50"
        )}
      >
        <SelectValue placeholder={label} className="text-inherit" />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
}
