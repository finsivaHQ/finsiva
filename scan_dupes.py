import os
import collections

blogs_dir = r'd:\TOOLS WEB TOOLS\personality\src\pages\blogs'
knowledge_dir = r'd:\TOOLS WEB TOOLS\personality\src\pages\knowledge'

blogs = [f for f in os.listdir(blogs_dir) if f.endswith('.astro') and f != 'index.astro']
knowledge = [f for f in os.listdir(knowledge_dir) if f.endswith('.astro') and f != 'index.astro']

# Also check nested knowledge categories
for root, dirs, files in os.walk(knowledge_dir):
    for f in files:
        if f.endswith('.astro') and f != 'index.astro' and root != knowledge_dir:
            knowledge.append(os.path.relpath(os.path.join(root, f), knowledge_dir).replace('\\', '/'))

def get_country(filename):
    name = filename.lower()
    if name.startswith('hong-kong') or name.startswith('hk'): return 'Hong Kong'
    if name.startswith('singapore') or name.startswith('sg'): return 'Singapore'
    if name.startswith('malaysia') or name.startswith('my'): return 'Malaysia'
    if name.startswith('indonesia') or name.startswith('id'): return 'Indonesia'
    if name.startswith('new-zealand') or name.startswith('nz'): return 'New Zealand'
    if name.startswith('uk') or name.startswith('united-kingdom'): return 'United Kingdom'
    if name.startswith('pakistan') or name.startswith('pk'): return 'Pakistan'
    if name.startswith('india') or name.startswith('in'): return 'India'
    if name.startswith('philippines') or name.startswith('ph'): return 'Philippines'
    return 'Other'

grouped = collections.defaultdict(list)

for b in blogs:
    grouped[get_country(b)].append(f"BLOG: {b}")
    
for k in knowledge:
    grouped[get_country(k)].append(f"KNOWLEDGE: {k}")

for country, items in grouped.items():
    print(f"\n=== {country.upper()} ===")
    for item in sorted(items):
        print(item)

