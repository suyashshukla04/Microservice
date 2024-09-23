

export const updateMid = (schema) => (req,res,next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}