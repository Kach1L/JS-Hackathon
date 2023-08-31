from django.urls import path
from .views import OptionList, OptionDetail,Option_all,Option_create,Option_update,Option_delete,extras
# shop,bulk_insert

urlpatterns = [
    path('options/', OptionList.as_view(), name='option-list'),
    path('options/<int:pk>/', OptionDetail.as_view(), name='option-detail'),
    path('options/all/', Option_all, name='option-all'),
    path('options/create/', Option_create, name='option-create'),
    path('options/update/<int:pk>/', Option_update, name='option-update'),
    path('options/delete/<int:pk>/', Option_delete, name='option-delete'),
    # path('shop', shop, name='shop'),
    # path('bulk-insert/', bulk_insert, name='bulk-insert'),
    path('extras/', extras, name='countries')
]