import re
import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKILLS_PATH = os.path.join(BASE_DIR, "data", "skills.csv")

def load_skills():
    skills = pd.read_csv(SKILLS_PATH, header=None)
    return skills[0].str.lower().tolist()

def extract_skills(text, skills_list):
    text = text.lower()
    found = []
    
    for skill in skills_list:
        pattern = r"\b" + re.escape(skill) + r"\b"
        if re.search(pattern, text):
            found.append(skill)
            
    return list(set(found))