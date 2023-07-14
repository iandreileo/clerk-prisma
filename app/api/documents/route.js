import { auth } from "@clerk/nextjs";
import prisma from "../../lib/prisma";

export async function POST(request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const json = await request.json();
    // const body = createDocSchema.parse(json);

    const document = await prisma.documents.create({
      data: {
        publicId: "test1",
        title: "test1",
        ownerId: userId,
      },
    });

    return new Response(JSON.stringify(document));
  } catch (error) {
    console.log(error);
    return new Response(null, { status: 500 });
  }
}
