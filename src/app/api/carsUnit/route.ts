//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "../../../../prisma/client";

export async function GET() {
  //get all posts
  const cars = await prisma.carUnit.findMany();

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Unit Mobil",
      data: cars,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request: Request) {
  const { make, unitModel, year, engine, category } = await request.json();

  const carUnit = await prisma.carUnit.create({
    data: {
      unitModel: unitModel,
      make: make,
      year: year,
      engine: engine,
      category: category,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Create Data Cars",
      data: carUnit,
    },
    {
      status: 201,
    }
  );
}
