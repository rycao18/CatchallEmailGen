import math
import random

chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
emaillength = 15
domain = "@rycao.me"


def generateEmail():
	email = ""
	for letter in range(0, emaillength):
		email += chars[math.floor(random.random() * len(chars))]
	email += domain
	print(email)
	return email

generateEmail()