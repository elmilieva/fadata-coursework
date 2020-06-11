import Post from '../posts/posts.js';
import PostRepository from '../posts/post-repository.js';

var postRepo = new PostRepository();

function handlePost(e) {
    e.preventDefault();
    var title = document.getElementById('title').value;
    var text = document.getElementById('text').value;
    var tags = document.getElementById('tags').value;
    tags = tags.split(',');

    var post = new Post(title, 'hardcodedAuthor', text, tags, '')

    postRepo.create(post);
}

function findPost(e) {
    var post = postRepo.findById(1);

    if (post != undefined) {
        console.log(post);
    }
    else {
        console.log("Post not found!");
    }
}

function deletePost(e) {
    postRepo.deleteById(1);
    console.log("Post Deleted!");
}

function updatePost(e) {
    var post = postRepo.findById(1);
    post.author = "newAuthor";
    postRepo.update(post);
    console.log(postRepo.findById(1));
    console.log("Post Updated!");
}

document.getElementById('create-post-form').addEventListener('submit', handlePost);
document.getElementById('find-post').addEventListener('click', findPost);
document.getElementById('delete-post').addEventListener('click', deletePost);
document.getElementById('update-post').addEventListener('click', updatePost);
