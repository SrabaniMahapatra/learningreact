from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from contact.models import Contact, Appointment
# Login
def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            messages.success(request, f'Welcome back, {username}!')
            return redirect('index')
        else:
            messages.error(request, 'Invalid username or password.')
    return render(request, 'login.html')

# Signup
def signup_view(request):
    if request.user.is_authenticated:
        return redirect('index')
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        if password1 != password2:
            messages.error(request, "Passwords don't match")
            return render(request, 'signup.html')
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists")
            return render(request, 'signup.html')
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already exists")
            return render(request, 'signup.html')

        user = User.objects.create_user(username=username, email=email, password=password1)
        login(request, user)
        messages.success(request, 'Account created successfully!')
        return redirect('index')
    return render(request, 'signup.html')

# Logout
def logout_view(request):
    logout(request)
    return render(request, 'logout.html')

# Index
@login_required(login_url='login')
def index_view(request):
    return render(request, 'index.html')

# About
def about_view(request):
    return render(request, 'about.html')

# Services
def services_view(request):
    return render(request, 'services.html')

# request.post.get- form ka name field ka value leta h

def contact_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')   
        email = request.POST.get('email')
        subject = request.POST.get("subject")
        message = request.POST.get('message')

        if name and email and subject and message:
            Contact.objects.create(name=name, email=email, subject=subject, message=message)
            messages.success(request, "Your message has been sent successfully!")
            return redirect('Contactus')
        else:
            messages.error(request, "All fields are required!")
    return render(request, 'Contactus.html')


def appointment_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        age = request.POST.get('age')
        date = request.POST.get('date')
        gender = request.POST.get('gender')
        department = request.POST.get('department')
        doctor_gender = request.POST.get('doctor_gender')
        concern = request.POST.get('concern')

        if name and email and phone and age and date:
            Appointment.objects.create(
                name=name,
                email=email,
                phone=phone,
                age=age,
                date=date,
                gender=gender,
                department=department,
                doctor_gender=doctor_gender,
                concern=concern
            )
            messages.success(request, "Your appointment has been booked successfully!")
            return redirect('Appointment')
        else:
            messages.error(request, "All required fields must be filled!")
    return render(request, 'Appointment.html')


# Testimonials
def testimonial_view(request):
    return render(request, 'testimonials.html')

# Blog
def ourblog_view(request):
    return render(request, 'ourblog.html')

# team
def team_view(request):
    return render(request, 'team.html')

