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
            filename = f"{output_dir}/{page_summary[0]}.txt"
            filename.replace("/","%2F")
            filename.replace("\\","%5C")
            filename.replace(":","%3A")
            filename.replace("*","%2A")
            filename.replace("?","%3F")
            filename.replace("\"","%22")
            filename.replace("<","%3C")
            filename.replace(">","%3E")
            filename.replace("|","%7C")
            with open(filename, "w", encoding="utf-8") as file:
                file.write(page_summary[1])
            ret.append(filename)
        time.sleep(1)  # To avoid rate-limiting
    return ret

article_files = get_random_pages_summary(pages=10000)
print(f"Saved {len(article_files)} Wikipedia articles.")
os.system("cd wikipedia_articles/ && 7z a -t7z -m0=lzma -mx=9 -mfb=64 -md=32m -ms=on archive.7z .")
