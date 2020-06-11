import User from '../users/users.js';
import UserRepository from '../users/user-repository.js';

var userRepo = new UserRepository();

function handleUser(e) {
    e.preventDefault();
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var role = document.querySelector('input[name="role"]:checked').value;
    var text = document.getElementById('text').value;

    var user = new User(firstName, lastName, username, password, role, gender, '', text);

    userRepo.create(user);
}

function findUser(e) {
    var user = userRepo.findById(1);

    if (user != undefined) {
        console.log(user);
    }
    else {
        console.log("User not found!");
    }
}

function deleteUser(e) {
    userRepo.deleteById(1);
    console.log("User Deleted!");
}

function updateUser(e) {
    var user = userRepo.findById(1);
    user.firstName = "NewName";
    userRepo.update(user);
    console.log(userRepo.findById(1));
    console.log("User Updated!");
}

document.getElementById('create-user-form').addEventListener('submit', handleUser);
document.getElementById('find-user').addEventListener('click', findUser);
document.getElementById('delete-user').addEventListener('click', deleteUser);
document.getElementById('update-user').addEventListener('click', updateUser);
