import request from "supertest";
import app from "../app";
import prisma from "../prisma";

jest.mock("../prisma", () => ({
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
}));

describe("POST /auth/register", () => {
  it("should return 400 if data is invalid", async () => {
    const response = await request(app).post("/auth/register").send({
      email: "invalid-email",
      password: "123",
    });

    expect(response.status).toBe(400);
  });
  it("should return error if email is invalid", async () => {
    const response = await request(app).post("/auth/register").send({
      email: "alalalala",
      password: "12345678",
    });

    expect(response.body).toEqual(
      expect.objectContaining({
        error: "Validate error",
      }),
    );
  });

  it("should return 201 if when register is sucessful", async () => {
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);
    (prisma.user.create as jest.Mock).mockResolvedValue({
      id: "1",
      email: "test@email.com",
    });

    const response = await request(app).post("/auth/register").send({
      email: "test@email.com",
      password: "123456",
    });

    expect(response.status).toBe(201);
  });
});

describe("POST /auth/login", () => {
  it("should return 400 if data is invalid", async () => {
    const response = await request(app).post("/auth/login").send({
      email: "ADSJaoSDJI",
      password: "111",
    });

    expect(response.status).toBe(400);
  });

  it("should return 401 if user doesnt found", async () => {
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

    const response = await request(app).post("/auth/login").send({
      email: "aaaa@gmail.com",
      password: "12345555",
    });

    expect(response.status).toBe(401);
  });
});
