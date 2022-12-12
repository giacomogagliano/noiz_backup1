import { RestEndpointMethodTypes } from "@octokit/rest";

export interface GetAuthenticatedUser {
  status: number;
  url: string;
  headers: Headers;
  data: Data;
}

export interface Headers {
  "access-control-allow-origin": string;
  "access-control-expose-headers": string;
  "cache-control": string;
  connection: string;
  "content-encoding": string;
  "content-security-policy": string;
  "content-type": string;
  date: string;
  etag: string;
  "last-modified": string;
  "referrer-policy": string;
  server: string;
  "strict-transport-security": string;
  "transfer-encoding": string;
  vary: string;
  "x-accepted-oauth-scopes": string;
  "x-content-type-options": string;
  "x-frame-options": string;
  "x-github-media-type": string;
  "x-github-request-id": string;
  "x-oauth-scopes": string;
  "x-ratelimit-limit": string;
  "x-ratelimit-remaining": string;
  "x-ratelimit-reset": string;
  "x-ratelimit-resource": string;
  "x-ratelimit-used": string;
  "x-xss-protection": string;
}

export interface Data {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User" | "Organization" | string;
  site_admin: boolean;
  name: string;
  company: any;
  blog: string;
  location: any;
  email: string;
  hireable: any;
  bio: any;
  twitter_username: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;
  plan: Plan;
}

export interface Plan {
  name: string;
  space: number;
  collaborators: number;
  private_repos: number;
}

export type gooo =
  RestEndpointMethodTypes["users"]["getAuthenticated"]["response"];

export type GitHubUserBasic = Pick<
  GetAuthenticatedUser["data"],
  | "id"
  | "name"
  | "login"
  | "avatar_url"
  | "url"
  | "html_url"
  | "organizations_url"
  | "type"
>;
