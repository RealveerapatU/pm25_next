import { NextResponse } from "next/server";
import { mysqlpool } from "../../../utils/server";
const db = mysqlpool.promise();
export async function POST(request) {
  try {
    const { email } = await request.json();
    const result = await db.query("SELECT * FROM users WHERE email=?", [email]);
    return NextResponse.json(
      { message: "User retrieved successfully", user: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
