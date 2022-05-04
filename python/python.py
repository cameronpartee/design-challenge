from bs4 import BeautifulSoup

with open("Summer Dresses _ Annika Bodycon Dress in White.html") as fp:
    soup = BeautifulSoup(fp, 'html.parser')

# soup = BeautifulSoup("<html>a web page</html>", "html.parser")

# print(soup.prettify())

# print(soup.get_text())

for link in soup.find_all("link"):
    print(link)

# for link in soup.find_all("href"):
#     print(link.get('href'))



# What do I want - tags 
# img url 
# store name 
# https://www.lucyinthesky.com/favicon.ico" rel="shortcut icon"/>
# <link href="https://www.lucyinthesky.com/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57"/> 

