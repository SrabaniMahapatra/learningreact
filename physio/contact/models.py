

from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200, default="No Subject")  # default added
    message = models.TextField()


class Appointment(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15, default="Not Provided")  # default added
    age = models.PositiveIntegerField(default=18)
    date = models.DateField()
    gender = models.CharField(max_length=20, blank=True, null=True)
    department = models.CharField(max_length=50, blank=True, null=True)
    doctor_gender = models.CharField(max_length=10, blank=True, null=True)
    concern = models.TextField(blank=True, null=True)


# charfield-short text k liye field
# textfield-long text k liye
# emailfield-email validate krne k liye
# default-Field ka default value set karta hai
# blank=True vs null=True-->blank → form me optional; null → database me NULL allowed.