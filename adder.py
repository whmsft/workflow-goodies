import os, time
print(os.environ)
token = str(os.environ["TOKEN"])
os.system(f'git clone https://whmsft:{token}@github.com/whmsft/whmsft.github.io.git')
index_html = 1
print("Fyne til now.")
while True:
	print(f'Loop #{index_html}')
	open("./whmsft.github.io/index.html", "w+").writelines(str(index_html))
	os.system(f'git add .')
	os.system(f'git commit -m "Automated Response"')
	os.system(f'git push')
	index_html = index_html+1
	time.sleep(30)