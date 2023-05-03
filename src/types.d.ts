export interface Subscriber {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
}

export type SubscriberFromApi = Array<{
  nick: string;
  months: number;
  profileUrl: string;
  description?: string;
}>;
