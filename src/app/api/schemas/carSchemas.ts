import { z } from "zod";

export const carSchema = z.object({
  carUnitId: z.string().uuid(),
  no_police: z.string().min(3),
  color: z.string(),
  price: z.number().positive(),
  status: z.enum(["Available", "Sold", "Reserved"]).optional(),
  vin: z.string().min(5).optional(),
});
