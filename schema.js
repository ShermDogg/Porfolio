const bcrypt = require('bcrypt');
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment')
const { createJwtToken } = require ('./utils/auth');
const dotenv =  require("dotenv")
dotenv.config();






const {GraphQLObjectType, GraphQLInt,
     GraphQLString, GraphQLBoolean,GraphQLNonNull, 
      GraphQLList,GraphQLSchema, GraphQLID } = require('graphql');
     
      

  



//launches
const UserType = new GraphQLObjectType({
    name: 'User',
    
    fields: () => ({     
    
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        email:{type: GraphQLString},
        phone:{type:GraphQLString},
        password: {type: GraphQLString},
        avatar:{type:GraphQLString},
        createdAt : { type : GraphQLString },
        city:{type:GraphQLString},
        state: {type:GraphQLString},
        zipcode: {type:GraphQLString},
        personNeedingCare:{type:GraphQLString},
        message:{type:GraphQLString},
                
          
        
         
        
        
        
        
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent,args){
                return Post.find({ authorID: parent.id });
            },
           
            
        }
    

    })
});


const PostType = new GraphQLObjectType({
    name: 'Post',
    
    fields: () => ({     
    
        id: {type: GraphQLID},
        email: {type:GraphQLString},
        body: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent,args) {
                return User.findById(parent.authorID);
            },
           
            
        
        },
        comments: {
            type: new GraphQLList(CommentType),
            resolve(parent, args) {
                return Comment.find({postId: parent.id})
            },
            
        
        }
    })
});
const CommentType = new GraphQLObjectType({
    name: 'Comment',
    description: "Comment Type",
    fields: () => ({
        id: {type: GraphQLID},
        comment: {type: GraphQLString},

        user:{
            type: UserType,
            resolve(parent,args){
                return User.findOne(parent.userID)
            },
        },
        post: {
            type: PostType,
            resolve: async(parent,args) => {
                return Post.findOne(parent.postId)

            }
        }


    }),
})

// Rocket type



//root query

const RootQuery =  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            
             resolve:  (parent,args) => {
                return  User.find({});
                
            }},

        user:{
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve: async(_, args) => {
                return await User.findOne(User._id);
            }},

        post:{
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve:(_, args) => {
                return Post.findById(args.id);
            }
        },
        posts:{
            type: new GraphQLList(PostType),
            resolve:  (parent,args) => {
                return  Post.find();
                
            }},

        comments:{
            type: new GraphQLList(CommentType),
            resolve() {
                return Comment.find()

            }},

         comment:{
             type: CommentType,
             args: {id: { type: GraphQLID}},
             resolve: async (_, args) => {
                 return await Comment.findById(args.id)

             }
         }
    }
});



const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: GraphQLString,
            args: {
                //GraphQLNonNull make these field required
                username: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: {type: new GraphQLNonNull(GraphQLString)},
                password: { type: new GraphQLNonNull(GraphQLString) },
                city:{type: new GraphQLNonNull(GraphQLString)},
                state:{type: new GraphQLNonNull(GraphQLString)},
                zipcode:{type: new GraphQLNonNull(GraphQLString)},
                personNeedingCare:{type: new GraphQLNonNull(GraphQLString)},
                message:{type: new GraphQLNonNull(GraphQLString)},
            
            },
            
             resolve: async (parent, args) =>  {
                const {username, email,  phone,  password, city, state, zipcode, personNeedingCare, message} = args
               
               
                
                const user = await new User({
                    
                    username,
                    email: email.trim().toLowerCase(),
                    phone,
                    password:  await bcrypt.hash(password, 10),
                    avatar: email,
                    createdAt: Date.now(),
                    city,
                    state,
                    zipcode,
                    personNeedingCare,
                    message,
                    
                    
                });
               
                
                const  token =  createJwtToken(user)
                
                 await  user.save()
                 
                 console.log(user)
                 
                 return token
                 
                 
        
            }},


        addPost: {
            type: PostType,
            args: {
                //GraphQLNonNull make these field require
                email: { type: new GraphQLNonNull(GraphQLString) },
                body: { type: new GraphQLNonNull(GraphQLString) },
                
            },
            resolve: async (parent, args, {verifiedUser}) => {
                console.log('Verified User:', verifiedUser)
                if (!verifiedUser) {
                    throw new Error("unAuthorized Mutha...")

                }
                
                let post = await new Post({
                    
                    email: args.email,
                    body: args.body,
                    authorID: verifiedUser._id,
                    
                });

                 await  post.save();
                 console.log(post)
                 return post
            }}, 

             updatePost: {
                type: PostType,
                description: "Update blog post",
                args: {
                  id: { type: GraphQLString },
                  email: { type: GraphQLString },
                  body: { type: GraphQLString },
                },
              resolve: async (parent, args, { verifiedUser }) => {
                  if (!verifiedUser) {
                    throw new Error("Unauthenticated")
                  }
                  const postUpdated = await Post.findOneAndUpdate(
                    {
                      _id: args.id,
                      authorId: verifiedUser._id,
                    },
                    { email: args.email,
                      body: args.body },
                    {
                      new: true,
                      runValidators: true,
                    }
                  )
              
                  if (!postUpdated) {
                    throw new Error("No post with the given ID found for the author")
                  }
              
                  return postUpdated
                }},

                 deletePost: {
                    type: GraphQLString,
                    description: "Delete post",
                    args: {
                      postId: { type: GraphQLString },
                    },
                    
                     resolve: async (parent, args, { verifiedUser }) => {
                      console.log(verifiedUser)
                      if (!verifiedUser) {
                        throw new Error("Unauthenticated")
                      }
                      const postDeleted = await Post.findOneAndDelete({
                        _id: args.postId,
                        authorId: verifiedUser._id,
                      })
                      if (!postDeleted) {
                        throw new Error("No post with the given ID found for the author")
                      }
                  
                      return "Post deleted"
                    }},

        addComment: {
            type: CommentType,

            args: {
            comment: {type: new GraphQLNonNull(GraphQLString)},
            postId: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve: async (parent, args, {verifiedUser}) => {

                let comment =  new Comment({
                   comment: args.comment,
                   userID: verifiedUser._id,
                   postId: args.postId,  
                })
                
                await comment.save()
                console.log(comment)
                return comment

            }},
             updateComment: {
                type: CommentType,
                description: "Update blog comment",
                args: {
                  id: { type: GraphQLString },
                  comment: { type: GraphQLString },
                },
                
                 resolve: async (parent, args, { verifiedUser }) => {
                  if (!verifiedUser) {
                    throw new Error("Unauthenticated")
                  }
                  const commentUpdated = await Comment.findOneAndUpdate(
                    {
                      _id: args.id,
                      userId: verifiedUser._id,
                    },
                    { comment: args.comment },
                    {
                      new: true,
                      runValidators: true,
                    }
                  )
              
                  if (!commentUpdated) {
                    throw new Error("No comment with the given ID found for the author")
                  }
              
                  return commentUpdated
                }},
                 deleteComment: {
                    type: GraphQLString,
                    description: "Delete comment",
                    args: {
                      commentId: { type: GraphQLString },
                    },
                    
                     resolve: async (parent, args, { verifiedUser }) => {
                      console.log(verifiedUser)
                      if (!verifiedUser) {
                        throw new Error("Unauthenticated")
                      }
                      const commentDeleted = await Comment.findOneAndDelete({
                        _id: args.commentId,
                        userId: verifiedUser._id,
                      })
                      if (!commentDeleted) {
                        throw new Error("No post with the given ID found for the author")
                      }
                  
                      return "Post deleted"
                    }},


        login: {
            type: GraphQLString,
            args: {
                //GraphQLNonNull make these field require
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                
            },
            resolve: async (parent, args) => {
              const {email, password} = args
               
                const user = await User.findOne({email}).select("+password")
                if(!user) {
                  console.log('NO USER EXIST')
                }
                const match = await   bcrypt.compare(password,  user.password)
                if (!match) {
                  console.log("WRONG PASSWORD")
                }
                
                console.log(user)

               const token = await createJwtToken(user);
               
               console.log(token)
             
               
               return token
            }
        },
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
    
    
});