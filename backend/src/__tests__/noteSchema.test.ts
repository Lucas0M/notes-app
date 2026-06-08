import { createNoteSchema } from "../schemas/noteSchema";

describe("createNoteSchema", () => {
  it("should pass with valid data", () => {
    const result = createNoteSchema.safeParse({
      title: "My first note",
      content: "This is the content",
    });
    expect(result.success).toBe(true);
  });

  it("should validate empty title", () => {
    const result = createNoteSchema.safeParse({
      title: "",
      content: "This is the content",
    });
    expect(result.success).toBe(false);
  });

  it("should validate title with more 100 characters", () => {
    const result = createNoteSchema.safeParse({
      title: "a".repeat(101),
      content: "This is the content",
    });
    expect(result.success).toBe(false);
  });

  it("should fail with empty content", () => {
    const result = createNoteSchema.safeParse({
      title: "This is the title",
      content: "",
    });
    expect(result.success).toBe(false);
  });
});
