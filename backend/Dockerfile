FROM python:3.9

RUN mkdir /books-backend
COPY . /books-backend
WORKDIR /books-backend

RUN pip install -r requirements.txt
RUN python manage.py migrate

CMD python manage.py runserver 0.0.0.0:8000
