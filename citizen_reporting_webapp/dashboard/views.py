from django.shortcuts import render
from citizen_reporting_webapp.settings import MAPBOX_API_KEY
# Create your views here.

def index(request):
    context = {'mapbox_access_token': MAPBOX_API_KEY }
    return render(request, 'dashboard/index.html', context)

def login(request):
    return redirect("authenticate:login")
