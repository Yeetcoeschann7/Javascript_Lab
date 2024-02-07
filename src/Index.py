import tornado.web
import os

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.render("..\\html\\roulette.html")

