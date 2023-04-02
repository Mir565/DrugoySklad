router.get('/user/dashboard',checker,(req,res)=>{
    res.render('dashboard')
})

router.get('/all/users',checker,async(req,res)=>{
    const data=await RunSQL("SELECT * FROM USERS")
    res.json(data)
})
module.exports=router;