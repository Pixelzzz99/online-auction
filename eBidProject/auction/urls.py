from django.urls import path
from .views import create_listing, get_listings, get_listing, add_product

urlpatterns = [
    path("add_product/", add_product, name="add_product"),
    path("create/", create_listing, name="create_listing"),
    path("listings/", get_listings, name="get_listings"),
    path("listings/<int:pk>/", get_listing, name="get_listing"),
]
