  
from flask import Flask, Response, request
from flask_cors import CORS
import json
import dad_jokes_service
from dad_jokes_term_counter import DadJokesTermCounter

app = Flask(__name__)
app.config['SERVER_NAME'] = 'localhost:5000'
CORS(app, resources={r"/*": {'origins': '*'}}, headers='Content-Type')

@app.route("/jokeCounts", methods=["GET"])
def get():
    num_jokes = int(request.args.get('numJokes') or 10)
    joke_strings = dad_jokes_service.get_dad_jokes(num_jokes)

    term_counter = DadJokesTermCounter()
    counts = term_counter.count_terms(joke_strings)

    count_objects = json.dumps([{"rank": idx + 1, "term": key, "count": counts[key]} for idx, key in enumerate(counts)])
    return Response(count_objects)

if __name__ == '__main__':
     app.run()