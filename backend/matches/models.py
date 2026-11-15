from django.db import models

# Create your models here.

Status_Choices = [
   ("invited","Invited"),
   ("declined","Declined"),
   ("joined","joined")
]
# fitScore = weightedSum(
    
# )

# class Matches(models.Model):
#     matchId = models.IntegerField(_(""))
#     projectId = models.IntegerField()
#     candidateProfileId = models.IntegerField()
#     fitscore=models.IntegerField
#     matchedRole = models.CharField('')
#     status= Status_Choices