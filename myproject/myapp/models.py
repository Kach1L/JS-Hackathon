from django.db import models

# Create your models here.
class Option(models.Model):
    correct_answer = models.CharField(max_length=100)
    wrong_answer1 = models.CharField(max_length=100)
    wrong_answer2 = models.CharField(max_length=100)
    wrong_answer3 = models.CharField(max_length=100)


class Extra(models.Model):
    hint = models.CharField(max_length=100)
    button = models.BooleanField(default=False)
    timer = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Extras"
        ordering = ["hint"]

    def __str__(self):
        return self.hint