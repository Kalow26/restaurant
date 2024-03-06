import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    const body = await req.json();
    await prisma?.order.update({
      where: {
        id: id,
      },
      data: { status: body },
    });
    return new NextResponse("Order has been updated", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("something wen wrong", { status: 500 });
  }
};
