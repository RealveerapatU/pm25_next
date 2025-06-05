import { NextResponse } from "next/server";
import { mysqlpool } from "../../../utils/server";
const db = mysqlpool.promise();
export async function PUT(request) {
  try {
    const { email, plan } = await request.json();
    const result = await db.query("UPDATE users SET plan = ? WHERE email = ?", [
      plan,
      email,
    ]);
    if (result[0].affectedRows > 0) {
      return NextResponse.json(
        { message: "Plan updated successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
