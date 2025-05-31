import { NextResponse } from "next/server";
import { mysqlpool } from "../../utils/server";
export async function GET(request) {
  try {
    return NextResponse.json({ message: "API is working" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
