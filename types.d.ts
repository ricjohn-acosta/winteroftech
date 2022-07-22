export interface Projects {
  projects: {
    id: number;
    name: string;
    description: string;
    users: Users[];
    maxMembers: number;
    techStack: string[];
    phase: string;
    isVisible: boolean;
  }[];
}

export interface Users {
  id: number;
  name: string;
  type: string;
  email: string;
}
