from django.db import models

class Detail(models.Model):
    name = models.CharField(max_length=20, primary_key=True)
    field = models.CharField(max_length=20)

    def __str__(self):
        return self.name    
