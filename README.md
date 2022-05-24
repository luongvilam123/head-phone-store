# Cài đặt Ecommerce React Application dùng NextJs

1. Thực hiện câu lệnh bên dưới terminal như sau : npx create-next-app.

2. Tiến hành cài đặt các dependencies cho project :
"dependencies": {
      "@babel/preset-react": "^7.16.7",
     "@sanity/client": "3.2.0",
     "@sanity/image-url": "1.0.1",
     "@stripe/stripe-js": "1.25.0",
     "canvas-confetti": "1.5.1",
     "next": "12.1.0",
     "next-sanity-image": "3.2.1",
     "react": "17.0.2",
     "react-dom": "17.0.2",
     "react-hot-toast": "2.2.0",
     "react-icons": "4.3.1",
     "stripe": "8.209.0"
    },
3. Thực hiện câu lệnh : npm install --legacy-peer-deps để cài đặt đúng các phiên bản hiện tại.

4. Thực hiện câu lệnh npm run dev để tiến hành chạy app.

5. Sanity setup bằng lệnh : npm install -g @sanity/cli
6. gitignore : bỏ dấu / trước node_modules bên trong folder ecommerce.
7. Các lệnh khác như sanity manage và sanity start để tương tác.
8. Thêm "@babel/preset-react" trong file babelrc để tránh bị lỗi jsx không enabled. Chạy câu lệnh npm install --save-dev @babel/preset-react để tiến hành cài đặt.
