module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '60f25cb9c0fb092f68e7a58da1449706'),
  },
});
