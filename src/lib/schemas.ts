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
export type UploadCsvSchema = typeof uploadCsvSchema;

export const registerUserSchema = z
    .object({
        full_name: z
            .string()
            .max(140, "Name must be 140 characters or less")
            .nullish(),
        email: z
            .string()
            .email("Invalid email address"),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(64, "Password must be 64 characters or less"),
        passwordConfirm: z
            .string()
            .min(6, "Password must be at least 6 characters")
            .max(64, "Password must be 64 characters or less"),
});
export type RegisterUserSchema = typeof registerUserSchema;

export const loginUserSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(1, "Please enter a password")
});
export type LoginUserSchema = typeof loginUserSchema;