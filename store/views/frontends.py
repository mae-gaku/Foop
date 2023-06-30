

# Create your views here.
from django.shortcuts import render


# Create your views here.
from django.views.generic import TemplateView
 
class IndexView(TemplateView):
    template_name = 'site.html'

class FoodView(TemplateView):
    template_name = 'food.html'

class ServiceView(TemplateView):
    template_name = 'service.html'

class NewsView(TemplateView):
    template_name = 'news.html'

class QuestionView(TemplateView):
    template_name = 'Q&A.html'

class MapView(TemplateView):
    template_name = 'map.html'

class JobView(TemplateView):
    template_name = 'job.html'