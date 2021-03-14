from django.db import models

class Detail(models.Model):
    name = models.CharField(max_length=50 ,primary_key=True)
    field = models.CharField(max_length=100, default="Not avaiable")
    email = models.CharField(max_length=50,default="Not available")
    github = models.CharField(max_length=50, default="Not available")
    github_username = models.CharField(max_length=100, default="Not available")
    languages = models.CharField(max_length=50,default="Not available")

class SignIn(models.Model):
    username = models.CharField(max_length=50, primary_key=True)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.name    
