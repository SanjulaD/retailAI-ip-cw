# -*- coding: utf-8 -*-
"""
Created on Wed Mar  3 11:49:40 2021

@author: Sanjula De Alwis
"""

# Importing Libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Importing dataset
dataset = pd.read_csv('Retail_Reviews.tsv', delimiter = '\t', quoting = 3)

# Cleaning the text
import re
import nltk
nltk.download('stopwords')
nltk.download('punkt')
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
corpus = []
for i in range(0, 1000):
    review = re.sub('[^a-zA-Z]', ' ', dataset['Review'][i])
    review = review.lower()
    review = review.split()
    
    ps = PorterStemmer()
    review = [ps.stem(word) for word in review if not word in stopwords.words('english')]
    
    review = ' '.join(review)
    corpus.append(review)
    
# Create a dictionary
wordfreq = {}
for review in corpus:
    tokens = nltk.word_tokenize(review)
    for token in tokens:
        if token not in wordfreq.keys():
            wordfreq[token] = 1
        else:
            wordfreq[token] += 1
            
# Heap the Dictionary
import heapq
most_freq = heapq.nlargest(1000, wordfreq, key=wordfreq.get)

sentence_vectors = []
for review in corpus:
    sentence_tokens = nltk.word_tokenize(review)
    sent_vec = []
    for token in most_freq:
        if token in sentence_tokens:
            sent_vec.append(1)
        else:
            sent_vec.append(0)
    sentence_vectors.append(sent_vec)
sentence_vectors = np.asarray(sentence_vectors)
    
 
# Creating the bag of words model
from sklearn.feature_extraction.text import CountVectorizer
cv = CountVectorizer(max_features=None)
X = cv.fit_transform(corpus).toarray()
y = dataset.iloc[:, 1].values

# Splitting the dataset into training set and test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test =  train_test_split(X, y, test_size = 0.1, random_state = 0)

#Fitting Naive Bayes to the Training set
from sklearn.naive_bayes import BernoulliNB 
classifier = BernoulliNB(alpha=0.8)
classifier.fit(X_train, y_train)

# Predicting the Test set results
y_pred = classifier.predict(X_test) 

# save the model to disk
import pickle
filename = './src/model/review_model.pkl'
pickle.dump(classifier, open(filename, 'wb'))

# bar graph
plt.title("Review Train and Prediction")
plt.xlabel('Review Category')
plt.ylabel("Count")
test_pred_good = [pd.Series(y_test).value_counts()[1], pd.Series(y_pred).value_counts()[1]]
test_pred_bad = [pd.Series(y_test).value_counts()[0], pd.Series(y_pred).value_counts()[0]]
X_axis = np.arange(len(test_pred_good))
plt.bar(X_axis + 0.25, test_pred_good, color = 'blue', width = 0.25)
plt.bar(X_axis + 0.5, test_pred_bad, color = 'red', width = 0.25)
plt.legend(['Good', 'Bad'])
plt.xticks([i + 0.37 for i in range(2)], ['Train', 'Predict'])
plt.savefig('./src/model/review_train_bar.png', dpi=(300))
plt.show()

print('Good (Test) : ', pd.Series(y_test).value_counts()[1])
print('Bad (Test) : ', pd.Series(y_test).value_counts()[0])

print('Good (Pred) : ', pd.Series(y_pred).value_counts()[1])
print('Bad (Pred) : ', pd.Series(y_pred).value_counts()[0])

# Accuracy, Precision and Recall
from sklearn.metrics import accuracy_score
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
score1 = accuracy_score(y_test,y_pred)
score2 = precision_score(y_test,y_pred)
score3 = recall_score(y_test,y_pred)
print("\n")
print("Accuracy is ",round(score1*100,2),"%")
print("Precision is ",round(score2,2))
print("Recall is ",round(score3,2))

# Making the Confusion Matrix  
from sklearn.metrics import confusion_matrix  
sm = confusion_matrix(y_test, y_pred)

