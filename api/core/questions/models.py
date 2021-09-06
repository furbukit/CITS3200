from core.subexercises.models import Subexercise
from django.db import models
from django.conf import settings


class Question(models.Model):
    subexercise_slug = models.ForeignKey(Subexercise, on_delete=models.CASCADE)
    question = models.CharField(max_length=100)
    audio_url = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.question}"


class PracticeAttempt(models.Model):
    attempt = models.IntegerField()
    subexercise_slug = models.ForeignKey(Subexercise, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    wpm = models.FloatField()
    time_elapsed = models.TimeField()
    accuracy = models.FloatField()
    score = models.FloatField()

    def __str__(self):
        return f"{self.user.username} practice attempt: {self.attempt}"

class ChallengeAttempt(models.Model):
    attempt = models.IntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    wpm = models.FloatField()
    time_elapsed = models.TimeField()
    accuracy = models.FloatField()
    score = models.FloatField()

    def __str__(self):
        return f"{self.user.username} challenge attempt: {self.attempt}"