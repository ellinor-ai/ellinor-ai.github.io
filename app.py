from flask import Flask, jsonify
from openai import OpenAI

api_key = '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'
client = OpenAI(api_key=api_key)

app = Flask(__name__)




@app.route("/prompt")
def Prompt():
    question = request.args.get('question')