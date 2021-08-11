module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      upload: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: env("AKIARRHC7ER4JQWACZHI"),
          secretAccessKey: env("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"),
          region: env("us-west-1"),
          params: {
            Bucket: env("f-portfolio-backend"),
          },
        },
      },
    };
  }

  return {};
};
