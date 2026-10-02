const post = require('../models/post.js');
const createPost = async(req, res) =>{
    try {
        const post = await post.create(req.body);
        res.status(201).json(post)({
            message : 'Post Created Successfully',
            post
        });
        } catch(error){
            res.status(500).json({
                message : 'Failed to create post',
                error : error.message
            });
        }
}
const getPosts = async(req,res) =>{
    try{
        const posts = await post.find();
        res.status(200).json(posts);
    }catch(error){
        res.status(500).json({
            message : 'Posts not found',
            error : error.message
        });
    }
}
const getPostById = async(req,res) =>{
    try {
        const post = await post.findById(req.params.id);
        if(!post){
            return res.status(404).json({
                message :'post not found'
            });
        }
        res.status(200).json(post);
    } catch(error){
        res.status(500).json({
            message : 'Failed to fetch post',
            error : error.message
        });
    }
}
const updatePost = async(req,res) =>{
    try {
        const post = await post.findByIdUpdate(
            req.params.id,
            req.body,
            {
                new : true,
                runValidators : true
            }
        );
        if(!post){
            return res.status(404).json({
                message : 'post not found'
            });
        }
        res.status(200).json({
            message : 'post updated successfully',
            post
        });
        } catch(error){
            res.status(500).json({
                message : 'Failed to update post',
                error : error.message
            });
        }
    }
    const deletePost = async(req,res) =>{
        try {
            const post = await post.findByIdAndDelete(req.params.id);
            if(!post){
                return res.status(404).json({
                    message : 'post not found'
                });
               }
                res.status(200).json({
                    message : 'post deleted succesfully'
                }); 
                }catch(error){
                    res.status(500).json({
                        message : 'Failed to delete post',
                        error : error.message
                    });

        }
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
};