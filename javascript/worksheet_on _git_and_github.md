




1.A Version Control System (VCS) helps manage and track changes to code over time. It allows multiple developers to collaborate, recover previous versions, and avoid conflicts.


2.Centralized VCS uses a single central server to store all versions. Distributed VCS (like Git) allows each user to have a full copy of the repository locally.


3.Git is a distributed version control system for tracking changes in source code. GitHub is a cloud-based platform that hosts Git repositories and offers collaboration tools.


4.The staging area (or index) is where you prepare files before committing. It lets you group changes logically before saving them to history with a commit.


5.The .git folder contains metadata and version history of your repository including logs, branches, configs, and objects.


6.Git branching allows you to work on different features separately.Git branching is a feature in Git that allows you to create separate lines of development within a repository. Each branch can have its own set of commits, allowing you to work on different features or fixes independently without affecting the main codebase.
Command:
git checkout -b new-branch


7.git reset moves the branch pointer and keeps changes in working directory.
   git reset --hard also removes changes from the working directory.


8.A squash merge combines all commits from a branch into a single commit. Use it to keep the commit history clean before merging into the main branch.


9.git rebase moves or reapplies commits from one branch to another.
Example: Rebasing a feature branch onto the updated main branch to avoid merge commits.



Task 1.
mkdir git-practice
cd git-practice
git init
echo "This is my first git file." > notes.txt
git add notes.txt
git commit -m "Add initial notes.txt file"
git status
git log
git log --oneline


Task 2 .
echo "console.log('Hello!');" > hello.js
git add hello.js
git commit -m "Add hello.js file"
git reset --hard HEAD~1
git log


Task 3 .

(Go to https://github.com → New Repository → Name it git-practice-repo)
git remote add origin https://github.com/your-username/git-practice-repo.git
git branch -M main
git push -u origin main


Task 4 .

git checkout -b feature-login
echo "<h1>Login</h1>" > login.html
git add login.html
git commit -m "Add login.html"
git checkout main
git merge feature-login

Task 5: Squash Merge

git checkout -b feature-about
Make 3 commits in feature-about
git checkout main
git merge --squash feature-about
git commit -m "Squash merge feature-about"
git log --oneline


Task 6: Rebase

git checkout -b feature-xyz
echo "Feature XYZ work" >> file1.txt
git add file1.txt
git commit -m "Add feature XYZ work"
git checkout main
git checkout -b feature-abc


Task 7 .

https://github.com/ChahatRana/newproj.git

-----Chahat Rana
-----chahatrana2004@gmail.com
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ChahatRana/newproj.git
git push -u origin main

