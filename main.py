import os
import time
import wikipedia

nos=0

def get_page_summaries(page_name):
    nos=nos+1
    try:
      print(f"Retrieving Article #{nos} \"{page_name}\"")
    except:
      print(f"Retrieving Article #{nos}")
    try:
        return [[page_name, wikipedia.page(page_name).content]]
    except wikipedia.exceptions.DisambiguationError as e:
        return [[p, wikipedia.page(p).content] for p in e.options]

def get_random_pages_summary(pages=10000, output_dir="wikipedia_articles"):
    os.makedirs(output_dir, exist_ok=True)
    ret = []
    for i in range(pages):
        page_name = wikipedia.random(1)
        for page_summary in get_page_summaries(page_name):
            filename = f"{output_dir}/{page_summary[0]}.txt"
            with open(filename, "w", encoding="utf-8") as file:
                file.write(page_summary[1])
            ret.append(filename)
        time.sleep(1)  # To avoid rate-limiting
    return ret

article_files = get_random_pages_summary(pages=10)
print(f"Saved {len(article_files)} Wikipedia articles.")
os.system("cd wikipedia_articles/ && 7z a -t7z -m0=lzma -mx=9 -mfb=64 -md=32m -ms=on archive.7z .")
