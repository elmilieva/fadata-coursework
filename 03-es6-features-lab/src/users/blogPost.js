let nextId = 0;

class Entity {
    static getnextId() {
        return ++nextId;
    }
    constructor({ id, created, modified }) {

        this.id = id || Entity.getnextId();
        this.created = modified || new Date();
        this.modified = modified || new Date();
    }
    toString() {
        return `        id: ${this.id}, 
        created: ${this.created}, 
        modified: ${this.modified}`;
    }
}

class BlogPost extends Entity {
    status = 'active';
    dateOfPublication = new Date();
    constructor(title, author, text, tags, imgageURL, status = true) {
        super({});
        this.title = title;
        this.author = author;
        this.text = text;
        this.tags = tags;
        this.imgageURL = imgageURL;

    }
    toString() {
        return `${super.toString()}, 

        dateOfPublication: ${this.dateOfPublication}, 
        title: ${this.title},
        author: ${this.author}, 
        text: ${this.text}, 
        tags: ${this.tags}, 
        imageURL: ${this.imgageURL},
        status: ${this.status}`;
    }
}

// const admin = new User("Default", "Admin", "admin", "admin", "admin", 'admin',
//     'https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png',
//     'NON_BINARY',

//     'Default admin created by the sys.');

// console.log(admin.toString());

export default BlogPost;
module.exports.Entity = Entity;
//module.exports.BlogPost = BlogPost;