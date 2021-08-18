const Article = require('../models/Articles');

const get_all_article = async(req,res) =>
{
    const allBooks = await Article.find();
    res.json(
        {
            total_records : allBooks.length,
            books : allBooks
        }
    )
}

const add_new_article = async (req,res) =>
{
   try{
    const { newArticle } = req.body;
    const article_new = await Article.create(newArticle);
    res.json({
        msg : "New Article Added",
        article : newArticle
    });
   }
   catch(err)
   {
       res.status(400).json({
           err:err.message
       });
   }

}

const del_all_article = async(req,res) =>
{
    try{
    await Article.deleteMany()
    res.json({
        msg : "Successfully Deleted Articles"
    })
    }
    catch(err)
    {
        res.status(400).json({
            err : err.message
        })
    }
}

const get_specific_article = async (req,res) =>
{
    try{
    const getArticle = await Article.findOne({ title : req.params.title });
    res.json({
        article : getArticle
    })
    }
    catch(err)
    {
        res.status(400).json({
            err : err.message
        })
    }

}

const update_specific_article = async(req,res) =>
{
    const { articleTitle, articleContent } = req.body;
    const { title } = req.params;

    try
    {
        
    const updatedArticle = await Article.updateMany(
        {
            title
        },
        {
            title : articleTitle,
            content : articleContent
        },
        {
            overwrite:true
        }
    );
    res.json(
        {
            msg : "Updated",
            updated_data : updatedArticle 
        }
    )
    }
    catch(err)
    {
        res.status(400).json({
            msg : err.message
        })
    }
}

const patch_specific_article = async(req,res) =>
{
    const { title } = req.params;

    try
    {
        
    const updatedArticle = await Article.updateMany(
        {
            title
        },
        {
            $set: req.body
        },
        {
            new:true
        }
    );
    res.json(
        {
            msg : "Updated",
            updated_data : updatedArticle 
        }
    )
    }
    catch(err)
    {
        res.status(400).json({
            msg : err.message
        })
    }
}


const delete_specific_article = (req,res) =>
{
    try
    {
        Article.deleteOne(
            {
                title : req.params.title
            }
        );
    
        res.json(
            {
                msg : "Deletion Successfull"
            }
        )
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = { get_all_article, add_new_article,del_all_article,get_specific_article, update_specific_article, patch_specific_article, delete_specific_article }