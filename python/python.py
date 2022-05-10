# [HOWTO] run py script in terminal -> python gameover.py
# https://www.crummy.com/software/BeautifulSoup/bs4/doc/#id17

from bs4 import BeautifulSoup

# JasleneCorsetMiniDressinWhite.html
# Summer Dresses _ Annika Bodycon Dress in White.html
with open("Summer Dresses _ Annika Bodycon Dress in White.html") as fp:
    soup = BeautifulSoup(fp, 'html.parser')

prettySoup = soup.get_text().strip().replace(" ", "");
print(" ".join(prettySoup.split()));

# for link in soup.find_all("link"):
#     print(link)

# for link in soup.find_all("href"):
#     print(link.get('href'))




# Data
# picture
# store name 
# favicon
# --
# item name - parse for tags 