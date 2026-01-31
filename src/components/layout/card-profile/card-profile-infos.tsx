import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Building,
  Link,
  MapPin,
  ChevronDown,
  ChevronUp,
  Instagram,
  Twitter,
} from "lucide-react";
import { ComponentType, useMemo, useState } from "react";

type SocialsTypes = {
  provider: "instagram" | "x" | "tiktok";
  url: string;
};

type InfoItemsTypes = {
  icon: ComponentType<{ size?: number }>;
  value?: string;
  isLink: boolean;
};

interface ICardProfileInfosProps {
  company?: string;
  location?: string;
  blog?: string;
  socials: SocialsTypes[];
}

export function CardProfileInfos(props: ICardProfileInfosProps) {
  const { blog, company, location, socials } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const normalizeOptions = useMemo(() => {
    const socialIcons = {
      instagram: Instagram,
      x: Twitter,
      tiktok: Link,
    };

    const profile: InfoItemsTypes[] = [
      { icon: Building, value: company, isLink: false },
      { icon: MapPin, value: location, isLink: false },
      { icon: Link, value: blog, isLink: true },
    ];

    const socialAccounts =
      socials?.map(({ provider, url }) => ({
        icon: socialIcons[provider as keyof typeof socialIcons] || Link,
        value: url,
        isLink: true,
      })) || [];

    return [...profile, ...socialAccounts].filter(({ value }) =>
      Boolean(value),
    );
  }, [company, location, blog, socials]);

  if (normalizeOptions.length === 0) return null;

  const InfoList = () => (
    <ul className="mt-1 flex flex-col gap-2 w-full text-[#0587FF] text-sm bg-[#F8F8F8] xl:bg-white p-4 rounded-3xl">
      {normalizeOptions.map((info) => {
        if (info.value) {
          return (
            <li key={info.value} className="flex gap-2 text-sm">
              <info.icon size={16} />
              {info.isLink ? (
                <a
                  href={info.value}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-ellipsis truncate"
                >
                  {info.value}
                </a>
              ) : (
                <span>{info.value}</span>
              )}
            </li>
          );
        }
        return null;
      })}
    </ul>
  );

  return (
    <>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full xl:hidden">
        <CollapsibleTrigger asChild>
          <button
            className="w-full flex flex-col justify-center items-center text-sm text-[#0587FF]"
            aria-label={isOpen ? "Esconder informações" : "Expandir informações"}
          >
            <p>Informações adicionais</p>
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <InfoList />
        </CollapsibleContent>
      </Collapsible>
      <div className="hidden xl:block"><InfoList /></div>
    </>
  );
}
