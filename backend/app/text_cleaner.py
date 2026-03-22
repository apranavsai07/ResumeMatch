import re

def clean_text(text: str) -> str:
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text)

    # Remove strange characters
    text = re.sub(r'[^\x00-\x7F]+', ' ', text)

    return text.strip().lower()