import { z } from 'zod'

export const EmailLabelSchema = z.enum(['Home', 'Work', 'Other'])
