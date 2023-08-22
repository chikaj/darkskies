import { z } from 'zod';

export const uploadCsvSchema = z.custom<FileList>().superRefine((files, ctx) => {
    if (files.length === 0) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'File must be provided',
        })
        return false
    }

    if (
        !['image/webp', 'image/png', 'image/svg', 'image/jpg', 'image/jpeg'].includes(
            files[0].type
        )
    ) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'File must be a valid image type',
        })
        return false
    }

    if (files[0].size > 1024 * 1024 * 5) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'File must be less than 5MB',
        })
        return false
    }

    return true
});

export const loginUserSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(1, "Please enter a password")
});
export type LoginUserSchema = typeof loginUserSchema;