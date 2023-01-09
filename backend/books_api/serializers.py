from rest_framework.serializers import ModelSerializer

from books_api.models import Book

class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'description']
