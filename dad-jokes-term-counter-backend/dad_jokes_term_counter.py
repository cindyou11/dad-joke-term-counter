import string
import re
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

class DadJokesTermCounter():
    def __init__(self):
        pass

    def count_terms(self, joke_strings):   
        words = self.process_joke_strings(joke_strings)
        
        counts = {}
        for word in words:
            count = counts.setdefault(word, 0)
            counts[word] = count + 1

        sorted_counts = {k: v for k, v in sorted(counts.items(), key=lambda count: count[1], reverse=True)}
        return sorted_counts

    def process_joke_strings(self, joke_strings):
        # decode strings and combine
        joke_string = " ".join([string.decode('utf-8') for string in joke_strings])

        # remove punctuation (also remove apostrophes, ellipses, left and right quotations)
        joke_string = joke_string.translate(str.maketrans('', '', string.punctuation + "’…“”"))

        # tokenize words, remove invalid words and set all words to lowercase
        tokens = word_tokenize(joke_string)
        words = [word.lower() for word in tokens if word.isalpha()]
    
        # lemmatize words
        # has/was will get lemmatized to ha/wa, so there's a bit of dumb logic to work around that
        wnl = WordNetLemmatizer()
        words = [word if re.match('was|has', word) else wnl.lemmatize(word) for word in words]

        return words