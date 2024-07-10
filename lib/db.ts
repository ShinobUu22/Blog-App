import mongoose,{Mongoose} from "mongoose"



const uri = process.env.MONGO_URI!;

interface MongooseConn { 
    conn:Mongoose | null;
    promise: Promise<Mongoose>;}


let cached:any =(global as any).mongoose


if(!cached){
    cached = (global as any).mongoose={
        conn:null,
        promise:null
    }
}


export const connect = async()=>{
    if(cached.conn) return cached.conn

    cached.promise = cached.promise || mongoose.connect(uri,{
        dbName:'Blog',
        bufferCommands:false,
        connectTimeoutMS: 30000,
    })
    cached.conn = await cached.promise;
    return cached.conn
}

