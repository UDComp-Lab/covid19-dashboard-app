from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
# Create your views here.

def index(request):
    return render(request, 'registration/login.html')

def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)

        if form.is_valid:
            form.save()
            username = form.cleaned_data['username']
            password1 = form.cleaned_data['password1']
            # password2 = form.cleaned_data['password2']

            #
            user = authenticate(username=username, password=password1)

            login(request, user)

            return redirect('index')
    else:
        form = UserCreationForm()


    context = {'form': form}
    return render(request, 'registration/register.html', context)
