from django.shortcuts import render
 
def index(request):
    return render(request, 'index.html')
def register(request):
    return render(request,'register.html')
def course(request):
    return render(request,'course.html')