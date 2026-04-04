export type Post = {
  week: number;
  title: string;
  date: string;
  summary: string;
  url: string;
  tags: string[];
};

export type Project = {
  id: number;
  name: string;
  totalWeeks: 16;
  posts: Post[];
};
