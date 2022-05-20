export function validateIdTest(req, res, next){
    const { id } = req.params;
    if(!id){
        return res.status(422).send('To search for a proof it is necessary to inform the id');
    }
    res.locals = { id };
    next();
}