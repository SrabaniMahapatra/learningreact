
# Register your models here.


from django.contrib import admin
from .models import Contact, Appointment

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "subject" , "message")
    search_fields = ("name", "email", "subject")  
    list_filter = ("subject",)   


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone", "date", "age" ,"gender" ,"department" ,"doctor_gender" ,"concern")
    search_fields = ("name", "email", "phone", "department", "doctor_gender")  
    list_filter = ("date", "gender", "department", "doctor_gender") 