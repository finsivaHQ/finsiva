import os

blog_dir = r'd:\TOOLS WEB TOOLS\bsc calculator site\src\content\blog'
pages_dir = r'd:\TOOLS WEB TOOLS\bsc calculator site\src\pages'

blogs = [f for f in os.listdir(blog_dir) if f.endswith('.md')]

print("Found MD files in BSC Calculator:")
for b in sorted(blogs):
    print("- " + b)
