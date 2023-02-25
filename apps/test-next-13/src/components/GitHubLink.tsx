type Props = {
  org: string;
  repo: string;
  id: string;
};
export const GitHubLinks = ({ org, repo, id }: Props) => {
  function makeImgShieldGithubStartPath(org: string, repo: string) {
    return `https://img.shields.io/github/stars/${org}/${repo}?label=Star&style=social`;
  }
  function makeGitHubLink(org: string, repo: string) {
    return `https://github.com/${org}/${repo}`;
  }
  function makeGithubLinks(
    type: "repo" | "img-shields-star",
    org: string,
    repo: string
  ) {
    if (type === "repo") return makeGitHubLink(org, repo);
    else return makeImgShieldGithubStartPath(org, repo);
  }
  const href = makeGithubLinks("repo", org, repo);
  const src = makeGithubLinks("img-shields-star", org, repo);

  return (
    <div id={id}>
      <a href={href} target="_blank">
        <img id="github-stars" alt="Star Umbrel on GitHub" src={src}></img>
      </a>
    </div>
  );
};
