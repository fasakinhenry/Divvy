import Image from "@/components/Image";
import { useTheme } from "@/providers/themeContext";
import { Icon } from "@iconify/react";
import { useState } from "react";
import TopnavActions from "./TopnavActions";


export default function TopNav() {
  const { theme, setTheme } = useTheme();
  const [actions, showActions] = useState<boolean>(false);
  let full_name = "Franklin";
  let email = "franklin@email.com";

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleActionsToggle = () => {
    showActions((prev) => !prev);
  };

  return (
    <div className="absolute top-0 left-0 z-50 w-full px-12 py-3 bg-white text-black flex items-center justify-between">
      <h1>Divvy</h1>

      <aside className="flex items-center gap-6">
        <Icon icon="basil:notification-on-outline" width={24} height={24} />
        <Icon role="button" icon={theme === "dark" ? "noto-v1:sun" : "logos:moon"} width={24} height={24} onClick={handleToggle} className="cursor-pointer" />

        <span
          // role="button"
          // aria-describedby="button"
          className="relative flex items-center gap-4 cursor-pointer"
          onClick={handleActionsToggle}
        >
          <Image src="/avatar.svg" alt="Avatar" width={48} height={48} className="rounded-full" />
          <span className="flex flex-col">
            <h3>{full_name}</h3>
            <p className="opacity-65">{email}</p>
          </span>
          <Icon icon="line-md:chevron-down" width={24} height={24} />
        </span>
      </aside>

      <TopnavActions
        show={actions}
        setShow={handleActionsToggle}
      />
    </div>
  )
}
