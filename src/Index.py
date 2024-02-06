import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.write('Index')
        #self.render("profilepage.html")

