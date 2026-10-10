import os
import re
import itertools

DIR_TO_SCAN = "./src"
THRESHOLD = 0.25 # 35% similarity threshold

def clean_text(text):
    # Remove frontmatter
    text = re.sub(r'^---[\s\S]*?^---', '', text, flags=re.MULTILINE)
    # Remove script and style tags completely
    text = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '', text, flags=re.IGNORECASE)
    text = re.sub(r'<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>', '', text, flags=re.IGNORECASE)
    # Remove HTML/Astro tags
    text = re.sub(r'<[^>]+>', ' ', text)
    # Remove markdown links/images
    text = re.sub(r'\[.*?\]\(.*?\)', ' ', text)
    # Lowercase and keep only alphanumeric words
    words = re.findall(r'\b[a-z]{3,}\b', text.lower()) # words 3+ chars long
    return words

def get_shingles(words, n=4):
    shingles = set()
    for i in range(len(words) - n + 1):
        shingles.add(tuple(words[i:i+n]))
    return shingles

def jaccard(set1, set2):
    if not set1 and not set2:
        return 0.0
    intersection = len(set1.intersection(set2))
    union = len(set1.union(set2))
    return intersection / union

documents = {}
for root, _, files in os.walk(DIR_TO_SCAN):
    for file in files:
        if file.endswith(('.md', '.mdx', '.astro')):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                try:
                    content = f.read()
                    words = clean_text(content)
                    if len(words) > 50: # Only check files with actual text content
                        shingles = get_shingles(words, n=4) # 4-word phrases
                        if len(shingles) > 10:
                            documents[path] = shingles
                except UnicodeDecodeError:
                    continue

print("🚨 RUNNING ADVANCED SIMILARITY SCAN (Jaccard on 4-grams) 🚨\n")
found = False

# Compare all pairs
paths = list(documents.keys())
matches = []

for i in range(len(paths)):
    for j in range(i + 1, len(paths)):
        path1 = paths[i]
        path2 = paths[j]
        sim = jaccard(documents[path1], documents[path2])
        
        if sim >= THRESHOLD:
            found = True
            matches.append((sim, path1, path2))

matches.sort(reverse=True, key=lambda x: x[0])

for sim, p1, p2 in matches:
    print(f"⚠️ SIMILARITY: {sim*100:.1f}%")
    print(f" - Page A: {p1}")
    print(f" - Page B: {p2}\n")

if not found:
    print("✅ NO HIGHLY SIMILAR PAGES FOUND! (Threshold: >35% match)")

