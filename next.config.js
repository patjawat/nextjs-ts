/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    DATABASE_URL:"mongodb://127.0.0.1:27017/next_todo_list",
    API_URL:"http://localhost:3000/api/todos"
  }
}

module.exports = nextConfig
