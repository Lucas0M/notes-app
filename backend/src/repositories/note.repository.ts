import prisma from "../prisma";

type CreateNoteInput = {
  title: string;
  content: string;
  userId: number;
};

type UpdateNoteInput = {
  title?: string;
  content?: string;
};

export const noteRepository = {
  findById: async (id: number) => {
    return prisma.note.findUnique({ where: { id } });
  },
  findAllByUser: async (userId: number) => {
    return prisma.note.findMany({ where: { userId } });
  },
  create: async (data: CreateNoteInput) => {
    return prisma.note.create({ data });
  },
  update: async (id: number, data: UpdateNoteInput) => {
    return prisma.note.update({ where: { id }, data });
  },
  delete: async (id: number) => {
    return prisma.note.delete({ where: { id } });
  },
};
