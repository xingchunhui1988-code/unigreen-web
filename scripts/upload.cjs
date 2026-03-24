const { S3Storage } = require("coze-coding-dev-sdk");
const fs = require("fs");

async function main() {
  const storage = new S3Storage({
    endpointUrl: process.env.COZE_BUCKET_ENDPOINT_URL,
    accessKey: "",
    secretKey: "",
    bucketName: process.env.COZE_BUCKET_NAME,
    region: "cn-beijing",
  });

  const fileContent = fs.readFileSync("/tmp/unigreen-website.tar.gz");

  console.log("正在上传项目文件...");
  const key = await storage.uploadFile({
    fileContent: fileContent,
    fileName: "unigreen-website.tar.gz",
    contentType: "application/gzip",
  });

  console.log("上传成功:", key);

  const downloadUrl = await storage.generatePresignedUrl({
    key: key,
    expireTime: 604800,
  });

  console.log("\n========================================");
  console.log("项目下载链接:");
  console.log(downloadUrl);
  console.log("========================================\n");
}

main().catch(console.error);
