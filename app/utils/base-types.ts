export type TimelineUnit = "week" | "month";

export type Post = {
  week?: number;
  month?: number;
  title: string;
  date: string;
  summary: string;
  url: string;
  tags: string[];
};

export type Project = {
  id: number;
  name: string;
  timelineUnit: TimelineUnit;
  totalUnits: number;
  periodLabels?: string[];
  posts: Post[];
};
