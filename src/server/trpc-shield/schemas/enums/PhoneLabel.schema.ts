import { z } from 'zod'

export const PhoneLabelSchema = z.enum(['Home', 'Work', 'Mobile', 'Other'])
