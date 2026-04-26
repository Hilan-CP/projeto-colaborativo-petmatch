import { t } from "elysia";

export const OngBodyParse = t.Object({
	cnpj: t.String({ minLength: 14, maxLength: 14 }),
	razaoSocial: t.String({ maxLength: 255 }),
	nomeFantasia: t.String({ maxLength: 255 }),
	telefone: t.String({ minLength: 10, maxLength: 11 }),
	whatsapp: t.Optional(t.String({ minLength: 12, maxLength: 13 })),
	email: t.String({ maxLength: 255, format: "email" }),
	site: t.Optional(t.String({ maxLength: 255 })),
	instagram: t.String({ maxLength: 255 }),
	urlImagem: t.String(),
	cep: t.String({ minLength: 8, maxLength: 8 }),
	uf: t.String({ minLength: 2, maxLength: 2 }),
	cidade: t.String({ maxLength: 255 }),
	bairro: t.String({ maxLength: 255 }),
	logradouro: t.String({ maxLength: 255 }),
	numero: t.Numeric(),
});

export const OngQueryParamsParse = t.Object({
	cnpj: t.Optional(t.String()),
	razaoSocial: t.Optional(t.String()),
	nomeFantasia: t.Optional(t.String()),
	telefone: t.Optional(t.String()),
	whatsapp: t.Optional(t.String()),
	email: t.Optional(t.String()),
	site: t.Optional(t.String()),
});

export const OngListResponse = t.Array(
	t.Object({
		id: t.String(),
		nomeFantasia: t.String(),
		urlImagem: t.String(),
		cidade: t.String(),
		estado: t.String(),
		telefone: t.String(),
		email: t.String(),
	}),
);

export const OngResponse = t.Object({
	id: t.String(),
	cnpj: t.String(),
	razaoSocial: t.String(),
	nomeFantasia: t.String(),
	telefone: t.String(),
	whatsapp: t.Union([t.String(), t.Null()]),
	email: t.String(),
	site: t.Union([t.String(), t.Null()]),
	instagram: t.String(),
	urlImagem: t.String(),
	cep: t.String(),
	uf: t.String(),
	cidade: t.String(),
	bairro: t.String(),
	logradouro: t.String(),
	numero: t.Number(),
	userId: t.String(),
	createdAt: t.Date(),
	updatedAt: t.Date(),
});
