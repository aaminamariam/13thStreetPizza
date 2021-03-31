from django.shortcuts import render
import pyrebase

config={
    "apiKey": "AIzaSyDiC2QZjOKkunmTPUSdWTBcDwDPH9b2JYQ",
    "authDomain": "th-street-pizza-2d815.firebaseapp.com",
    "databaseURL": "https://th-street-pizza-2d815-default-rtdb.firebaseio.com",
    "projectId": "th-street-pizza-2d815",
    "storageBucket": "th-street-pizza-2d815.appspot.com",
    "messagingSenderId": "710665325667",
    "appId": "1:710665325667:web:8c45c4736ffdaf194ffc56",
    "measurementId": "G-P22HTYELVL"
}
firebase=pyrebase.initialize_app(config)
auth = firebase.auth()
database=firebase.database()

def home(request):
    return render(request,"authenticate.html")

def postsign(request):
    email=request.POST.get("email")
    password = request.POST.get("pass")
    try:
        user = auth.sign_in_with_email_and_password(email,password)
    except:
        message = "invalid cerediantials"
        return render(request,"authenticate.html",{"msg":message})
    print(user)
    return render(request, "welcome.html",{"e":email})
