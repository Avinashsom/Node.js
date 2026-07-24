import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

const DIARY= {

};
const EMAILS= new Set();

//1784916994565

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  if(email in EMAILS){
    return res.status(400).json({ error: "email already exists" });
  }
  EMAILS.add(email);
  //create a token for the user
  const token = `${Date.now()}`;
  //do a entry in diary
  DIARY[token]= { name, email, password };
  return res.status(200).json({ message: "signup successful", token });
});

app.post('/me', (req,res)=> {
    const { token } = req.body;
    if(!token){
        return res.status(400).json({ error: "token is required" });
    }
    if(!(token in DIARY)){
        return res.status(400).json({ error: "invalid token" });
    }
    const entry= DIARY[token];
    return res.status(200).json({ data: entry });
})

app.post("/private", (req,res)=> {
    const { token } = req.body;
    if(!token){
        return res.status(400).json({ error: "token is required" });
    }
    if(!(token in DIARY)){
        return res.status(400).json({ error: "invalid token" });
    }
    const entry= DIARY[token];
    return res.status(200).json({ data: {privateData: "access granted"} });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});