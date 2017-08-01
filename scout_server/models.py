""" Copyright 2012, 2013 UW Information Technology, University of Washington

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

    Changes
    =================================================================

    sbutler1@illinois.edu: add external_id support; create decorator
        for updating the etag; make spottypes not required; use
        reverse() to build URLs; re-organize some of the JSON
        serialization code; add DAY_CHOICES; add unique constraint on
        extended info (spot, key); re-work SpotImage save so that the
        proper exception is thrown on an invalid image type.
"""

from django.db import models
from django.db.models import Sum, Count
from django.core.cache import cache
from django.core.exceptions import ValidationError, ObjectDoesNotExist
from django.core.validators import validate_slug
from django.core.validators import MaxValueValidator, MinValueValidator
from django.core.files.uploadedfile import UploadedFile
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
import hashlib
import datetime
import time
from wsgiref.handlers import format_date_time
import random
#from PIL import Image
#import oauth_provider.models
import re
from functools import wraps


class SpotType(models.Model):
    """ The type of Spot.
    """
    name = models.SlugField(max_length=50)

    def __unicode__(self):
        return self.name


class Spot(models.Model):
    """ Represents a place for students to study.
    """
    name = models.CharField(max_length=100, blank=True)
    spottypes = models.ManyToManyField(SpotType, max_length=50,
                                       related_name='spots', blank=True,
                                       null=True)
    latitude = models.DecimalField(max_digits=11, decimal_places=8, null=True)
    longitude = models.DecimalField(max_digits=11, decimal_places=8, null=True)
    height_from_sea_level = models.DecimalField(max_digits=11,
                                                decimal_places=8, null=True,
                                                blank=True)
    building_name = models.CharField(max_length=100, blank=True)
    floor = models.CharField(max_length=50, blank=True)
    room_number = models.CharField(max_length=25, blank=True)
    capacity = models.IntegerField(null=True, blank=True)
    display_access_restrictions = models.CharField(max_length=200, blank=True)
    organization = models.CharField(max_length=50, blank=True)
    manager = models.CharField(max_length=50, blank=True)
    #etag = models.CharField(max_length=40)
    last_modified = models.DateTimeField(auto_now=True)
    external_id = models.CharField(max_length=100, null=True, blank=True,
                                   default=None, unique=True,
                                   validators=[validate_slug])

    def __unicode__(self):
        return self.name




class SpotAvailableHours(models.Model):
    """ The hours a Spot is available, i.e. the open or closed hours for
    the building the spot is located in.
    """
    DAY_CHOICES = (
        ('m', 'monday'),
        ('t', 'tuesday'),
        ('w', 'wednesday'),
        ('th', 'thursday'),
        ('f', 'friday'),
        ('sa', 'saturday'),
        ('su', 'sunday'),
    )

    spot = models.ForeignKey(Spot)
    day = models.CharField(max_length=3, choices=DAY_CHOICES)

    start_time = models.TimeField()
    end_time = models.TimeField()

    class Meta:
        verbose_name_plural = "Spot available hours"

    def __unicode__(self):
        return "%s: %s, %s-%s" % (self.spot.name,
                                  self.day,
                                  self.start_time,
                                  self.end_time)


class SpotExtendedInfo(models.Model):
    """ Additional institution-provided metadata about a spot.
    If providing custom metadata, you should provide a validator for
    that data, as well.
    """
    key = models.CharField(max_length=50)
    value = models.CharField(max_length=350)
    spot = models.ForeignKey(Spot, related_name='spotextendedinfo', on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Spot extended info"
        unique_together = ('spot', 'key')

    def __unicode__(self):
        return "%s[%s: %s]" % (self.spot.name, self.key, self.value)
