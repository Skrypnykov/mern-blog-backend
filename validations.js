import { body } from "express-validator";

export const loginValidation = [
  body("email", "Неправильний формат пошти").isEmail(),
  body("password", "Пароль має бути не менше 8 символів").isLength({ min: 8 }),
];

export const registerValidation = [
  body("email", "Неправильний формат пошти").isEmail(),
  body("password", "Пароль має бути не менше 8 символів").isLength({ min: 8 }),
  body("fullName", "Вкажіть ім'я").isLength({ min: 3 }),
  body("avatarUrl", "Неправильне посилання на аватар").optional().isURL(),
];

export const postGreateValidation = [
  body("title", "Введіть заголовок статті").isLength({ min: 3 }).isString(),
  body("text", "Введіть текст статті").isLength({ min: 10 }).isString(),
  body("tags", "Неправильний формат тегів").optional().isString(),
  body("imageUrl", "Неправильне посилання на зображення").optional().isString(),
];
