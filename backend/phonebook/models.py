from django.db import models

class Detail(models.Model):
    name = models.CharField(max_length=50 ,primary_key=True)
    field = models.CharField(max_length=50)
    email = models.CharField(max_length=50,default="Not available")
    github = models.CharField(max_length=50, default="Not available")
    languages = models.CharField(max_length=50,default="Not available")


    def __str__(self):
        return self.name    
