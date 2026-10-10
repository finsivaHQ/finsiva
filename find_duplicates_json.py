import os
import hashlib
import re
from collections import defaultdict

DIR_TO_SCAN = "./src"

def get_hash(text):
    return hashlib.md5(text.encode('utf-8')).hexdigest()

def clean_content(text):
    return re.sub(r'\s+', '', text)

content_map = defaultdict(list)

for root, _, files in os.walk(DIR_TO_SCAN):
    for file in files:
        if file.endswith(".json"):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                try:
                    text = f.read()
                except UnicodeDecodeError:
                    continue
                
                cleaned = clean_content(text)
                if len(cleaned) > 50:
                    content_map[get_hash(cleaned)].append(path)

print("🚨 JSON CONTENT DUPLICATES:")
found = False
for h, paths in content_map.items():
    if len(paths) > 1:
        print(f" - {paths}")
        found = True
if not found: print("None")

