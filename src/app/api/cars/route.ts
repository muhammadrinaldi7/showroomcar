//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "../../../../prisma/client";
import { carSchema } from "../schemas/carSchemas";

export async function GET() {
  //get all posts
  const cars = await prisma.car.findMany({
    include: {
      carUnit: true,
    },
  });

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Cars",
      data: cars,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request: Request) {
  try {
    const { carUnitId, no_police, color, price, status, vin } =
      await request.json();
    const parsed = carSchema.safeParse({
      carUnitId,
      no_police,
      color,
      price,
      status,
      vin,
    });
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation Error",
          message: parsed.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }
    const data = parsed.data;
    const existingCar = await prisma.car.findUnique({
      where: {
        no_police: data.no_police,
      },
    });
    if (existingCar) {
      return NextResponse.json(
        {
          error: "Car already exists",
          message: `Car with no_police ${data.no_police} already exists`,
        },
        {
          status: 400,
        }
      );
    }
    const newCar = await prisma.car.create({
      data: data,
    });
    return NextResponse.json(
      {
        success: true,
        message: "Create Data Cars",
        data: newCar,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to create car",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}
