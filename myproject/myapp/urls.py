from django.urls import path
from .views import OptionList, OptionDetail,option_all,option_create,option_update,option_delete,PlayerList, PlayerDetail,player_all,player_create,player_update,player_delete
# extras,shop,bulk_insert

urlpatterns = [
    path('options/', OptionList.as_view(), name='option-list'),
    path('options/<int:pk>/', OptionDetail.as_view(), name='option-detail'),
    path('options/all/', option_all, name='option-all'),
    path('options/create/', option_create, name='option-create'),
    path('options/update/<int:pk>/', option_update, name='option-update'),
    path('options/delete/<int:pk>/', option_delete, name='option-delete'),
    # path('shop', shop, name='shop'),
    # path('bulk-insert/', bulk_insert, name='bulk-insert'),
    path('players/', PlayerList.as_view(), name='player-list'),
    path('players/<int:pk>/', PlayerDetail.as_view(), name='player-detail'),
    path('players/all/', player_all, name='player-all'),
    path('players/create/', player_create, name='player-create'),
    path('players/update/<int:pk>/', player_update, name='player-update'),
    path('players/delete/<int:pk>/', player_delete, name='player-delete'),
]