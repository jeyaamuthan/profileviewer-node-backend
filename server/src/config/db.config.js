module.exports = {
    HOST : process.env.DATABASE_HOST || 'localhost',
    USER:process.env.DATABASE_USER || "root",
    PASSWORD:process.env.DATABASE_PASSWORD || "Beyondm@6",
    DB:process.env.DATABASE_NAME || "test_db",
    dialect: "mysql",
    PORT:process.env.PORT || 3306
   
  };