import { z } from 'zod';

export const profileSchema = z.object({
  firstname: z.string().min(3),
  lastname: z.string().min(3),
  gender: z.string().min(4).max(6), // Assuming 'male', 'female', 'other'
  age: z.coerce.number().int().positive(),
  height: z.coerce.number().positive(),
  weight: z.coerce.number().positive(),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  mealpreference: z.string(),
  allergies: z.array(z.string()),
  healthconditions: z.array(z.string()),
  weightgoal: z.string(),
  activitylevel: z.string(),
  workoutdays: z.array(z.string()),
  workouttime: z.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/), // Assuming HH:MM format for 24-hour time
});


export type ProfileFormValues = z.infer<typeof profileSchema>;
