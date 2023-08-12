import newsRouter from "./news.js";
export function route(app) {
    app.use('/news',newsRouter)
    app.get('/', (req, res) => {
        res.render('home');
        console.log(req.query)
    });
    /*
    app.get('/search', (req, res) => {
        res.render('search');
        
    });
    app.post('/search', (req, res) => {
        console.log(req.body)
        res.render('search');
        
    });
    
    /*
    app.get('/news',(req,res)=>{
        res.render("news")
    })*/
  }