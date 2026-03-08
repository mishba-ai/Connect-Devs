export type Status = 'open' | 'on_hold' | 'in_progress'|  "closed"
export interface StatusConfigTypes {
  colorClass: string;
  bgColorClass: string;
  text: string;
}
// export type ProjectType = 'hackathon project' | 'side project';
export interface PairCardProps {
  id: number
  project_title: string
  tags: string
  project_thumbnail: string
  description: string
  category_tags: { id: number; name: string; slug: string }[]
  skilled_tags:  { id: number; name: string; slug: string }[]
  looking_for:   { id: number; name: string; slug: string }[]
  created_at: string
  updated_at: string
}