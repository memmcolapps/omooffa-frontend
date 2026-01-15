import { createRouteHandler } from "uploadthing/next";
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

const ourFileRouter = {
  profilePicture: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      return { userId: "user" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);

      return { uploadedBy: metadata.userId };
    }),
};

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
