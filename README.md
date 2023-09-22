## Installation Guides

1. **Clone this repository to your local machine**

    Using SSH:

    `git clone git@github.com:malvinval/okoce-frontend.git`

    or using HTTPS:

    `https://github.com/malvinval/okoce-frontend.git`

2. **Go to the project directory**

    `cd <directory_name>`

3. **Install dependencies**

    `npm install`

4. **Create folder named `dist`**

5. **Build Tailwind**

    `npx tailwindcss -i ./css/input.css -o ./dist/output.css --watch`

6. **Deploy on localhost**

    You can use Live Server extension to deploy this app.
    Install, start it at port 5500, then go to `127.0.0.1:5500`