from django.db import models

# Create your models here.
class Option(models.Model):
    question = models.CharField(max_length=100, default='')
    correct_answer = models.CharField(max_length=100)
    wrong_answer1 = models.CharField(max_length=100)
    wrong_answer2 = models.CharField(max_length=100)
    wrong_answer3 = models.CharField(max_length=100)
    category = models.CharField(max_length=100, default='')
    difficulty = models.CharField(max_length=100, default='')


class Player(models.Model):
    user_name = models.CharField(max_length=100, default='', unique=True)
    score = models.IntegerField(default=1000)
    

    class Meta:
        verbose_name_plural = "Players"
        ordering = ["user_name"]

    def __str__(self):
        return self.user_name
