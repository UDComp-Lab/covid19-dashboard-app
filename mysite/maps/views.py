from django.shortcuts import render
from mysite.settings import MAPBOX_API_KEY

# Create your views here.

def default_map(request):
    # TODO: move this token to Django settings from an environment variable
    # found in the Mapbox account settings and getting started instructions
    # see https://www.mapbox.com/account/ under the "Access tokens" section
    mapbox_access_token = MAPBOX_API_KEY #'pk.eyJ1IjoidmFydW52OSIsImEiOiJjazd4eG5ueXkwMTh6M2VvNWZ4em92YWRtIn0.byw-Ds5JRgGlNJpUOFMQ4A'
    return render(request, 'default.html', 
                  { 'mapbox_access_token': mapbox_access_token })