from flask import render_template
from flask import Flask, redirect

from . import translations

app = Flask(__name__)


@app.route('/')
def index():
    return redirect('/en')


@app.route("/<language>")
def language(language):
    match language:
        case "en":
            page_content = translations.english
        case "be":
            page_content = translations.dutch
        case "nl":
            page_content = translations.dutch

    return render_template('index.html', content=page_content)


app.config['TEMPLATES_AUTO_RELOAD'] = True

if __name__ == "__main__":
    app.run(
        debug=True,
        host='0.0.0.0'
    )
