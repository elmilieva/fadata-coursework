const BlogPost = require('./blogPost').BlogPost;

const MOCK_BLOGPOSTS = [

    new BlogPost('title', 'Author', 'text', ['1','2'], 
        'https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png',
        ),

        new BlogPost('Example1', 'Eliza', 'bla-bla', ['1','2'], 
        'https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png',
        ),

        new BlogPost('Example2', 'Ivan', 'bla', ['1','2'], 
        'https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png',
        ),

];

let nextId = 0;
class BlogPostRepository {
    blogPosts = new Map();
    constructor() {
        MOCK_BLOGPOSTS.forEach(blog => this.create(blog));
      
    }
    create(blog) {
        blog.id = ++nextId;
        this.blogPosts.set(blog.id, blog);
        return blog;
    }
    findAll() {
        return this.blogPosts.values();
    }
    findById(id){
        return this.blogPosts.get(id);
    }
    update(blog) {
        this.blogPosts.set(blog.id, blog);
    }
    deleteById(id){
        return this.blogPosts.delete(id);
    }
    getCount(){
        return this.blogPosts.size;
    }
}

const blogPostRepo = new BlogPostRepository();
// for (const user of userRepo.findAll()) {

    const firstBlogPost = blogPostRepo.findById(1);
    firstBlogPost.title = 'New Title';
    blogPostRepo.update(firstBlogPost);
    console.log(Array.from(blogPostRepo.findAll()));

    blogPostRepo.deleteById(2);
    console.log(Array.from(blogPostRepo.findAll()));
    console.log(blogPostRepo.getCount());

