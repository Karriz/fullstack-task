# Books App

## Run with Docker

Run the application with Docker Compose:

```
docker compose up
```

The application will be available at http://localhost:3000/

## Backend

The back-end is a Django application with a SQLite database.

Install dependencies in Python virtual env and prepare the database:

```
cd backend
python -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
```

Run the application:

```
python manage.py runserver
```

The API can be accessed at http://localhost:8000/

## Frontend

The front-end is a React application with Bootstrap UI components.

Install dependencies:

```
cd frontend
npm install
```

Run the application:

```
npm run start
```

The application will be available at http://localhost:3000/

The front-end development server proxies the backend port 8000 to 3000, getting around cross-origin issues. This is configured in [package.json](frontend/package.json):

```
"proxy": "http://localhost:8000"
```

## Possible improvements
- Production server setup e.g. with Gunicorn and Nginx
- Using a database server, e.g. PostgreSQL or MariaDB instead of SQLite
- Consider setup.py for backend application
- Error message pop-ups in frontend
- Form validation, checking required fields in frontend
