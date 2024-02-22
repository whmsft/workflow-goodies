import os
import time
import wikipedia

nos=0

def get_page_summaries(page_name):
    global nos
    nos=nos+1
    try:
      print(f"Retrieving Article #{nos} \"{page_name}\"")
    except:
      print(f"Retrieving Article #{nos}")
    try:
        return [[page_name, wikipedia.page(page_name).content]]
    except:
        print("Caught error")
        return []

def get_random_pages_summary(pages=10000, output_dir="wikipedia_articles"):
    os.makedirs(output_dir, exist_ok=True)
    ret = []
    for i in range(pages):
        page_name = wikipedia.random(1)
        for page_summary in get_page_summaries(page_name):
            filename = page_summary[0]
            filename = filename.replace("/","%2F")
            filename = filename.replace("\\","%5C")
            filename = filename.replace(":","%3A")
            filename = filename.replace("*","%2A")
            filename = filename.replace("?","%3F")
            filename = filename.replace("\"","%22")
            filename = filename.replace("<","%3C")
            filename = filename.replace(">","%3E")
            filename = filename.replace("|","%7C")
            filename = f"{output_dir}/{filename}.txt"
            with open(filename, "w", encoding="utf-8") as file:
                file.write(page_summary[1])
            ret.append(filename)
    return ret

article_files = get_random_pages_summary(pages=10)
print(f"Saved {len(article_files)} Wikipedia articles.")
