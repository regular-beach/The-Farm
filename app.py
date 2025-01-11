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


  
if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=4000)


    