from rest_framework.viewsets import ModelViewSet

from rest_framework.permissions import AllowAny

from books_api.models import Book
from books_api.serializers import BookSerializer

class BookViewSet(ModelViewSet):
    """
    ViewSet for books
    ModelViewSet provides default methods for GET, PUT, POST and DELETE
    """
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    permission_classes = [AllowAny]
