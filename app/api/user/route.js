import dbConn from "@/utils/dbConn";
import User from "@/models/user";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConn();

        await User.create(body);

        const res = await User.find({email:body.email});

        return NextResponse.json({
            res
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}