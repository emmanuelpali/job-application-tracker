  export interface jobAppEntry {
    id: number;
    date: string;
    position: string;
    company: string;
    response: string;
  }

  export type NewJobApp = Omit<jobAppEntry, 'id'>;