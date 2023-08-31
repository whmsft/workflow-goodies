import os, time
os.system(f'git config --global user.email "whmsft@duck.com"')
os.system(f'git config --global user.name "Automaton"')
os.system(f'git clone https://whmsft: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@github.com/whmsft/whmsft.github.io.git')
index_html = 1
while True:
	print(f'Loop #{index_html}')
	open("./whmsft.github.io/index.html", "w+").writelines(str(index_html))
	os.system(f'cd whmsft.github.io && git add . && git commit -m "Automated Response" && git push && cd ..')
	index_html = index_html+1
	time.sleep(30)