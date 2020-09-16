isProduction = process.env.NODE_ENV == "production";

module.exports = ({ env }) => ({
  ...(isProduction && {
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
    },
  }),
});
