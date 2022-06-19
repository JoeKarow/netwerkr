import * as z from "zod"
import * as imports from "../../lib/zod-prisma"

export const netwerkrModel = z.object({
  id: z.string(),
})
