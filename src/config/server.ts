import "server-only";

export const TOKEN_SECRET = new TextEncoder().encode(process.env.TOKEN_SECRET);
