import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../utils/connect";

// GET SINGLE PRODUCT
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    const product = await prisma?.product.findUnique({
      where: {
        id: id,
      },
    });
    return new NextResponse(JSON.stringify(product));
  } catch (error) {
    console.error(error);
    return new NextResponse("something went wrong", { status: 500 });
  }
};
