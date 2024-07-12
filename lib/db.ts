import mongoose, { Mongoose } from "mongoose";

const uri = process.env.MONGO_URI!;

interface MongooseConn {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = {
        conn: null,
        promise: null,
    };
}

export const connect = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        console.log("Establishing new connection to MongoDB...");
        cached.promise = mongoose.connect(uri, {
            dbName: 'Blog-App',
            bufferCommands: false,
            connectTimeoutMS: 30000,
        }).catch(error => {
            console.error("MongoDB connection error:", error);
            throw error;
        });
    }

    try {
        cached.conn = await cached.promise;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }

    return cached.conn;
};
