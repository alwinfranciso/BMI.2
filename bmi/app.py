from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    height = float(request.form['height'])
    weight = float(request.form['weight'])
    unit_height = request.form['unit_height']
    unit_weight = request.form['unit_weight']
    gender = request.form['gender']

    # Convert height to meters
    if unit_height == 'centimeter':
        height = height / 100
    elif unit_height == 'meter':
        height = height
    elif unit_height == 'inch':
        height = height * 0.0254

    # Convert weight to kilograms
    if unit_weight == 'kilogram':
        weight = weight
    elif unit_weight == 'pound':
        weight = weight * 0.453592

    bmi = weight / (height ** 2)
    return render_template('result.html', bmi=bmi, gender=gender)

if __name__ == '__main__':
    app.run(debug=True)
