from flask import Flask, render_template, request, session, redirect, url_for
from waitress import serve
import os

app = Flask(__name__)
app.debug = False
app.secret_key = "little_beach"

PASSWORD = "oldvinefarms" 

@app.route("/", methods=["GET", "POST"])
def password():
    if "authenticated" in session:
        return redirect(url_for("index"))  # Redirect to the main page after login

    if request.method == "POST":
        if request.form["password"] == PASSWORD:
            session["authenticated"] = True
            return redirect(url_for("index"))  # Go to main page
        else:
            return "Incorrect password. Try again.", 403

    return render_template("password.html")  # Renders the password input page

@app.route("/logout")
def logout():
    session.pop("authenticated", None)
    return redirect(url_for("password"))

# Protected Routes
@app.route("/index")
def index():
    if "authenticated" not in session:
        return redirect(url_for("password"))  # Protect the main page
    return render_template("index.html")

@app.route("/menu")
def menu():
    if "authenticated" not in session:
        return redirect(url_for("password"))
    return render_template("menu.html")

@app.route("/catagories/history")
def history():
    if "authenticated" not in session:
        return redirect(url_for("password"))
    return render_template("catagories/history.html")

@app.route("/catagories/preserving")
def preserving():
    if "authenticated" not in session:
        return redirect(url_for("password"))
    return render_template("catagories/preserving.html")

@app.route("/catagories/vineyard")
def vineyard():
    if "authenticated" not in session:
        return redirect(url_for("password"))
    return render_template("catagories/vineyard.html")

@app.route("/contact")
def contact():
    if "authenticated" not in session:
        return redirect(url_for("password"))
    return render_template("contact.html")

@app.route("/navigation")
def navigation():
    if "authenticated" not in session:
        return redirect(url_for("password"))
    return render_template("navigation.html")

@app.route("/footer")
def footer():
    if "authenticated" not in session:
        return redirect(url_for("password"))
    return render_template("footer.html")

@app.route("/home")
def home():
    if "authenticated" not in session:
        return redirect(url_for("password"))
    return render_template("home.html")

@app.route("/credits")
def credits():
    if "authenticated" not in session:
        return redirect(url_for("password"))
    return render_template("credits.html")

@app.route("/flickity")
def flickity():
    if "authenticated" not in session:
        return redirect(url_for("password"))
    return render_template("flickity.html")

if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=4000)
