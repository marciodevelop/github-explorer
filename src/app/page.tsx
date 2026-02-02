"use client";

import { CardProfile } from "@/components/card-profile";
import { ReposTabs } from "@/features/repos/components/repos-tabs";
import { useGithubProfile } from "@/hooks/use-github-profile";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { userNameStore } from "@/store/user-name-store";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getUser } from "@/services/github";

const usernameSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, "informa o nome de um usuário")
    .regex(/^[a-zA-Z0-9-]+$/, "Use apenas letras, números e hífen."),
});

type UserNameForm = z.infer<typeof usernameSchema>;

export default function Home() {
  const { setUserName, userName } = userNameStore();

  const [open, setOpen] = useState<boolean>(!userName);

  const { data, isLoading, isError } = useGithubProfile(userName);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UserNameForm>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: userName,
    },
    mode: "onSubmit",
  });

  async function onSubmit({ username }: UserNameForm) {
    const usernameData = username.trim();

    try {
      await getUser(usernameData);
      if (usernameData) {
        setUserName(usernameData);
        setOpen(false);
      }
    } catch {
      setError("username", {
        type: "validate",
        message: "usuário não encontrado",
      });
    }
  }

  if (isLoading) return <p>Carregando dados...</p>;
  if (isError) return <p>Error ao carregar dados!</p>;

  return (
    <section className="flex flex-col items-center gap-10 md:gap-30 xl:gap-30 xl:flex-row md:flex-row xl:items-start md:items-start">
      {data && (
        <CardProfile.Root>
          <CardProfile.Avatar url={data?.avatar_url} />
          <CardProfile.Bio name={data.name} bio={data.bio} />
          <CardProfile.Infos
            company={data.company}
            location={data.location}
            blog={data.blog}
            socials={data.social_accounts}
          />
        </CardProfile.Root>
      )}
      <div className="flex w-full justify-center md:justify-start xl:justify-start">
        {data && <ReposTabs />}
        <Dialog open={open ?? !data} onOpenChange={() => setOpen(!open)}>
          <DialogTrigger asChild>
            <button
              className="top-20 right-2 absolute py-2 px-8 rounded-lg bg-primary text-sm text-white"
              type="button"
            >
              Carregar um usuário
            </button>
          </DialogTrigger>
          <DialogContent className="p-12">
            <DialogHeader>
              <DialogTitle>Carregue um usuário</DialogTitle>
            </DialogHeader>
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                {...register("username")}
                className="bg-gray-50 h-10 rounded-lg outline-none px-6 focus-visible:border transition"
                placeholder="nome do usuário"
                autoFocus
              />
              {errors.username && (
                <p className="text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-10 rounded-lg bg-primary text-white disabled:opacity-60 disabled:bg-gray-500"
              >
                {isSubmitting ? "Validando..." : "Carregar usuário"}
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
