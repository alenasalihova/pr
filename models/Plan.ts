export interface Plan {
  id: number;
  title: string;
  description: string;
  userId: number;
  planType: string;
}

export interface CreatePlanInput {
  title: string;
  description: string;
  userId: number;
  planType: string;
}