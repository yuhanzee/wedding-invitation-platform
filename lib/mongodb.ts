// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable");
// }

// let cached = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = {
//     conn: null,
//     promise: null,
//   };
// }

// async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose
//   .connect(MONGODB_URI, {
//     serverSelectionTimeoutMS: 10000, // Timeout after 10s
//     family: 4, // Force IPv4
//   })
//   .then((db) => {
//     console.log("✅ Connected to MongoDB");
//     return db;
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB Connect Error");
//     console.error(err);
//     throw err;
//   });
//   }

//   cached.conn = await cached.promise;

//   return cached.conn;
// }

// export default connectDB;

// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// type MongooseCache = {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// };

// declare global {
//   var mongooseCache: MongooseCache | undefined;
// }

// const cached: MongooseCache =
//   global.mongooseCache ?? {
//     conn: null,
//     promise: null,
//   };

// if (!global.mongooseCache) {
//   global.mongooseCache = cached;
// }

// export default async function connectDB() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       bufferCommands: false,
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (error) {
//     cached.promise = null;

//     console.error("MongoDB connection error:", error);

//     throw error;
//   }

//   return cached.conn;
// }


import mongoose from "mongoose";

/* =========================================
   MONGODB ENVIRONMENT VARIABLE
========================================== */

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "MONGODB_URI environment variable is not defined."
  );
}

/* =========================================
   MONGOOSE CACHE TYPE
========================================== */

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

/* =========================================
   GLOBAL MONGOOSE CACHE

   Prevents multiple MongoDB connections
   during Next.js hot reloads.
========================================== */

declare global {
  var mongooseCache: MongooseCache | undefined;
}

/* =========================================
   GET OR CREATE CACHE
========================================== */

const cached: MongooseCache =
  global.mongooseCache ?? {
    conn: null,
    promise: null,
  };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

/* =========================================
   CONNECT TO MONGODB
========================================== */

export default async function connectDB() {
  /* =======================================
     RETURN EXISTING CONNECTION
  ======================================== */

  if (cached.conn) {
    return cached.conn;
  }

  /* =======================================
     CREATE NEW CONNECTION PROMISE
  ======================================== */

  if (!cached.promise) {
    cached.promise = mongoose.connect(
      MONGODB_URI as string,
      {
        bufferCommands: false,
      }
    );
  }

  /* =======================================
     WAIT FOR CONNECTION
  ======================================== */

  try {
    cached.conn = await cached.promise;

    return cached.conn;
  } catch (error) {
    /* Reset the promise if connection fails */

    cached.promise = null;

    console.error(
      "MongoDB connection error:",
      error
    );

    throw error;
  }
}