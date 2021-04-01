# -*- coding: utf-8 -*-
"""
Created on Wed Mar  3 19:23:28 2021

@author: Sanjula De Alwis
"""

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import re
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from flask import Flask, request, render_template
from flasgger import Swagger
from sklearn.feature_extraction.text import CountVectorizer
import pickle

# Import model
pkl_filename = './model/review_model.pkl'
with open(pkl_filename, 'rb') as file:
    model = pickle.load(file)

app = Flask(__name__)
swagger = Swagger(app)  

@app.route('/good-review', methods=["POST"])
def good_review_file():
    """Reviewing file endpoint returning a prediction of model - Good Reviews
    ---
    consumes:
      - multipart/form-data
    parameters:
      - name: input_file
        in: formData
        type: file
        required: true
        description: The file to upload (CSV, TSV)
    responses:
      200:
        description: Count of good reviews based on file attached
    """
    # Input dataset
    input_data = pd.read_csv(request.files.get("input_file"), delimiter = '\t', quoting = 3)
    
    # Cleaning the dataset
    corpus = []
    for i in range(0, len(input_data)):
        review = re.sub('[^a-zA-Z]', ' ', input_data['Review'][i])
        review = review.lower()
        review = review.split()
        
        ps = PorterStemmer()
        review = [ps.stem(word) for word in review if not word in stopwords.words('english')]
        
        review = ' '.join(review)
        corpus.append(review)
    
    # Creating the bag of words model
    cv = CountVectorizer()
    X = cv.fit_transform(corpus).toarray()
    
    print("Predicting!")
    prediction = model.predict(X)

    print('Good : ', pd.Series(prediction).value_counts()[1])
    print("Returning Count")
    good_val = str(pd.Series(prediction).value_counts()[1])
    
    return 'Good Review Count : '+good_val

@app.route('/bad-review', methods=["POST"])
def bad_review_file():
    """Reviewing file endpoint returning a prediction of model - Bad Reviews
    ---
    consumes:
      - multipart/form-data
    parameters:
      - name: input_file
        in: formData
        type: file
        required: true
        description: The file to upload (CSV, TSV)
    responses:
      200:
        description: Count of bad reviews based on file attached
    """
    # Input dataset
    input_data = pd.read_csv(request.files.get("input_file"), delimiter = '\t', quoting = 3)
    
    # Cleaning the dataset
    corpus = []
    for i in range(0, len(input_data)):
        review = re.sub('[^a-zA-Z]', ' ', input_data['Review'][i])
        review = review.lower()
        review = review.split()
        
        ps = PorterStemmer()
        review = [ps.stem(word) for word in review if not word in stopwords.words('english')]
        
        review = ' '.join(review)
        corpus.append(review)
    
    # Creating the bag of words model
    cv = CountVectorizer()
    X = cv.fit_transform(corpus).toarray()
    
    print("Predicting!")
    prediction = model.predict(X)

    print('Bad : ', pd.Series(prediction).value_counts()[0])
    
    print("Returning Count")
    bad_val = str(pd.Series(prediction).value_counts()[0])
    
    return 'Bad Reviews Count : '+bad_val

@app.route('/plot-review', methods=["POST"])
def plot_Reviews():
    """Reviewing file endpoint returning a prediction of model - Plot Bar Chart
    ---
    consumes:
      - multipart/form-data
    parameters:
      - name: input_file
        in: formData
        type: file
        required: true
        description: The file to upload (CSV, TSV)
    responses:
      200:
        description: Bar Chart based on file attached
    /files/download/{fileName}:
    get:
      summary: download file
      operationId: downloadFile
      description: this API is for file download
      parameters:
        - in: path
          name: fileName.html
          required: true
          description: The name of file to download
    """
    # Input dataset
    input_data = pd.read_csv(request.files.get("input_file"), delimiter = '\t', quoting = 3)
    
    # Cleaning the dataset
    corpus = []
    for i in range(0, len(input_data)):
        review = re.sub('[^a-zA-Z]', ' ', input_data['Review'][i])
        review = review.lower()
        review = review.split()
        
        ps = PorterStemmer()
        review = [ps.stem(word) for word in review if not word in stopwords.words('english')]
        
        review = ' '.join(review)
        corpus.append(review)
    
    # Creating the bag of words model
    cv = CountVectorizer()
    X = cv.fit_transform(corpus).toarray()
    
    print("Predicting!")
    prediction = model.predict(X)
    
    # Bar graph
    plt.title("Review Prediction")
    plt.xlabel('Review Category')
    plt.ylabel("Count")
    labels = ['Good', 'Bad']
    values = [pd.Series(prediction).value_counts()[1], pd.Series(prediction).value_counts()[0]]
    plt.bar(labels, values, color = ['blue', 'red'])
    plt.savefig('./static/images/review_bar.png', dpi=(300))
    
    return render_template('plot.html', url='./../static/images/review_bar.png')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
    