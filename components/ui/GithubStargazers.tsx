import { useEffect, useState } from "preact/hooks";

export interface Props {
  stargazers_count: number;
}

export const fetchRepo = async (repo: string): Promise<Props> => {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar os dados do repositório");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export interface GithubStargazesProps {
  /** @title Github Stars */
  /** @description example: add deco-cx/deco here */
  repo?: string;
}

export default function GithubStargazes(
  { repo }: GithubStargazesProps,
) {
  const [repoData, setRepoData] = useState<Props | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (repo) {
      fetchRepo(repo)
        .then((data) => {
          setRepoData(data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [repo]);

  return (
    <>
      {loading || !repoData ? null : (
        <>
          ⭐ {repoData.stargazers_count}
        </>
      )}
    </>
  );
}
