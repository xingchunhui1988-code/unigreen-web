import { S3Storage } from "coze-coding-dev-sdk";
import { execSync } from "child_process";
import { readFileSync } from "fs";

async function main() {
  // 初始化存储
  const storage = new S3Storage({
    endpointUrl: process.env.COZE_BUCKET_ENDPOINT_URL,
    accessKey: "",
    secretKey: "",
    bucketName: process.env.COZE_BUCKET_NAME,
    region: "cn-beijing",
  });

  // 打包项目（排除 node_modules, .next, .git）
  console.log("正在打包项目...");
  execSync(
    "tar --exclude='node_modules' --exclude='.next' --exclude='.git' -czvf /tmp/unigreen-website.tar.gz .",
    { cwd: "/workspace/projects" }
  );

  // 读取打包文件
  const fileContent = readFileSync("/tmp/unigreen-website.tar.gz");

  // 上传到对象存储
  console.log("正在上传到对象存储...");
  const key = await storage.uploadFile({
    fileContent: fileContent,
    fileName: "unigreen-website.tar.gz",
    contentType: "application/gzip",
  });

  console.log("上传成功，key:", key);

  // 生成下载链接（有效期7天）
  const downloadUrl = await storage.generatePresignedUrl({
    key: key,
    expireTime: 604800, // 7天
  });

  console.log("\n========================================");
  console.log("下载链接（7天内有效）:");
  console.log(downloadUrl);
  console.log("========================================\n");
}

main().catch(console.error);
