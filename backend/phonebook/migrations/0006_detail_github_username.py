# Generated by Django 3.1.7 on 2021-03-14 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phonebook', '0005_auto_20210314_0932'),
    ]

    operations = [
        migrations.AddField(
            model_name='detail',
            name='github_username',
            field=models.CharField(default='Not available', max_length=100),
        ),
    ]
