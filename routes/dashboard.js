router.get('/user/dashboard',checker,(req,res)=>{
    res.render('dashboard')
})
module.exports=router;