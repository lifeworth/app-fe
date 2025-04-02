import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const response = await fetch("https://www.jianshu.com/asimov/trending/now");
  const json = await response.json();
  return NextResponse.json({
    code: 1,
    data: json,
  });
}
