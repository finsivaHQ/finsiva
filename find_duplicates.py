import os
import hashlib
import re
from collections import defaultdict

DIR_TO_SCAN = "./src"

def get_hash(text):
    return hashlib.md5(text.encode('utf-8')).hexdigest()

def get_title(content):
    match = re.search(r'^title:\s*["\']?(.*?)["\']?$', content, re.MULTILINE)
    if match:
        return match.group(1).strip()
    return None

def clean_content(content):
    # Remove frontmatter
    content = re.sub(r'^---[\s\S]*?^---', '', content, flags=re.MULTILINE)
    # Remove whitespace and special chars to check for core content duplication
    content = re.sub(r'\s+', '', content)
    return content

exact_files = defaultdict(list)
title_map = defaultdict(list)
content_map = defaultdict(list)

for root, _, files in os.walk(DIR_TO_SCAN):
    for file in files:
        if file.endswith((".md", ".mdx", ".astro")):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                try:
                    text = f.read()
                except UnicodeDecodeError:
                    continue
                
                # 1. Exact File Match
                exact_files[get_hash(text)].append(path)
                
                # 2. Title Match (mostly for Markdown)
                title = get_title(text)
                if title:
                    title_map[title.lower()].append(path)
                    
                # 3. Content Match (ignoring frontmatter and whitespace)
                cleaned = clean_content(text)
                if len(cleaned) > 50: # Only care about files with actual content
                    content_map[get_hash(cleaned)].append(path)

print("🚨 EXACT FILE DUPLICATES:")
found = False
for h, paths in exact_files.items():
    if len(paths) > 1:
        print(f" - {paths}")
        found = True
if not found: print("None")

print("\n🚨 DUPLICATE TITLES:")
found = False
for title, paths in title_map.items():
    if len(paths) > 1:
        print(f" - Title '{title}': {paths}")
        found = True
if not found: print("None")

print("\n🚨 DUPLICATE CONTENT (Ignoring formatting/frontmatter):")
found = False
for h, paths in content_map.items():
    if len(paths) > 1:
        print(f" - {paths}")
        found = True
if not found: print("None")

