from flask import Flask, render_template, request
from waitress import serve
from flask import Flask, url_for
import os

app = Flask(__name__)
app.debug = False

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')



@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/catagories/history')
def history():
    return render_template('catagories/history.html')

@app.route('/catagories/preserving')
def preserving():
    return render_template('catagories/preserving.html')

@app.route('/catagories/vineyard')
def vineyard():
    return render_template('catagories/vineyard.html')


@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/navigation')
def navigation():
    return render_template('navigation.html')

@app.route('/loading')
def loading():
    return render_template('loading.html')

@app.route('/footer')
def footer():
    return render_template('footer.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/credits')
def credits():
    return render_template('credits.html')

@app.route('/flickity')
def flickity():
    return render_template('flickity.html')


  
if __name__ == "__main__":
   serve(app, host="0.0.0.0", port=4000)


#if __name__ == '__main__':
   #app.run(host='0.0.0.0') 