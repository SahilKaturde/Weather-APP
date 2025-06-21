from django.shortcuts import render
import requests 

import os
from dotenv import load_dotenv

# Create your views here.
def homeView(request):
    load_dotenv()
    context = {}
    if request.method == 'POST':
        city_name = request.POST.get('city')
        api_key = os.getenv("API_KEY")
        url = f"https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={api_key}"

        try:
            response = requests.get(url)
            data = response.json()
            
            if response.status_code == 200:
                temperature = data['main']['temp']
                temperature -= 273.15
                temperature = round(temperature)

                wind_speed = data['wind']['speed']
                pressure = data['main']['pressure']
                weather_des = data['weather'][0]['description'].upper()
                name_to = data['name'].upper()

                context = {
                    'temp':temperature,
                    'wind_speed':wind_speed,
                    'pressure':pressure,
                    'weather_des':weather_des,
                    'name_city':name_to,
                    
                }


        except Exception as e:
            context = {'error':e}

    return render(request,'index.html',context)