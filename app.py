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

@app.route('/history')
def history():
    return render_template('history.html')

@app.route('/preserving')
def preserving():
    return render_template('preserving.html')

@app.route('/education')
def education():
    return render_template('education.html')

@app.route('/vinyard')
def vinyard():
    return render_template('vinyard.html')

@app.route('/hospitality')
def hospitality():
    return render_template('hospitality.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/navigation')
def navigation():
    return render_template('navigation.html')

@app.route('/home')
def home():
    return render_template('home.html')



  
if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=4000)


    