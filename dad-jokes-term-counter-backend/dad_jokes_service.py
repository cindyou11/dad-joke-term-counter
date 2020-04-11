import requests

def get_dad_jokes(num_jokes):
    url = "https://icanhazdadjoke.com/"
    # accept text/plain to skip parsing json
    headers = {'Accept': 'text/plain'}

    joke_strings = []
    for i in range(num_jokes):
        response = requests.get(url, headers=headers)
        joke_strings.append(response.content)

    return joke_strings